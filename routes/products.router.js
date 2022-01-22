const express = require('express');
const ProductService = require('../services/product.service');

const router = express.Router();
const service = new ProductService();

router.get('/', async (req, res, next) => {
  try {
    const products = await service.find();
    res.json(products);
  } catch (error) {
    next(error);
  }
});

router.get('/:id', async (req, res, next) => {});

router.post('/', async (req, res, next) => {});

router.patch('/:id', async (req, res, next) => {});

router.delete('/:id', async (req, res, next) => {});

module.exports = router;
