const jwt = require('jsonwebtoken');
const dotenv = require('dotenv');

dotenv.config();

exports.generateToken = (req, res) => {
    const token = jwt.sign({ user: 'testUser' }, process.env.SECRET_KEY, { expiresIn: '1h' });
    res.status(200).json({ token });
};

exports.respondPostBody = (req, res) => {
    res.status(200).send("I am post body");
};
