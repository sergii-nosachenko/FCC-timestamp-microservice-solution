require('dotenv').config();
const express = require('express');

const app = express();

// API MIDDLEWARE

app.use('/public', express.static('public'));

app.use('/api/:date', (req, res, next) => {
  // Check the date param string

  /* If it's a UNIX timestamp - convert it to an integer:
      new Date() constructor accepts Number and String values
      in different ways.
      As request parameters are strings, we need to convert it
      to Number before using as argument.
      In other case we'll get an Invalid Date object!
  */
  const date = req.params.date
    ? req.params.date == +req.params.date
      ? new Date(+req.params.date)
      : new Date(req.params.date)
    : new Date(date);

  if (date.toString() == 'Invalid Date') {
    req.json = {
      err: date.toString()
    };
  } else {
    req.json = {
      unix: date.valueOf(),
      utc: date.toUTCString()
    };
  }
  next();
});

// API ROUTES

// Index route, shows index.html page
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

// API GET route
app.get('/api/:date', (req, res) => {
  res.json(req.json);
});

// SERVER RUN
app.listen(process.env.PORT, () => {
  console.log('Server running on port: ', process.env.PORT);
});
