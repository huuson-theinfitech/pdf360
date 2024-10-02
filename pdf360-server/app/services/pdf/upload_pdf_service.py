from sqlalchemy.orm import Session
from fastapi import UploadFile
import os
from pathlib import Path
from app.models.pdf_files import PdfFiles
from pdfminer.pdfpage import PDFPage
from pdfminer.pdfparser import PDFParser
from pdfminer.pdfdocument import PDFDocument
import math

UPLOAD_DIRECTORY = "uploads/"

dpi = 96

def points_to_pixels(points, dpi):
    return points * (dpi / 72)

def get_page_width_in_points(page):
    return page.mediabox[2] - page.mediabox[0]

def upload_pdf_service(file: UploadFile, db: Session) -> PdfFiles:
    Path(UPLOAD_DIRECTORY).mkdir(parents=True, exist_ok=True)
    file_path = os.path.join(UPLOAD_DIRECTORY, file.filename)

    with open(file_path, "wb") as out_file:
        out_file.write(file.file.read())

    with open(file_path, "rb") as pdf_file_stream:
        parser = PDFParser(pdf_file_stream)
        document = PDFDocument(parser)
        
        pages = list(PDFPage.create_pages(document))
        if not pages:
            raise Exception("No pages found in PDF")
        
        page = pages[0]
        page_width = get_page_width_in_points(page)

    pdf_file = PdfFiles(file_name=file.filename, file_path=file_path, page_width=math.ceil(points_to_pixels(page_width, dpi)))
    db.add(pdf_file)
    db.commit()
    db.refresh(pdf_file)

    return pdf_file
