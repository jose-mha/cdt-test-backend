const express = require('express');

const router = express.Router();

router.get('/', async (req, res) => {});

router.get('/:id', async (req, res, next) => {});

router.post('/', async (req, res) => {});

router.patch('/:id', async (req, res, next) => {});

router.delete('/:id', async (req, res) => {});

module.exports = router;
