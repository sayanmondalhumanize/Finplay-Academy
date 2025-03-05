from sqlalchemy import Column, String, Integer
from app.database import Base

class User(Base):
    __tablename__ = "users"
    id = Column(String, primary_key=True, index=True)
    username = Column(String, unique=True, index=True)
    email = Column(String, unique=True, index=True)
    hashed_password = Column(String, nullable=True)
    social_login_provider = Column(String, nullable=True)
    social_login_id = Column(String, nullable=True)
    game_score = Column(Integer, default=0)
    game_age = Column(Integer)
