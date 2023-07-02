import React, { useEffect, useState } from 'react';

const StockDataDisplay = () => {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    // Fetch stock data from API
    const fetchStockData = async () => {
      try {
        const response = await fetch(
          'https://mboum-finance.p.rapidapi.com/mo/module/?symbol=AAPL&module=asset-profile%2Cfinancial-data%2Cearnings%2Ccashflow-statement%2Cbalance-sheet',
          {
            method: 'GET',
            headers: {
              'X-RapidAPI-Key': '0rD6UyDj8jmshLwoCdZCWBgBf6pIp1UK2BBjsnb2kK9LFosz4o',
              'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com',
            },
          }
        );

        if (response.ok) {
          const data = await response.json();
          setStockData(data);
        } else {
          console.log('Error:', response.status);
        }
      } catch (error) {
        console.log('Error:', error);
      }
    };

    fetchStockData();
  }, []);

  return (
    <div>
      {stockData && (
        <div>
          <h2>{stockData.assetProfile.companyName}</h2>
          <p>Address: {stockData.assetProfile.address1}, {stockData.assetProfile.city}, {stockData.assetProfile.state}, {stockData.assetProfile.zip}, {stockData.assetProfile.country}</p>
          <p>Phone: {stockData.assetProfile.phone}</p>
          <p>Website: <a href={stockData.assetProfile.website} target="_blank" rel="noopener noreferrer">{stockData.assetProfile.website}</a></p>
          <p>Industry: {stockData.assetProfile.industry}</p>
          <p>Sector: {stockData.assetProfile.sector}</p>
          <p>Description: {stockData.assetProfile.longBusinessSummary}</p>
          <p>Full-Time Employees: {stockData.assetProfile.fullTimeEmployees}</p>
        </div>
      )}
    </div>
  );
};

export default StockDataDisplay;
