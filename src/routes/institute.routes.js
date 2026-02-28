
const express = require('express');
const router = express.Router();
const getInstitutes = require('../controllers/Institute/getInstitute.controller');

router.get('/getinstitutes', getInstitutes.getInstitutes);
router.get('/getinstitute/:id', getInstitutes.getInstitute);

module.exports = router;