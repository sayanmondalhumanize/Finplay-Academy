from sqlalchemy.orm import Session
from app.models.scenario import Scenario
from app.schemas.scenario import ScenarioCreate

def create_scenario(db: Session, scenario_data: ScenarioCreate):
    scenario = Scenario(
        name=scenario_data.name,
        description=scenario_data.description,
        difficulty=scenario_data.difficulty,
    )
    db.add(scenario)
    db.commit()
    db.refresh(scenario)
    return scenario

def get_all_scenarios(db: Session):
    return db.query(Scenario).all()
