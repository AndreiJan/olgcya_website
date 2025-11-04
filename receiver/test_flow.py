"""
Test script to demonstrate receiver -> storage flow
Run this after starting both receiver (port 8080) and storage (port 8090)
"""
import requests
import json

# Test data
test_user = {
    "first_name": "John",
    "last_name": "Doe",
    "email": "john.doe@example.com",
    "phonenumber": "6041234567"
}

# Send to receiver (which will forward to storage)
receiver_url = "http://localhost:8080/users_emails"

print(f"Sending user data to receiver at {receiver_url}")
print(f"Data: {json.dumps(test_user, indent=2)}")

try:
    response = requests.post(
        receiver_url,
        json=test_user,
        headers={"Content-Type": "application/json"},
        timeout=10
    )
    
    print(f"\n✓ Response Status: {response.status_code}")
    print(f"✓ Response Body: {response.text}")
    
    if response.status_code == 201:
        print("\n✓ SUCCESS! User data received by receiver and forwarded to storage.")
        print("  Check storage database to verify the user was saved.")
    else:
        print(f"\n✗ ERROR: Unexpected status code {response.status_code}")
        
except requests.exceptions.ConnectionError as e:
    print(f"\n✗ Connection Error: {e}")
    print("  Make sure both services are running:")
    print("  - Receiver: python receiver/app.py (port 8080)")
    print("  - Storage:  python storage/app.py (port 8090)")
except Exception as e:
    print(f"\n✗ Error: {e}")
