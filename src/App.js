import React, { useEffect, useState, useCallback } from 'react';
import { fetchStockData } from './utils/api';

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

  const handleSearch = async () => {
    if (symbol) {
      await fetchData(symbol);
      setChartInitialized(true); // Set chart initialization state
    }
  };

  const initializeChart = useCallback(() => {
    if (window.TradingView && window.TradingView.widget && stockData && chartInitialized) {
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
        container_id: 'tradingview_4d8c0'
      });
    }
  }, [symbol, stockData, chartInitialized]);

  useEffect(() => {
    initializeChart();
  }, [initializeChart]);

  return (
    <div className="App">
      <header className="App-header">
        <h1>Stockify</h1>
        <p>
          Stockify is a cutting-edge stock market analysis and visualization platform that empowers users with real-time data, advanced charting tools, and comprehensive company information. Stay informed and make informed investment decisions with Stockify's intuitive interface, powerful features, and user-friendly design. Explore stock market trends, track your favorite companies, and dive deep into financial data with ease. Whether you're a seasoned investor or just getting started, Stockify is your go-to companion for unlocking the potential of the stock market. Take control of your financial future with Stockify!
        </p>
      </header>
      <div className="search-bar">
        <label htmlFor="symbol-input">Symbol:</label>
        <input type="text" id="symbol-input" value={symbol} onChange={handleSymbolInputChange} />
        <button type="button" onClick={handleSearch}>
          Search
        </button>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">{error}</p>
      ) : (
        stockData && (
          <div>
            <div className="tradingview-widget-container">
              <div id="tradingview_4d8c0"></div>
            </div>
            <div id="company-info">
              <h2>{stockData.symbol}</h2>
              <p>Address: {stockData.address}</p>
              <p>City: {stockData.city}</p>
              <p>State: {stockData.state}</p>
              <p>ZIP: {stockData.zip}</p>
              <p>Country: {stockData.country}</p>
              <p>Phone: {stockData.phone}</p>
              <p>Website: {stockData.website}</p>
              <p>Industry: {stockData.industry}</p>
              <p>Sector: {stockData.sector}</p>
              <p>Long Business Summary: {stockData.longBusinessSummary}</p>
              <p>Full-Time Employees: {stockData.fullTimeEmployees}</p>
              <p>Audit Risk: {stockData.auditRisk}</p>
              <p>Board Risk: {stockData.boardRisk}</p>
              <p>Compensation Risk: {stockData.compensationRisk}</p>
              <p>Shareholder Rights Risk: {stockData.shareHolderRightsRisk}</p>
              <p>Overall Risk: {stockData.overallRisk}</p>
              <p>Governance Epoch Date: {stockData.governanceEpochDate}</p>
              <p>Compensation As Of Epoch Date: {stockData.compensationAsOfEpochDate}</p>
            </div>
          </div>
        )
      )}
    </div>
  );
}

export default App;
