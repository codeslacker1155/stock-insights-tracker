import React from 'react';
import StockDataDisplay from './components/StockDataDisplay';
import CompanyInformation from './components/CompanyInformation';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* Remove or modify the logo and default content */}
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      {/* Add the stock data display and company information components */}
      <StockDataDisplay />
      <CompanyInformation />
    </div>
  );
}

export default App;
