from sqlalchemy.orm import Session
import os
from app.models.pdf_files import PdfFiles
from http import HTTPStatus
from fastapi import Response,HTTPException
import time

import uuid
def delete_pdf_service(pdf_id:str, db: Session): 
    pdf_file = db.query(PdfFiles).filter(PdfFiles.id == pdf_id).first()
    if not pdf_file:
        raise HTTPException(status_code=404, detail="PDF file not found")
    db.delete(pdf_file)
    db.commit()
    try: 
        os.remove(pdf_file.file_path)    
    except PermissionError:
        print("File is being used by another process. Retrying...")
        time.sleep(1)  

    return pdf_file
