from pydantic import BaseModel

class OptionsBase(BaseModel):
    symbol: str
    name: str
    last_price: float
    change: float
    percent_change: float
    volume: float