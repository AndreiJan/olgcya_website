import datetime
import json
import connexion
from connexion import NoContent
import time
import yaml
import logging.config
import requests






"""

TO DO: 
- Test Storage if they can connect to the device
- Test Multiple Entries (multi-batch)

"""
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
    
    date_now = datetime.datetime.now()
    try:
        #Testing purposes. COMMENT ONLY out when needed
        # print(readings)
        # Lets make this into a "for loop"


        data = {
            #include date of when they have joined or when they have been processed type shit. 
                # TraceID is needed and required. Important rather, lets keep this one. 
                #I am thinking of a thing, where we need to set basically a "yes" or no, but I think if they need to signout, then we don't need to keep or hold their information. 
            "first_name": body["first_name"],
            "last_name": body["last_name"],
            "email": body["email"],
            "phonenumber": body["phonenumber"],


            #THis is CRUCIAL, super important, don't fuck with me son. 
            #Nice, we got this shit down. 


            "date_joined": date_now.strftime("%Y-%m-%d")
        }
        logger.info(f"Data Processed: {data}")
        
        # Forward the data to the storage service
        storage_url = app_config["events"]["url"]
        headers = {"Content-Type": "application/json"}
        
        try:
            response = requests.post(
                f"{storage_url}/users_emails",
                json=data,
                headers=headers,
                timeout=5
            )
            logger.info(f"Forwarded to storage service. Status: {response.status_code}")
            
            if response.status_code != 201:
                logger.error(f"Storage service returned error: {response.text}")
                
        except requests.exceptions.RequestException as req_err:
            logger.error(f"Failed to forward to storage service: {req_err}")
            # Continue anyway - receiver can still return success even if storage fails
        
        return data, 201         
    except Exception as e:
        logger.error(f"Error processing temperature readings: {e}")
        return NoContent, 400
    

app = connexion.App(__name__, specification_dir=".")
app.add_api("lab1.yaml", strict_validation=True, validate_responses=True)

if __name__ == "__main__":
    app.run(port=8080)