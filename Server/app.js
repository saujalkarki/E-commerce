const express = require("express");
const app = express();
require("dotenv").config();

const port = process.env.PORT;

app.listen(process.env.PORT, () => {
  console.log(`server has successfully started on port ${port}.`);
});
