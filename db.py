# from pymongo import MongoClient
# import os
# from dotenv import load_dotenv

# load_dotenv()  # Load .env file

# MONGO_URI = os.getenv("MONGO_URI", "mongodb://localhost:27017")

# client = MongoClient(MONGO_URI)
# db = client["task_manager"]
# collection = db["submitted_tasks"]
from pymongo import MongoClient
import os
from dotenv import load_dotenv

# Load .env file
load_dotenv()

MONGO_URI = os.getenv("MONGO_URI")

# Connect to MongoDB Atlas
client = MongoClient(MONGO_URI)

# Database & Collection
db = client["Task_flask"]
collection = db["submitted_tasks"]
