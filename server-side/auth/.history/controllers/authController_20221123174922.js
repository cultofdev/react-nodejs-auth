const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const asyncHandler = require('express-async-handler');

require('dotenv').config();
const db = require('../db/mongodb');

const login = asyncHandler(async (req, res) => {
    const { username, password } = req.body;

    if(!username || !password) {
        return res.status(400).json({ message: 'All fields are required!' });
    }

    const user = await 
});

const refresh = asyncHandler(async (req, res) => {
    
});

const logout = asyncHandler(async (req, res) => {
    
});

const findUser = async (user) => {
    const dbConnection = db.getDb
}

module.exports = {
    login,
    refresh,
    logout
}