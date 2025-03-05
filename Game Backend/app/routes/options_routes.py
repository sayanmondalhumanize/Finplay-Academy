from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.options_service import scrape_options_data

options_router = APIRouter()

@options_router.get("/scrape")
def get_options_data(db: Session = Depends(get_db)):
    return scrape_options_data(db)
