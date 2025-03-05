from sqlalchemy import Column, String, Float
from app.database import Base

class Crypto(Base):
    __tablename__ = "crypto"
    symbol = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    price = Column(Float, nullable=False)
    change = Column(Float, nullable=False)
    percent_change = Column(Float, nullable=False)
    market_cap = Column(Float, nullable=True)