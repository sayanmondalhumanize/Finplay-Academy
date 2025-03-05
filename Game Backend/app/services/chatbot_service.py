from sqlalchemy.orm import Session
from app.models.chatbot import ChatbotMessage
from transformers import pipeline, AutoModelForCausalLM, AutoTokenizer
import torch
import os

# Load optimized local LLM
model_name = "facebook/opt-1.3b"
offload_folder = "./model_offload"
os.makedirs(offload_folder, exist_ok=True)

tokenizer = AutoTokenizer.from_pretrained(model_name)
model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=torch.float16,
    device_map="cpu",
    offload_folder=offload_folder
)

def get_intelligent_response(user_message: str, history=[]):
    input_text = "\n".join(history + [user_message])
    input_ids = tokenizer.encode(input_text, return_tensors="pt").to("cpu")
    output = model.generate(input_ids, max_length=200, num_return_sequences=1)
    response_text = tokenizer.decode(output[0], skip_special_tokens=True)
    return response_text.strip()

def save_chat_message(db: Session, user_message: str, bot_response: str):
    chat_message = ChatbotMessage(user_message=user_message, bot_response=bot_response)
    db.add(chat_message)
    db.commit()
    db.refresh(chat_message)
    return chat_message