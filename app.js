const express = require("express");
const app = express();
const bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const port = process.env.PORT || 5000

app.get('/test', (req, res) => res.send('IMDB Clone Backend Apis'))

app.listen(port, () => {
  console.log(`Server Running at ${port}`)
});