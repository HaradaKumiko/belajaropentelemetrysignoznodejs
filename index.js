const express = require('express');
const cors = require('cors');
const logger = require('./logger'); // Import the logger

const PORT = process.env.PORT || "5555";
const app = express();

app.use(cors());
app.use(express.json());

// Middleware to log requests
app.use((req, res, next) => {
  logger.info(`Received ${req.method} request for ${req.url}`);
  next();
});

app.all("/", (req, res) => {
  logger.info('Handling request to root');
  res.json({ method: req.method, message: "Hello World", ...req.body });
});

app.get('/404', (req, res) => {
  logger.warn('404 Not Found');
  res.sendStatus(404);
});

app.listen(parseInt(PORT, 10), () => {
  logger.info(`Listening for requests on http://localhost:${PORT}`);
});
