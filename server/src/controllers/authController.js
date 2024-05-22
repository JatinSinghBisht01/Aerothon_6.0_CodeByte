const mongoose = require('mongoose')
const jwt = require('jsonwebtoken')

const User = mongoose.model('User')

const SECRET_KEY =  process.env.SECRET_KEY;

const signup = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email || !password){
            return res.status(400).send({ error: "Must provide email and password" })
        }

        const existingUser = await User.findOne({ email });
        if(existingUser){
            return res.status(400).send({ error: 'Email already in use' })
        }

        const user = new User({ email, password });
        await user.save();
        
        const token = jwt.sign({ userId: user._id }, SECRET_KEY); 
        res.send({message: 'Registeration Successfull', token })
        
    } catch (err) {
        return res.status(500).send(err.message)
        
    }
}

const signin = async (req, res) => {
    const { email, password } = req.body;
    if (!email || !password) {
        return res.status(400).send({ error: "Must provide email and password" })
    }

    const user = await User.findOne({ email });
    if(!user){
        return res.status(404).send({ error: 'Email not registered'})
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({ userId: user._id }, SECRET_KEY);
        res.send({message: 'Logged in Successfully', token });
        
    } catch (err) {
        return res.status(400).send({ error: "wrong password" })   
    }

}

// Session need to be implemented
const signout = async (req, res) => {
    try {
        
      res.send({ message: 'Logged out successfully' });
    } catch (err) {
        console.log(err)
      res.status(500).send({ error: 'Logout failed' });
    }
  };
  

module.exports = {signup, signin, signout};