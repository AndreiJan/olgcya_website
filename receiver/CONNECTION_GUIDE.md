# Receiver → Storage Connection Guide

## How It Works

The **receiver** service accepts user registration data via POST requests, then **forwards** that data to the **storage** service, which persists it to the MySQL database.

```
Client/Frontend → Receiver (8080) → Storage (8090) → MySQL Database
```

## What Changed

### 1. **receiver/app.py**
- Added `import requests`
- Modified `create_user_reading()` to forward data to storage service
- Uses `app_config["events"]["url"]` (currently `http://localhost:8090`) as the storage URL
- Logs success/failure of forwarding to storage

### 2. **storage/app.py**
- Fixed `create_users()` function to properly parse `date_joined` string from receiver
- Added better logging and error handling
- Made `phonenumber` optional (uses `.get()`)

### 3. **storage/openapi.yaml**
- Fixed `operationId` to point to correct function: `app.create_users`

## Setup & Run

### Prerequisites
1. MySQL running on `localhost:3306` (or update `storage/app_conf.yml`)
2. Python packages installed:
   ```powershell
   pip install connexion[flask] pyyaml sqlalchemy pymysql requests
   ```

### Start Services

**Terminal 1 - Storage Service:**
```powershell
cd C:\Users\Andrei\Documents\code\Personal\storage
python create_tables.py    # Create database & tables (run once)
python app.py              # Start storage service on port 8090
```

**Terminal 2 - Receiver Service:**
```powershell
cd C:\Users\Andrei\Documents\code\Personal\receiver
python app.py              # Start receiver service on port 8080
```

### Test the Flow

**Terminal 3 - Run Test Script:**
```powershell
cd C:\Users\Andrei\Documents\code\Personal\receiver
python test_flow.py
```

Or manually with curl/PowerShell:
```powershell
$body = @{
    first_name = "Jane"
    last_name = "Smith"
    email = "jane.smith@example.com"
    phonenumber = "7781234567"
} | ConvertTo-Json

Invoke-RestMethod -Uri "http://localhost:8080/users_emails" -Method POST -Body $body -ContentType "application/json"
```

## Verify Data in Database

Connect to MySQL and check:
```sql
USE user_data;
SELECT * FROM users;
```

Or using MySQL client:
```powershell
mysql -u root -p -e "USE user_data; SELECT * FROM users;"
```

## Configuration

### receiver/app_conf.yml
```yaml
events:
  url: "http://localhost:8090"  # Storage service URL
```

Change this if storage runs on a different host/port.

### storage/app_conf.yml
```yaml
datastore:
  user: root
  password: your_password
  hostname: localhost
  port: 3306
  db: user_data
```

## Logs

- **Receiver logs**: Shows incoming requests and forwarding status
- **Storage logs**: Shows database operations and stored users

Check logs in both terminal windows to debug any issues.

## Troubleshooting

### "Connection refused" error
- Ensure storage service is running on port 8090
- Check `receiver/app_conf.yml` has correct storage URL

### "Unknown database 'user_data'"
- Run `python storage/create_tables.py` first
- Check MySQL credentials in `storage/app_conf.yml`

### Data not saving to database
- Check storage service logs for errors
- Verify MySQL is running and accessible
- Check `storage/app.py` database connection string

## Architecture Notes

This is a **synchronous** pattern where receiver waits for storage to respond. For production, consider:
- **Async/Queue-based**: Use Kafka/RabbitMQ between services (your commented code suggests this)
- **Error handling**: Retry logic, circuit breakers
- **Monitoring**: Health checks, metrics
