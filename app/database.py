
from pymongo import MongoClient
import os

MONGO_URL = os.getenv("MONGODB_URL")
client = MongoClient(MONGO_URL)
db = client['auth_db']  # <-- use correct database name
users_collection = db['users']
