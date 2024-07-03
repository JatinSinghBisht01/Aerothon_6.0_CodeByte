require('./models/User');

const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./database/dbconfig');
const authRoute = require('./routes/authRoute');
const requireAuth = require('./middleware/requireAuth');
const sessionMiddleware = require('./middleware/sessionMiddleware');
const cors = require('cors');

const app = express();
app.use(bodyParser.json());
app.use(cors({
  origin: 'https://fly-detector.onrender.com',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  credentials: true,
}));
connectDB();

app.use(sessionMiddleware);
app.use('/api', authRoute);

app.get('/', requireAuth, (req, res) => {
  res.send('Hello World');
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
