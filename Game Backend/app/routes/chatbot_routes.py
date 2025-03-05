from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.chatbot import ChatRequest, ChatResponse
from app.services.chatbot_service import get_intelligent_response, save_chat_message
from app.models.chatbot import ChatbotMessage

chatbot_router = APIRouter()

@chatbot_router.post("/ask", response_model=ChatResponse)
def chat_with_bot(request: ChatRequest, db: Session = Depends(get_db)):
    chat_history = db.query(ChatbotMessage).order_by(ChatbotMessage.id.desc()).limit(5).all()
    history = [msg.user_message for msg in reversed(chat_history)]
    bot_response = get_intelligent_response(request.message, history)
    save_chat_message(db, request.message, bot_response)
    return {"response": bot_response}