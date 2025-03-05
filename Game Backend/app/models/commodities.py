from sqlalchemy import Column, String, Float
from app.database import Base

class Commodities(Base):
    __tablename__ = "commodities"
    symbol = Column(String, primary_key=True, index=True)
    name = Column(String, nullable=False)
    last_price = Column(Float, nullable=False)
    change = Column(Float, nullable=False)
    percent_change = Column(Float, nullable=False)
    volume = Column(Float, nullable=False)
