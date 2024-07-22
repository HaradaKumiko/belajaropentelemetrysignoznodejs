// logger.js
const winston = require('winston');

// Create a Winston logger instance
const logger = winston.createLogger({
  level: 'info',
  format: winston.format.combine(
    winston.format.timestamp(),
    winston.format.json()
  ),
  transports: [
    new winston.transports.Console(), // Logs to the console
    // Uncomment the line below to also log to a file
    // new winston.transports.File({ filename: 'combined.log' })
  ],
});

module.exports = logger;
