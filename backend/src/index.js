require('dotenv/config');
require('express-async-errors');
const express = require('express');

const routes = require('./routes');
const cors = require('./middlewares/cors');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.json());
app.use(cors);
app.use(routes);
app.use(errorHandler);

const port = process.env.BACKEND_PORT;
app.listen(port, () => console.log('Server Started'));
