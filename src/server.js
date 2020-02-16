const express = require('express');
const path = require('path');
const morgan = require('morgan');
const dotenv = require('dotenv');
dotenv.config({path: './config/config.env'})

const app = express();

// importing routes
const employeeRoutes = require('./routes/employee');

// middlewares
app.use(morgan('dev'));
app.use(express.json());

// routes
app.use('/', employeeRoutes);

// static files
app.use(express.static(path.join(__dirname, 'public')));

const PORT = process.env.PORT || 4000;

// starting the server
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT} !`);
});
