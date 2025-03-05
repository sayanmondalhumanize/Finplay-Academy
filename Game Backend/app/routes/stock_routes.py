from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.stock_service import scrape_stock_data

stock_router = APIRouter()

@stock_router.get("/scrape")
def get_stock_data(db: Session = Depends(get_db)):
    return scrape_stock_data(db)