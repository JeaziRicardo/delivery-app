const express = require('express');
require('express-async-errors');
const errorMiddleware = require('./middlewares/error.middleware');
const loginRouter = require('./routes/login.router');
const cors = require('cors');

const app = express();

app.use((_req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "https://localhost:3001");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.use(express.json())
app.get('/coffee', (_req, res) => res.status(418).end());

app.use('/login', cors(), loginRouter);

app.use(errorMiddleware);

module.exports = app;
