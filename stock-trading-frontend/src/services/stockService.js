import axios from 'axios';

const API_URL = '/api/stocks';

const getStockData = async (symbol) => {
    const response = await axios.get(`${API_URL}/${symbol}`);
    return response.data;
};

export default { getStockData };
