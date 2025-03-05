from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.services.crypto_service import scrape_crypto_data

crypto_router = APIRouter()

@crypto_router.get("/scrape")
def get_crypto_data(db: Session = Depends(get_db)):
    return scrape_crypto_data(db)