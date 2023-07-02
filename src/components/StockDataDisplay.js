import React, { useEffect, useState } from 'react';
import api from '../utils/api';

const StockDataDisplay = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchStockData = async () => {
      try {
        const response = await api.fetchStockData();
        setStockData(response);
      } catch (error) {
        console.error('Error fetching stock data:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      <h2>Stock Data</h2>
      {stockData ? (
        <div>
          <p>Symbol: {stockData.symbol}</p>
          <p>Current Price: {stockData.price}</p>
          <p>Change: {stockData.change}</p>
          {/* Render additional stock data properties as needed */}
        </div>
      ) : (
        <p>Loading stock data...</p>
      )}
    </div>
  );
};

export default StockDataDisplay;
