from pydantic import BaseModel

class ScenarioCreate(BaseModel):
    name: str
    description: str
    difficulty: str

class ScenarioResponse(ScenarioCreate):
    id: int
