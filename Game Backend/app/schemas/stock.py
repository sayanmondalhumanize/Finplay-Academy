from pydantic import BaseModel

class StockBase(BaseModel):
    symbol: str
    name: str
    price: float
    change: float
    percent_change: float
    volume: float
    precent_fiftytwo_week_change: str