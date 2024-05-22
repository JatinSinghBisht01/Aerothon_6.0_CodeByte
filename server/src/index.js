require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/dbconfig');
const authRoute = require('./routes/authRoute');
const requireAuth = require('./middleware/requireAuth');

const app = express();
app.use(bodyParser.json());
connectDB();


app.use(authRoute);

app.get('/', requireAuth, (req, res) => {
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});