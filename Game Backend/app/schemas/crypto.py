from pydantic import BaseModel

class CryptoBase(BaseModel):
    symbol: str
    name: str
    price: float
    change: float
    percent_change: float
    market_cap: float | None