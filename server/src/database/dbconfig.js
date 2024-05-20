const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        const MONGO_URL = process.env.MONGO_URL;
        await mongoose.connect(MONGO_URL);
        console.log('Connected to database');
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}

module.exports = connectDB;