from fastapi import FastAPI, HTTPException, Depends
from pydantic import BaseModel
from passlib.context import CryptContext
from fastapi.middleware.cors import CORSMiddleware
from app.auth import auth_router
from app.database import users_collection
from app.schemas import UserCreate

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:5173"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

app.include_router(auth_router)
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

class UserCreate(BaseModel):
    email: str
    password: str
    name: str

class UserLogin(BaseModel):
    email: str
    password: str

@app.post("/register")
async def register(user: UserCreate):
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed = pwd_context.hash(user.password)

    user_data = {
        "email": user.email,
        "name": user.name,
        "hashed_password": hashed
    }

    await users_collection.insert_one(user_data)  # ✅ fixed variable name

    return {"message": "User registered successfully"}

@app.post("/login")
async def login(user: UserLogin):
    db_user = await users_collection.find_one({"email": user.email})
    if not db_user or not pwd_context.verify(user.password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful", "user": db_user["email"]}

@auth_router.get("/test-insert")
async def test_insert():
    await users_collection.insert_one({"email": "test@test.com", "name": "dummy", "password": "test"})
    return {"msg": "Inserted"}

class URLInput(BaseModel):
    url: str
