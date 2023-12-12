const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

const data = 
  {
    count: 999,
  }
;

app.get("/data", (req, res) => {
  res.json(data);
});

app.listen(3000, () => {
  console.log("Server listening on port 3000");
});
