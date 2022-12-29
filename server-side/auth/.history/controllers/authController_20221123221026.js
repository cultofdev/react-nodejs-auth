const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

require('dotenv').config();
const db = require('../database/db');

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const user = await findUser(username);

    if(!user || !user.active) {
        return res.status(401).json({ message: 'Unauthorized!' });
    }

    const match = await bcrypt.compare(password, user.password);

    if(!match) return res.status(401).json({ message: 'Unauthorized!' });

    console.log('AUTHENTICATED!';)
});

const refresh = asyncHandler(async (req, res) => {
    
});

const logout = asyncHandler(async (req, res) => {
    
});

const findUser = async (username) => {
    const dbConnection = db.getDb();

    const data = await dbConnection.collection('users').findOne({ 'username': username });

    return data;
}

const generateAccessToken = (user) => {
    payload = {
        UserInfo: {
            username: user.username,
            role: user.role
        }
    }

    return jwt.sign(payload, process.env.ACCESS_TOKEN_SECRET, { expiresIn: '10h' });
};

const generateRefreshToken = (user) => {
    payload = {
        username: user.username
    }

    return jwt.sign(payload, process.env.REFRESH_TOKEN_SECRET);
}

module.exports = {
    login,
    refresh,
    logout
}