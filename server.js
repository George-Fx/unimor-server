const morgan = require('morgan');
const dotenv = require('dotenv');
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

dotenv.config();

const MONGO_URI = process.env.MONGO_URI;
const DATABASE_NAME = process.env.DATABASE_NAME;

const router = require('./src/router/router.js');

mongoose.connect(MONGO_URI, {dbName: DATABASE_NAME});

const DB = mongoose.connection;

DB.on('error', console.error.bind(console, 'connection error:'));
DB.once('open', () => console.log('Database connected!'));

const PORT = process.env.PORT || 8000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(router);

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
