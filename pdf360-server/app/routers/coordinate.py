from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.services.coordinates.list_coordinate_service import list_coordinate_service
from app.database import get_db  
from app.schema.coordinate import GetCoordinateResponse

router = APIRouter()

@router.get("/pdf/{pdf_id}/coordinates", response_model= GetCoordinateResponse) 
def get_pdf_coordinates(pdf_id: str, db: Session = Depends(get_db)):
    return {"data":list_coordinate_service(pdf_id, db)}