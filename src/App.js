import React, { useEffect, useState, useCallback } from 'react';
import { fetchStockData } from './utils/api';
import TradingViewWidget from './TradingViewWidget';
import './App.css';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [chartInitialized, setChartInitialized] = useState(false);

  const fetchData = useCallback(async (symbol) => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStockData(symbol);
      if (data) {
        setStockData(data);
        setChartInitialized(false); // Reset chart initialization state
      } else {
        setError('No stock data available');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError('Failed to fetch stock data');
    } finally {
      setLoading(false);
    }
  }, []);

  const handleSymbolInputChange = (event) => {
    setSymbol(event.target.value.toUpperCase());
  };

  const handleSearch = async (event) => {
    event.preventDefault(); // Prevent form submission
    if (symbol) {
      await fetchData(symbol);
    }
  };

  const initializeChart = useCallback(() => {
    if (window.TradingView && window.TradingView.widget && stockData) {
      window.TradingView.widget({
        autosize: true,
        symbol: symbol,
        interval: 'D',
        timezone: 'Etc/UTC',
        theme: 'dark',
        style: '1',
        locale: 'en',
        toolbar_bg: '#f1f3f6',
        enable_publishing: false,
        allow_symbol_change: true,
        details: true,
        studies: ['STD;Average%Day%Range', 'STD;SMA', 'STD;ROC'],
        container_id: 'tradingview_4d8c0',
      });
      setChartInitialized(true);
    }
  }, [symbol, stockData]);

  useEffect(() => {
    if (chartInitialized) {
      initializeChart();
    }
  }, [chartInitialized, initializeChart]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stockify</h1>
        <p>
          Stockify is a cutting-edge stock market analysis and visualization platform that empowers users with real-time data, advanced charting tools, and comprehensive company information. Stay informed and make informed investment decisions with Stockify's intuitive interface, powerful features, and user-friendly design. Explore stock market trends, track your favorite companies, and dive deep into financial data with ease. Whether you're a seasoned investor or just getting started, Stockify is your go-to companion for unlocking the potential of the stock market. Take control of your financial future with Stockify!
        </p>
      </header>
      <div className="search-bar">
        <form onSubmit={handleSearch}>
          <label htmlFor="symbol-input">Symbol:</label>
          <input type="text" id="symbol-input" value={symbol} onChange={handleSymbolInputChange} />
          <button type="submit">
            Search
          </button>
        </form>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <>
          <TradingViewWidget />
          {stockData && (
            <div id="company-info">
              <h2>{stockData.symbol}</h2>
              <div className="company-details">
                <div className="company-info-box">
                  <h3>Company Information</h3>
                  <p><strong>Address:</strong> {stockData.address}
                  <strong>City:</strong> {stockData.city}
                  <strong>State:</strong> {stockData.state}
                  <strong>ZIP:</strong> {stockData.zip}
                  <strong>Country:</strong> {stockData.country}
                  <strong>Phone:</strong> {stockData.phone}
                  <strong>Website:</strong> <a href={stockData.website} target="_blank" rel="noopener noreferrer">{stockData.website}</a>
                  <strong>Industry:</strong> {stockData.industry}
                  <strong>Sector:</strong> {stockData.sector}</p>
                </div>
                <div className="company-info-box">
                  <h3>Company Risk Assessment</h3>
                  <p><strong>Full-Time Employees:</strong> {stockData.fullTimeEmployees}
                  <strong>Audit Risk:</strong> {stockData.auditRisk}
                  <strong>Board Risk:</strong> {stockData.boardRisk}
                  <strong>Compensation Risk:</strong> {stockData.compensationRisk}
                  <strong>Shareholder Rights Risk:</strong> {stockData.shareHolderRightsRisk}
                  <strong>Overall Risk:</strong> {stockData.overallRisk}
                  <strong>Governance Epoch Date:</strong> {stockData.governanceEpochDate}
                  <strong>Compensation As Of Epoch Date:</strong> {stockData.compensationAsOfEpochDate}</p>
                </div>
              </div>
              <div className="long-business-summary">
                <h3>Long Business Summary</h3>
                <p>{stockData.longBusinessSummary}</p>
              </div>
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default App;
