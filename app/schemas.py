# app/schemas.py
from pydantic import BaseModel, EmailStr
from pydantic import BaseModel, EmailStr

class User(BaseModel):
    email: EmailStr
    username: str
    password: str
    
class UserCreate(BaseModel):
    email: EmailStr
    password: str
    name: str

class UserLogin(BaseModel):
    email: EmailStr
    password: str
