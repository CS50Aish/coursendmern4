const express = require('express');
const { getStockData } = require('../services/stockService');
const router = express.Router();

router.get('/:symbol', async (req, res) => {
    try {
        const data = await getStockData(req.params.symbol);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});

module.exports = router;
