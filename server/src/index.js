require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/dbconfig');
const authRoute = require('./routes/authRoute');
const predictRoute = require('./routes/predictRoute');
const requireAuth = require('./middleware/requireAuth');
const sessionMiddleware = require('./middleware/sessionMiddleware');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:5173'
}));
connectDB();

app.use(sessionMiddleware);
app.use('/api', authRoute);
app.use('/api', predictRoute);

app.get('/', requireAuth, (req, res) => {
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});