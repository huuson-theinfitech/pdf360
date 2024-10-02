from pydantic import BaseModel
import uuid
from datetime import datetime

class HtmlBaseModel(BaseModel):
    id: uuid.UUID
    pdf_id: uuid.UUID
    html_content: str
    created_stamp: datetime
    last_updated: datetime

class GetHtmlResponse(BaseModel):
    data: HtmlBaseModel