from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database import get_db
from app.schemas.scenario import ScenarioCreate, ScenarioResponse
from app.services.scenario_service import create_scenario, get_all_scenarios

scenario_router = APIRouter()

@scenario_router.post("/", response_model=ScenarioResponse)
def add_scenario(scenario: ScenarioCreate, db: Session = Depends(get_db)):
    return create_scenario(db, scenario)

@scenario_router.get("/", response_model=list[ScenarioResponse])
def list_scenarios(db: Session = Depends(get_db)):
    return get_all_scenarios(db)
