# Enterprise-Level Financial Game Backend (FastAPI)

## Directory Structure
The project is organized as follows:
```
├── app
│   ├── __init__.py
│   ├── main.py
│   ├── models
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── scenario.py
│   ├── routes
│   │   ├── __init__.py
│   │   ├── user_routes.py
│   │   ├── scenario_routes.py
│   │   └── leaderboard_routes.py
│   ├── services
│   │   ├── __init__.py
│   │   ├── user_service.py
│   │   └── scenario_service.py
│   ├── schemas
│   │   ├── __init__.py
│   │   ├── user.py
│   │   └── scenario.py
│   └── database.py
├── requirements.txt
└── README.md
```
## Detailed Directory Structure

### app
This is the main application directory containing all the core components of the backend.

#### __init__.py
This file makes the directory a package.

#### main.py
The entry point of the application where the FastAPI instance is created and configured.

### models
Contains the ORM models that define the structure of the database tables.

- **__init__.py**: Initializes the models package.
- **user.py**: Defines the User model.
- **scenario.py**: Defines the Scenario model.

### routes
Contains the route definitions for the API endpoints.

- **__init__.py**: Initializes the routes package.
- **user_routes.py**: Contains routes related to user operations.
- **scenario_routes.py**: Contains routes related to scenario operations.
- **leaderboard_routes.py**: Contains routes related to leaderboard operations.

### services
Contains the business logic and service layer of the application.

- **__init__.py**: Initializes the services package.
- **user_service.py**: Contains business logic related to users.
- **scenario_service.py**: Contains business logic related to scenarios.

### schemas
Contains the Pydantic models used for data validation and serialization.

- **__init__.py**: Initializes the schemas package.
- **user.py**: Defines the User schema.
- **scenario.py**: Defines the Scenario schema.

### database.py
Handles the database connection and session management.

### requirements.txt
Lists the dependencies required to run the application.

### README.md
Provides an overview and documentation for the project.


## Setting Up the Development Environment

To set up the development environment, follow these steps:
 
### Create a Virtual Environment

1. Navigate to the project directory:
    ```sh
    cd /E:/Python/FinPlay Academy/Game Backend
    ```

2. Create a virtual environment:
    ```sh
    python -m venv gamebackend
    ```

3. Activate the virtual environment:

    - On Windows:
        ```sh
        .\gamebackend\Scripts\activate
        ```
    - On macOS and Linux:
        ```sh
        source gamebackend/bin/activate
        ```

### Install Dependencies

With the virtual environment activated, install the required dependencies:
```sh
pip install -r requirements.txt
```

### Run the Project

To run the FastAPI application, execute the following command:
```sh
uvicorn app.main:app --reload
```

This will start the development server and you can access the API documentation at `http://127.0.0.1:8000/docs`.