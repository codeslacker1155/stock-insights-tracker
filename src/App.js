import React, { useEffect, useState } from 'react';
import { fetchStockData } from './utils/api';
import TradingViewWidget from './components/TradingViewWidget';
import StockDataDisplay from './components/StockDataDisplay';
import './App.css';

function App() {
  const [symbol, setSymbol] = useState('');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSymbolInputChange = (event) => {
    setSymbol(event.target.value.toUpperCase());
    console.log('Symbol input changed. New value:', event.target.value);
  };

  const handleSearch = async (event) => {
    event.preventDefault();
    if (symbol) {
      try {
        setLoading(true);
        setError(null);
        console.log('Search button clicked. Fetching data for symbol:', symbol);
        const data = await fetchStockData(symbol);
        console.log('Fetched stock data:', data);
        if (data) {
          setStockData(data);
        } else {
          setError('No stock data available');
        }
      } catch (error) {
        console.error('Error fetching stock data:', error);
        setError('Failed to fetch stock data');
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    // Function to update the dimensions of the TradingView container
    const updateContainerSize = () => {
      const container = document.getElementById('tradingview-widget-container');
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
      ) : stockData ? (
        <>
          <div className="tradingview-widget-container" id="tradingview-container">
            <TradingViewWidget symbol={symbol} />
          </div>
          <StockDataDisplay stockData={stockData} symbol={symbol}/>
        </>
      ) : null}
    </div>
  );
}

export default App;
