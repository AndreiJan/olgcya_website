import connexion
from datetime import datetime
import yaml
import logging.config
from threading import Thread
import json
import pymysql
import datetime
from sqlalchemy import create_engine, Integer, String, Float, DateTime, func, BigInteger, text
from sqlalchemy.orm import DeclarativeBase, mapped_column, sessionmaker
#================= Lab 4 Code Added ==============================
#Opens the app_conf.yml configuration to load. 
with open('app_conf.yml', 'r') as f:
    app_config = yaml.safe_load(f.read())

#Opens the log_conf.yml for configuration
with open("log_conf.yml", "r") as f:
    LOG_CONFIG = yaml.safe_load(f.read())

#Sets up logging from the configuration file. 
#Creates a logging instance to write logs basically. 
logging.config.dictConfig(LOG_CONFIG)
logger = logging.getLogger('basicLogger')

#This is the Database Configuration setup
#This is where we set up the database connection details.
# This is where the database, like the user and such is created and set.
db_config = app_config['datastore']



# This verifies the connection to the database using the configuration details provided. 
from urllib.parse import quote_plus

try:
    # First connect WITHOUT specifying a database
    password = quote_plus(db_config['password'])
    temp_connection = f"mysql+pymysql://root:{password}@localhost:3306/"
    temp_engine = create_engine(temp_connection, future=True)
    
    # Create database if it doesn't exist
    # This one is important.

    # We will enter some dummy information or accounts later, but for now, we want to establish the database first. 
    
    with temp_engine.connect() as conn:
        conn.execute(text("CREATE DATABASE IF NOT EXISTS user_data"))
        conn.commit()
    
    logger.info("Database created/verified")
    
    # Now connect to the actual database
    connection_string = f"mysql+pymysql://root:{password}@localhost:3306/user_data"
    mysql = create_engine(connection_string, future=True)
    logger.info("Connected to the database")

except Exception as e:
    logger.error(f"Error: {e}")
    mysql = create_engine("sqlite:///storage.db", future=True)

SessionLocal = sessionmaker(bind=mysql)

#Required for the MySQL Mapping. (Received a little help for this one.)
# Without the base declarative I receive the error of failure. 
class Base(DeclarativeBase):
    pass

# I don't know where you'd want this to be in so I just added in app.py storage
class Users(Base):
    __tablename__ = "users"
    id = mapped_column(Integer, primary_key=True)
    first_name = mapped_column(String(250), nullable=False)
    last_name = mapped_column(String(250), nullable=False)
    email = mapped_column(String(250), nullable=False)
    phonenumber = mapped_column(String(250), nullable=True)
    date_joined = mapped_column(DateTime, nullable=False)
    def to_dict(self):
        return {
            "first_name": self.first_name,
            "last_name": self.last_name,
            "email": self.email,
            "phonenumber": self.phonenumber,
            "date_joined": self.datetime
        }

def create_users(body):
    session = SessionLocal()
    logger.debug(f"Storing user: {body.get('email')}")
    
    date_joined_value = body.get("date_joined")
    if isinstance(date_joined_value, str):
        try:
            # Try to parse the date string (format: YYYY-MM-DD)
            date_joined_value = datetime.datetime.strptime(date_joined_value, "%Y-%m-%d")
        except ValueError:
            # If parsing fails, use current datetime
            date_joined_value = datetime.datetime.now()
    elif date_joined_value is None:
        date_joined_value = datetime.datetime.now()
    
    event = Users(
        first_name=body["first_name"],
        last_name=body["last_name"],
        email=body["email"],
        phonenumber=body.get("phonenumber"),  # Use .get() since it's optional
        date_joined=date_joined_value,
    )
    session.add(event)
    session.commit()
    session.close()
    logger.debug(f"Stored user with email: {body['email']}")
    return {"message": "stored"}, 201



app = connexion.App(__name__, specification_dir=".")
app.add_api("openapi.yaml", strict_validation=True, validate_responses=True)

if __name__ == "__main__":
    app.run(port=8090)
