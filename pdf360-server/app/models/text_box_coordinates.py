from sqlmodel import SQLModel, ForeignKey, Field
import uuid
from datetime import datetime

class TextBoxCoordinates (SQLModel, table=True):
    __tablename__ = "text_box_coordinates"

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True, index=True)
    pdf_id: uuid.UUID = Field(ForeignKey("pdf_files.id"), nullable=False)
    x_coordinate : float = Field(nullable=False)
    y_coordinate : float = Field(nullable=False)
    box_width : float = Field(nullable=False)
    box_height : float = Field(nullable=False)
    text : str = Field(nullable=False)
    created_stamp: datetime = Field(default_factory=datetime.utcnow)
    last_updated: datetime = Field(default_factory=datetime.utcnow)


    


     