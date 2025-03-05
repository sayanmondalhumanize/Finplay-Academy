from pydantic import BaseModel

class CommoditiesBase(BaseModel):
    symbol: str
    name: str
    last_price: float
    change: float
    percent_change: float
    volume: float