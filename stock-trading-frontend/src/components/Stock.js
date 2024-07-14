import React, { useState, useEffect } from 'react';
import stockService from '../services/stockService';

const Stock = ({ symbol }) => {
    const [stockData, setStockData] = useState(null);

    useEffect(() => {
        const fetchStockData = async () => {
            const data = await stockService.getStockData(symbol);
            setStockData(data);
        };

        fetchStockData();
    }, [symbol]);

    return (
        <div>
            {stockData ? (
                <div>
                    <h1>{stockData.name}</h1>
                    <p>Price: {stockData.price}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default Stock;
