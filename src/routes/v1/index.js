const express = require('express');
const router = express.Router();

const noteRoutes = require('./note-routes');

router.use('/note', noteRoutes);

module.exports = router;