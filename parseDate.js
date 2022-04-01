// Check the date param string
const parseDate = (req, res, next) => {
  /*  If it's a UNIX timestamp - convert it to an integer:
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
    : new Date();

  if (date.toString() == 'Invalid Date') {
    req.json = {
      error: date.toString()
    };
  } else {
    req.json = {
      unix: date.valueOf(),
      utc: date.toUTCString()
    };
  }
  next();
};

module.exports = parseDate;
