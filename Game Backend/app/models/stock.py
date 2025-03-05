from sqlalchemy import Column, String, Float
from app.database import Base

class Stock(Base):
    __tablename__ = "stocks"
    symbol = Column(String, primary_key=True, index=True)
    name = Column(String)
    price = Column(Float)
    change = Column(Float)
    percent_change = Column(Float)
    volume = Column(Float)
    precent_fiftytwo_week_change = Column(String)