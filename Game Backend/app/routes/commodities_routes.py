from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.commodities_service import scrape_commodities_data

commodities_router = APIRouter()

@commodities_router.get("/scrape")
def get_commodities_data(db: Session = Depends(get_db)):
    return scrape_commodities_data(db)
