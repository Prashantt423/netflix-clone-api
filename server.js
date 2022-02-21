const express = require('express');
const app = express();
const morgan = require('morgan');
const helmet = require('helmet');
const { config } = require('process');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const AuthRoute = require('./routes/auth');
const UserRoute = require('./routes/users');
const MovieRoute = require('./routes/movies');
const ListRoute = require('./routes/lists');
dotenv.config();

app.use(function (req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});

// middleware
app.use(express.json());
app.use(helmet());
app.use(morgan('common'));

// routes
app.use('/api/auth', AuthRoute);
app.use('/api/users', UserRoute);
app.use('/api/movies', MovieRoute);
app.use('/api/lists', ListRoute);

mongoose.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },

  (err) => {
    console.log('connected to mongo');
  }
);
app.get('/', (req, res) => {
  res.status(404).json({ msg: 'failed' });
});

let port = process.env.PORT;
if (port == null || port == '') {
  port = 8800;
}
app.listen(port, () => {
  console.log('server is running..');
});
