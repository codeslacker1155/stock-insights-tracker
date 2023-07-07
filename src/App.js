import React, { useEffect, useState, useCallback } from 'react';
import { fetchStockData } from './utils/api';
import StockDataDisplay from './components/StockDataDisplay';
import TradingViewWidget from '../TradingViewWidget';
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

  useEffect(() => {
    // Function to update the dimensions of the TradingView container
    const updateContainerSize = () => {
      const container = document.getElementById('tradingview_4d8c0');
      if (container) {
        const windowHeight = window.innerHeight;
        const windowWidth = window.innerWidth;
        const desiredHeight = windowHeight * 0.7; // Adjust as needed
        const desiredWidth = windowWidth * 0.8; // Adjust as needed
        container.style.height = `${desiredHeight}px`;
        container.style.width = `${desiredWidth}px`;
      }
    };

    // Call the function on page load and window resize
    window.addEventListener('load', updateContainerSize);
    window.addEventListener('resize', updateContainerSize);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('resize', updateContainerSize);
    };
  }, []);

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
          <input type="text" id="symbol-input" value={symbol} onChange={handleSymbolInputChange} />
          <button type="submit">Search</button>
        </form>
      </div>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p className="error-message">Error: {error}</p>
      ) : (
        <>
          <div id="tradingview_4d8c0" className="tradingview-widget-container">
            {chartInitialized && <TradingViewWidget />}
          </div>
          {stockData && <StockDataDisplay symbol={symbol} />}
        </>
      )}
    </div>
  );
}

export default App;
