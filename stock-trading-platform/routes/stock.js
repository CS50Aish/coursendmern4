const express = require('express');
const { getStockData } = require('../services/stockService');
const router = express.Router();

const auth = require('../middleware/auth');

router.get('/:symbol', auth, async (req, res) => {
    try {
        const data = await getStockData(req.params.symbol);
        res.json(data);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports = router;
