# FCC-timestamp-microservice-solution

Timestamp Microservice solution

This tiny application takes parameter from endpoint url and returns json object
with the next structure:

```json
{
  "unix": "", // Unix timestamp for input date
  "utc": "" // UTC string for input date
}
```

If parameter is empty it returns date now. If parameter is invalid - returns
error object.

[![Run on Repl.it](https://repl.it/badge/github/sergii-nosachenko/FCC-timestamp-microservice-solution)](https://repl.it/github/sergii-nosachenko/FCC-timestamp-microservice-solution)
