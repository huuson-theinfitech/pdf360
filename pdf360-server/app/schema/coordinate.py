from pydantic import BaseModel
from datetime import datetime
import uuid

class CoordinateBaseModel(BaseModel):
    id: uuid.UUID
    pdf_id: uuid.UUID
    x_coordinate : float 
    y_coordinate : float 
    box_width : float 
    box_height : float 
    text : str 
    created_stamp: datetime
    last_updated: datetime

class GetCoordinateResponse(BaseModel):
    data: list[CoordinateBaseModel]

