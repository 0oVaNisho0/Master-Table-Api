require('dotenv').config();

const express = require('express');
const cors = require('cors');
const morgan = require('morgan');

const userRoute = require('./routes/userRoute');

const app = express();
app.use(cors());

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use('/users', userRoute);

const port = process.env.PORT || 8009;
app.listen(port, () => console.log('server is running on port: ' + port));
