require('dotenv').config();
const db = require('../database/db');
const asyncHandler = require('express-async-handler');

const fetchAll = asyncHandler(async (req, res) => {
    console.log(req);
});

module.exports = {
    fetchAll
}