from smtplib import SMTP
from dotenv import load_dotenv
import os
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

load_dotenv()


"""
Architecture: 
This will be the process of SENDING the email to the users. 
This needs a section where I get to send out data to this. 
Convert this to receive an API. 



FIrst, we need to set the API SENDER, like the contents of what needs to be sent out or over. 

"""
my_email = "ajhmendoza30@gmail.com"
test_email = "janhmendoza885@gmail.com"


try:
    smtpObj = SMTP('smtp.gmail.com', 587)
    smtpObj.ehlo()
    smtpObj.starttls()

    smtpObj.login('ajhmendoza30@gmail.com', os.getenv("GOOGLE_PASSWORD"))
    print("The login was successful sir")
    
    # repetition email sending count (Seeing how well it can handle multiple sents)
    for i in range(10):
        msg = MIMEMultipart()
        msg['From'] = my_email



        #We need to set up a MySQL server with our stuff. Lets do what we know. Now that we have MySQL installed (Not really needed)
        #We can use Dockerfile here to intergrate this and set up our environment

        
        msg['To'] = test_email #This one needs to be updated to handle MySQL server stuff. 

        msg['Subject'] = f'Test Email #{i+1}'
        
        body = f"This is test email number {i+1} from Python!"
        msg.attach(MIMEText(body, 'plain'))
        
        smtpObj.sendmail(my_email, test_email, msg.as_string())
        print(f"Email {i+1} sent successfully!")
    





except Exception as e:
    print(f"Error: {e}")  # This will show the actual error message
finally:
    smtpObj.quit()
    print("Connection closed.")