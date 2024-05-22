const jwt = require('jsonwebtoken')
const mongoose = require('mongoose')
const User = mongoose.model('User')

module.exports = (req, res, next) => {
    const { token } = req.session;

    if (!token) {
        return res.status(401).send({ error: "You must be logged in" })
    }
    const SECRET_KEY = process.env.SECRET_KEY;
    
    jwt.verify(token, SECRET_KEY, async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: "You must be logged in" })
        }

        const { userId } = payload;
        const user = await User.findById(userId);
        req.user = user;
        next();

    })
}