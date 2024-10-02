from sqlmodel import SQLModel, Field
import uuid
from datetime import datetime

class PdfFiles(SQLModel, table=True):
    __tablename__ = "pdf_files" 

    id: uuid.UUID = Field(default_factory=uuid.uuid4, primary_key=True)  
    file_name: str = Field(max_length=255, nullable=False) 
    file_path: str = Field(max_length=255, nullable=False) 
    page_width: float = Field(nullable=False)
    created_stamp: datetime = Field(default_factory=datetime.utcnow)
    last_updated: datetime = Field(default_factory=datetime.utcnow)
