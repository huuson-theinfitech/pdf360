from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from app.config import config
from app.routers import pdf as pdf_router
from app.routers import coordinate as coordinate_router
from fastapi.staticfiles import StaticFiles

app = FastAPI()
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

db_url = config.SQLALCHEMY_DATABASE_URI

app.mount("/uploads", StaticFiles(directory="uploads"), name="uploads")
app.include_router(pdf_router.router)
app.include_router(coordinate_router.router)

