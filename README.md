# Description - shop-api

Repo includes a simple API for a web shop containing of two entities:
- shop
- product

Requirements:
- Node 12.19.0
- MongoDB 4.4

Instructions for running:
1. npm install (installs all dev and other modules)
2. npm run start (starts the server)
3. npm run start-dev (run the server with nodemon)

Before starting the project create an '.env' file in the project root
in the following format:
# Node server info
NODE_ENV={production or development} // development
PORT={Apollo server port} // 3000

# Apollo info
APOLLO_INTROSPECTION={true or false} // true
APOLLO_PLAYGROUND=true

# Database info
MONGODB_DB_NAME={database_name} // shop
MONGODB_URL={db_service_address} // mongodb://localhost:27017

# Logs info
LOG_ERROR_PATH={path for error log file} // logs/error.log
LOG_INFO_PATH={path for info logs file} // logs/info.log

