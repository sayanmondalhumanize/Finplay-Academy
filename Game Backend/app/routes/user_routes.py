from fastapi import APIRouter, HTTPException, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.user import UserCreate, UserLogin, UserScoreUpdate
from app.services.user_service import create_user, authenticate_user, update_user_score

user_router = APIRouter()

@user_router.post("/register")
def register_user(user: UserCreate, db: Session = Depends(get_db)):
    return create_user(db, user)

@user_router.post("/login")
def login_user(user: UserLogin, db: Session = Depends(get_db)):
    authenticated_user = authenticate_user(db, user)
    if not authenticated_user:
        raise HTTPException(status_code=401, detail="Invalid credentials")
    return {"message": "Login successful", "user_id": authenticated_user.id}

@user_router.post("/update_score")
def update_score(score_update: UserScoreUpdate, db: Session = Depends(get_db)):
    updated_user = update_user_score(db, score_update)
    if not updated_user:
        raise HTTPException(status_code=404, detail="User not found")
    return {"message": "Score updated", "game_score": updated_user.game_score}