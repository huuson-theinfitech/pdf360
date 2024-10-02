from sqlalchemy.orm import Session
from app.models.pdf_files import PdfFiles

def get_list_pdf_service(db: Session):
    return db.query(PdfFiles).order_by(PdfFiles.created_stamp.desc()).all()