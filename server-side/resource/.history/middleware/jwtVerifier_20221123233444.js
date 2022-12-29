const jwt = require('jsonwebtoken');

const verify = (req, res, next) => {
    const authHeader = req.headers.authorization || req.headers.Authorizaiton;

    if(!authHeader?.startsWith('Bearer ')) {
        return res.status(401).send({ message: 'Unauthorized' });
    }
}

module.exports = verify;