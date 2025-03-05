from sqlalchemy.orm import Session
from passlib.context import CryptContext
from app.models.user import User
from app.schemas.user import UserCreate, UserLogin, UserScoreUpdate
from uuid import uuid4

pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

def get_password_hash(password):
    return pwd_context.hash(password)

def create_user(db: Session, user_data: UserCreate):
    user_id = str(uuid4())
    new_user = User(
        id=user_id, 
        username=user_data.username, 
        email=user_data.email, 
        hashed_password=get_password_hash(user_data.password) if user_data.password else None,
        social_login_provider=user_data.social_login_provider,
        social_login_id=user_data.social_login_id,
        game_age=user_data.game_age
    )
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user

def authenticate_user(db: Session, user_data: UserLogin):
    user = db.query(User).filter(User.email == user_data.email).first()
    if not user:
        return None
    if user_data.password and not pwd_context.verify(user_data.password, user.hashed_password):
        return None
    if user_data.social_login_provider and user_data.social_login_id != user.social_login_id:
        return None
    return user

def update_user_score(db: Session, score_update: UserScoreUpdate):
    user = db.query(User).filter(User.id == score_update.user_id).first()
    if not user:
        return None
    user.game_score = score_update.game_score
    db.commit()
    return user