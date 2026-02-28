const express = require('express');
const router = express.Router();

const { createInstitute } = require('../controllers/Admin/CreateInstitute.controller');
const { createPrincipal } = require('../controllers/Admin/CreatePrincipal.controller');
// Admin creates institute
router.post('/Createinstitutes', createInstitute);

// Admin creates principal
router.post('/Createprincipals', createPrincipal);







module.exports = router;


