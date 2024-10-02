from sqlalchemy.orm import Session
from app.models.text_box_coordinates import TextBoxCoordinates
from app.models.pdf_files import PdfFiles
from pdfminer.layout import LAParams, LTTextBox
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfinterp import PDFResourceManager
from pdfminer.pdfinterp import PDFPageInterpreter
from pdfminer.converter import PDFPageAggregator
from datetime import datetime

dpi = 96

def points_to_pixels(points, dpi):
    return points * (dpi / 72)

def get_page_height_in_points(page):
    return page.mediabox[3] - page.mediabox[1]

def list_coordinate_service(pdf_id: str,db: Session):
    exist_text_boxes = db.query(TextBoxCoordinates).filter(TextBoxCoordinates.pdf_id == pdf_id).all()
    if exist_text_boxes:
        return exist_text_boxes

    pdf_file = db.query(PdfFiles).filter(PdfFiles.id == pdf_id).first()
    if not pdf_file:
        raise FileNotFoundError(f"Không tìm thấy file PDF với id: {pdf_id}")

    input_pdf = pdf_file.file_path

    char_margin = 30
    line_margin = 0.75
    vertical_detect = False

    fp = open(input_pdf, 'rb')
        
    rsrcmgr = PDFResourceManager()

    laparams = LAParams(
        char_margin=char_margin,
        line_margin=line_margin,
        detect_vertical=vertical_detect
    )

    device = PDFPageAggregator(rsrcmgr, laparams=laparams)
    interpreter = PDFPageInterpreter(rsrcmgr, device)

    text_boxes = []
    page_offsets = [] 
    page_heights = [] 

    page_y_offset = 0
    for page in PDFPage.get_pages(fp):
        page_height = get_page_height_in_points(page)
        page_heights.append(page_height)
        
        page_offsets.append(page_y_offset)
        page_y_offset += page_height

    fp.seek(0)

    for i, page in enumerate(PDFPage.get_pages(fp)):
        interpreter.process_page(page)
        layout = device.get_result()

        page_height = page_heights[i]
        current_page_offset = page_offsets[i]

        for lobj in layout:
            if isinstance(lobj, LTTextBox):
                x0, y0, x1, y1 = lobj.bbox
                width = x1 - x0
                height = y1 - y0
                text = lobj.get_text()

                x0_px = points_to_pixels(x0, dpi)
                y0_px = points_to_pixels((page_height - y1) + current_page_offset, dpi)
                width_px = points_to_pixels(width, dpi)
                height_px = points_to_pixels(height, dpi)

                text_box = TextBoxCoordinates(
                    pdf_id=pdf_file.id,
                    x_coordinate = x0_px,
                    y_coordinate = y0_px,
                    box_width = width_px,
                    box_height = height_px,
                    text = text.replace('\x00', ''),
                    created_stamp=datetime.utcnow(),
                    last_updated=datetime.utcnow()
                )
                db.add(text_box)
                text_boxes.append(text_box)
        db.commit()
    return text_boxes



