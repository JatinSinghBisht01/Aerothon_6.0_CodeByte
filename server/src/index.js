const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/dbconfig');

const app = express();
app.use(bodyParser.json());

connectDB();

const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});