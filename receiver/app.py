import datetime
import json
import connexion
from connexion import NoContent
import time
import yaml
import logging.config

# Loads External Configuration File. This is used specifically for KAFKA agent. 
with open('app_conf.yml', 'r') as f:
    app_config = yaml.safe_load(f.read())

# Loads External Configuration File. This is used specifically for LOGGING agent. 
with open("log_conf.yml", "r") as f:
    LOG_CONFIG = yaml.safe_load(f.read())

logging.config.dictConfig(LOG_CONFIG)
logger = logging.getLogger('basicLogger')

# ================== This section creates a whatnot of shit. This is just to test if the connection is valid
try:
    URL = app_config["events"]["url"]
    logger.info(f"Successfully connected to: {URL}")
except Exception as e: 
    logger.error(f"Received an error: {e}")
# ================== This section ends



# ================== This is to writ the actual thing that receives it. 
def create_user_reading(body):
    readings = body.get("readings", [])
    logger.info(f"Received body: {json.dumps(body, indent=2)}")
    
    
    try:
        #Testing purposes. COMMENT ONLY out when needed
        # print(readings)
        data = {
                # TraceID is needed and required. Important rather, lets keep this one. 
                #I am thinking of a thing, where we need to set basically a "yes" or no, but I think if they need to signout, then we don't need to keep or hold their information. 
            "first_name": body["first_name"],
            "last_name": body["last_name"],
            "email": body["email"],
            "phonenumber": ["phonenumber"],
        }
            
        return data, 201         
    except Exception as e:
        logger.error(f"Error processing temperature readings: {e}")
        return NoContent, 400
    

app = connexion.App(__name__, specification_dir=".")
app.add_api("lab1.yaml", strict_validation=True, validate_responses=True)

if __name__ == "__main__":
    try:
        app.run(port=8080)
    finally:
        # Clean up producer on shutdown
        if producer:
            try:
                producer.stop()
                logger.info("Kafka producer stopped cleanly")
            except Exception as e:
                logger.error(f"Error stopping producer: {e}")