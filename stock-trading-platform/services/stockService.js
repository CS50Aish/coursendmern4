const axios = require('axios');

const getStockData = async (symbol) => {
    try {
        const response = await axios.get(`https://api.example.com/stock/${symbol}`, {
            headers: { 'Authorization': `Bearer ${process.env.STOCK_API_KEY}` }
        });
        return response.data;
    } catch (error) {
        console.error(error);
        throw new Error('Error fetching stock data');
    }
};

module.exports = { getStockData };
