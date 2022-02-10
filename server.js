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

app.listen(8800, () => {
  console.log('server is running..');
});
