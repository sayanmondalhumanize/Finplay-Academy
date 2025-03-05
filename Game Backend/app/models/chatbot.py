from sqlalchemy import Column, String, Integer
from app.database import Base

class ChatbotMessage(Base):
    __tablename__ = "chatbot_messages"
    id = Column(Integer, primary_key=True, index=True)
    user_message = Column(String, nullable=False)
    bot_response = Column(String, nullable=False)