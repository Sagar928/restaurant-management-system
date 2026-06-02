const express = require('express');
const router = express.Router();

const { createTable,getAllTables,getTableById } = require('../controllers/tableController');

router.post('/', createTable);
router.get('/', getAllTables);
router.get('/:tableNumber', getTableById);

module.exports = router;