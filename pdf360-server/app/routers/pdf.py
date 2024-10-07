from fastapi import APIRouter, Depends, UploadFile, status, HTTPException, File
from sqlalchemy.orm import Session
from app.database import get_db
import app.services.pdf as pdf_service
router = APIRouter()

@router.get("/pdf/list-pdf")
def list_pdf(db: Session = Depends(get_db)):
    return pdf_service.get_list_pdf_service(db)

@router.post("/pdf/upload-pdf")
def upload_pdf(file: UploadFile = File(...), db: Session = Depends(get_db)):    
    if file.content_type != "application/pdf":
        raise pdf_service.upload_pdf_service(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF files are allowed."
        )
    
    try:
        pdf_file = pdf_service.upload_pdf_service(file, db)
        return {"message": "File uploaded successfully", "file_id": pdf_file.id, "file_path": pdf_file.file_path}
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"File upload failed: {e}"
        )

@router.delete("/pdf/delete-pdf/{pdf_id}")
def delete_pdf(pdf_id: str, db: Session = Depends(get_db)):
    return pdf_service.delete_pdf_service(pdf_id, db)