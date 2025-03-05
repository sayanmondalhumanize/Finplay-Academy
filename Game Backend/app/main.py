from fastapi import FastAPI
from app.routes.scenario_routes import scenario_router
from app.routes.user_routes import user_router
from app.routes.stock_routes import stock_router
from app.routes.chatbot_routes import chatbot_router
from app.routes.crypto_routes import crypto_router
from app.routes.options_routes import options_router
from app.routes.commodities_routes import commodities_router
from app.database import engine, Base
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# CORS Middleware
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Initialize Database
Base.metadata.create_all(bind=engine)

# Include Routers
app.include_router(user_router, prefix="/users", tags=["Users"])
app.include_router(stock_router, prefix="/stocks", tags=["Stocks"])
app.include_router(chatbot_router, prefix="/chatbot", tags=["Chatbot"])
app.include_router(commodities_router, prefix="/commodities", tags=["Commodities"])
app.include_router(scenario_router, prefix="/scenarios", tags=["Scenarios"])
app.include_router(crypto_router, prefix="/crypto", tags=["Crypto"])
app.include_router(options_router, prefix="/optiontread", tags=["Options"])
