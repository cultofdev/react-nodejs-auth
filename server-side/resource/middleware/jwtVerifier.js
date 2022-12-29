require('dotenv').config();
const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorizaiton;

    if(!authHeader?.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized' });
    }

    const token = authHeader.split(' ')[1];

    jwt.verify(
        token,
        process.env.ACCESS_TOKEN_SECRET,
        (err, decoded) => {
            if(err) return res.status(403).send({ message: 'Forbidden' });
            req.user = decoded.UserInfo.username;
            req.roles = decoded.UserInfo.role;
            next();
        }
    )
}

module.exports = verify;