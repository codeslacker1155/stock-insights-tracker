import React, { useEffect, useCallback } from 'react';
import { fetchStockData } from './utils/api';

function App() {
  const updateChartSymbol = useCallback(async () => {
    const symbolInput = document.getElementById('symbol-input');
    const symbol = symbolInput.value.toUpperCase();
    try {
      const data = await fetchStockData(symbol);
      if (data) {
        displayCompanyInfo(data);
        updateChartSymbol(symbol);
      } else {
        showError('No stock data available');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      showError('Failed to fetch stock data');
    }
  }, []);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Enter') {
        updateChartSymbol();
      }
    };

    const symbolInput = document.getElementById('symbol-input');
    symbolInput.addEventListener('keydown', handleKeyDown);

    return () => {
      symbolInput.removeEventListener('keydown', handleKeyDown);
    };
  }, [updateChartSymbol]);

  const displayCompanyInfo = (stockData) => {
    const companyInfoContainer = document.getElementById('company-info');
    companyInfoContainer.innerHTML = `
      <h2>${stockData.symbol}</h2>
      <p>Address: ${stockData.address}</p>
      <p>City: ${stockData.city}</p>
      <p>State: ${stockData.state}</p>
      <p>ZIP: ${stockData.zip}</p>
      <p>Country: ${stockData.country}</p>
      <p>Phone: ${stockData.phone}</p>
      <p>Website: ${stockData.website}</p>
      <p>Industry: ${stockData.industry}</p>
      <p>Sector: ${stockData.sector}</p>
      <p>Long Business Summary: ${stockData.longBusinessSummary}</p>
      <p>Full-Time Employees: ${stockData.fullTimeEmployees}</p>
      <p>Audit Risk: ${stockData.auditRisk}</p>
      <p>Board Risk: ${stockData.boardRisk}</p>
      <p>Compensation Risk: ${stockData.compensationRisk}</p>
      <p>Shareholder Rights Risk: ${stockData.shareHolderRightsRisk}</p>
      <p>Overall Risk: ${stockData.overallRisk}</p>
      <p>Governance Epoch Date: ${stockData.governanceEpochDate}</p>
      <p>Compensation As Of Epoch Date: ${stockData.compensationAsOfEpochDate}</p>
    `;
  };

  const showError = (errorMessage) => {
    const companyInfoContainer = document.getElementById('company-info');
    companyInfoContainer.innerHTML = `<p class="error-message">${errorMessage}</p>`;
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stockify</h1>
        <p>
          Stockify is a cutting-edge stock market analysis and visualization platform that empowers users with real-time data, advanced charting tools, and comprehensive company information. Stay informed and make informed investment decisions with Stockify's intuitive interface, powerful features, and user-friendly design. Explore stock market trends, track your favorite companies, and dive deep into financial data with ease. Whether you're a seasoned investor or just getting started, Stockify is your go-to companion for unlocking the potential of the stock market. Take control of your financial future with Stockify!
        </p>
      </header>
      <div id="search-bar" className="search-bar">
        <label>
          Symbol:
          <input type="text" id="symbol-input" />
        </label>
        <button type="button" onClick={updateChartSymbol}>
          Search
        </button>
      </div>
      <div className="tradingview-widget-container">
        <div id="tradingview_4d8c0"></div>
      </div>
      <div id="company-info"></div>
    </div>
  );
}

export default App;
