const express = require('express');
const router = express.Router();

const { login } = require('../controllers/auth/Login.controller');

// User login
router.post('/login', login);

module.exports = router;