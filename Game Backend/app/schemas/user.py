from pydantic import BaseModel
from typing import Optional

class UserCreate(BaseModel):
    username: str
    email: str
    password: Optional[str] = None
    social_login_provider: Optional[str] = None
    social_login_id: Optional[str] = None
    game_age: int

class UserLogin(BaseModel):
    email: str
    password: Optional[str] = None
    social_login_provider: Optional[str] = None
    social_login_id: Optional[str] = None

class UserScoreUpdate(BaseModel):
    user_id: str
    game_score: int