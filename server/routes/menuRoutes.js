const express = require('express');
const router = express.Router();

const {  createMenuItem,
  getMenuItems,
  getMenuItem,
  updateMenuItem,
  deleteMenuItem, } = require('../controllers/menuController');

  router.post('/', createMenuItem);
  router.get('/', getMenuItems);
  router.get('/:id', getMenuItem);
  router.put('/:id', updateMenuItem);
  router.delete('/:id', deleteMenuItem);

  module.exports = router;