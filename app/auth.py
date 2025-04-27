from fastapi import APIRouter, HTTPException
from pydantic import EmailStr
from passlib.context import CryptContext
from motor.motor_asyncio import AsyncIOMotorClient
from app.database import users_collection
from dotenv import load_dotenv
from app.schemas import UserCreate, UserLogin
import os

from app.schemas import UserCreate, UserLogin  # ✅ Import your schemas

load_dotenv()

# MongoDB setup
client = AsyncIOMotorClient(os.getenv("MONGODB_URL"))
db = client["mydb"]
users_collection = db["users"]

# Password hashing setup
pwd_context = CryptContext(schemes=["bcrypt"], deprecated="auto")

# FastAPI router
auth_router = APIRouter()

# ✅ Register Route
@auth_router.post("/register")
async def register(user: UserCreate):
    print("Register route hit")
    existing_user = await users_collection.find_one({"email": user.email})
    if existing_user:
        raise HTTPException(status_code=400, detail="User already exists")

    hashed_password = pwd_context.hash(user.password)
    await users_collection.insert_one({
        "email": user.email,
        "name": user.name,
        "hashed_password": hashed_password
    })
    return {"message": "User registered successfully"}

# ✅ Login Route
@auth_router.post("/login")
async def login(user: UserLogin):
    db_user = await users_collection.find_one({"email": user.email})
    if not db_user or not pwd_context.verify(user.password, db_user["hashed_password"]):
        raise HTTPException(status_code=401, detail="Invalid credentials")

    return {"message": "Login successful", "user": db_user["email"]}
