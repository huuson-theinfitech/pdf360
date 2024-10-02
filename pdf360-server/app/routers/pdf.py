from fastapi import APIRouter, Depends, UploadFile, status, HTTPException, File
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.pdf.list_pdf_service import get_list_pdf_service
from app.services.pdf.upload_pdf_service import upload_pdf_service

router = APIRouter()

@router.get("/pdf/list-pdf")
def list_pdf(db: Session = Depends(get_db)):
    return get_list_pdf_service(db)

@router.post("/pdf/upload-pdf")
def upload_pdf(file: UploadFile = File(...), db: Session = Depends(get_db)):    
    if file.content_type != "application/pdf":
        raise upload_pdf_service(
            status_code=status.HTTP_400_BAD_REQUEST,
            detail="Only PDF files are allowed."
        )
    
    try:
        pdf_file = upload_pdf_service(file, db)
        return {"message": "File uploaded successfully", "file_id": pdf_file.id, "file_path": pdf_file.file_path}
    
    except Exception as e:
        raise HTTPException(
            status_code=status.HTTP_500_INTERNAL_SERVER_ERROR,
            detail=f"File upload failed: {e}"
        )
    