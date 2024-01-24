import os
from dotenv import load_dotenv
from sqlalchemy import DateTime, create_engine, Column, Boolean, Integer, String, MetaData, Table, ForeignKey, Float, insert

load_dotenv()
DB_USER = os.getenv("DB_USER")
DB_PASSWORD = os.getenv("DB_PASSWORD")
DB_HOST = os.getenv("DB_HOST")
DB_PORT = os.getenv("DB_PORT")
DB_NAME = os.getenv("DB_NAME")


database_user_uri = f"mysql+pymysql://{DB_USER}:{DB_PASSWORD}@{DB_HOST}:{DB_PORT}/{DB_NAME}"
print ("user ======", {database_user_uri})

engine = create_engine(database_user_uri)

connection = engine.connect()
print("Conexión exitosa a la base de datos.")

def get_connection():
    return engine.connect()