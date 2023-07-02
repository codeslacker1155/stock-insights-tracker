import React, { useEffect, useState, useCallback } from 'react';
import { fetchStockData } from '../utils/api';

function StockDataDisplay() {
  const [symbol, setSymbol] = useState('AAPL');
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    fetchData();
    updateChartSymbol(symbol);
  };

  const fetchData = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);
      const data = await fetchStockData(symbol);
      if (data) {
        setStockData(data);
        setLoading(false);
      } else {
        setError('No stock data available');
      }
    } catch (error) {
      console.error('Error fetching stock data:', error);
      setError('Failed to fetch stock data');
      setLoading(false);
    }
  }, [symbol]);

  const updateChartSymbol = useCallback((symbol) => {
    if (window.TradingView && window.TradingView.widget) {
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
  }, []);

  useEffect(() => {
    fetchData();
    updateChartSymbol(symbol);
  }, [fetchData, symbol, updateChartSymbol]);

  return (
    <div>
      <h2>Stock Data</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Symbol:
          <input type="text" value={symbol} onChange={(e) => setSymbol(e.target.value)} />
        </label>
        <button type="submit">Search</button>
      </form>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {stockData && (
        <div>
          <p>Symbol: {stockData.symbol}</p>
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
          <p>Earnings Chart:</p>
          <ul>
            {stockData.earningsChart &&
              stockData.earningsChart.quarterly.map((item, index) => (
                <li key={index}>
                  Date: {item.date}, Actual: {item.actual && item.actual.fmt}, Estimate:{' '}
                  {item.estimate && item.estimate.fmt}
                </li>
              ))}
          </ul>
          <p>Financials Chart:</p>
          <ul>
            {stockData.financialsChart &&
              stockData.financialsChart.yearly.map((item, index) => (
                <li key={index}>
                  Date: {item.date}, Revenue: {item.revenue && item.revenue.fmt}, Earnings:{' '}
                  {item.earnings && item.earnings.fmt}
                </li>
              ))}
          </ul>
          <p>Financial Currency: {stockData.financialCurrency}</p>
          <p>Current Price: {stockData.currentPrice && stockData.currentPrice.fmt}</p>
          <p>Target High Price: {stockData.targetHighPrice && stockData.targetHighPrice.fmt}</p>
          <p>Target Low Price: {stockData.targetLowPrice && stockData.targetLowPrice.fmt}</p>
          <p>Target Mean Price: {stockData.targetMeanPrice && stockData.targetMeanPrice.fmt}</p>
          <p>Target Median Price: {stockData.targetMedianPrice && stockData.targetMedianPrice.fmt}</p>
          <p>Recommendation Mean: {stockData.recommendationMean && stockData.recommendationMean.fmt}</p>
          <p>Recommendation Key: {stockData.recommendationKey}</p>
          <p>Number of Analyst Opinions: {stockData.numberOfAnalystOpinions && stockData.numberOfAnalystOpinions.fmt}</p>
          <p>Total Cash: {stockData.totalCash && stockData.totalCash.fmt}</p>
          <p>Total Cash Per Share: {stockData.totalCashPerShare && stockData.totalCashPerShare.fmt}</p>
          <p>EBITDA: {stockData.ebitda && stockData.ebitda.fmt}</p>
          <p>Total Debt: {stockData.totalDebt && stockData.totalDebt.fmt}</p>
          <p>Quick Ratio: {stockData.quickRatio && stockData.quickRatio.fmt}</p>
          <p>Current Ratio: {stockData.currentRatio && stockData.currentRatio.fmt}</p>
          <p>Total Revenue: {stockData.totalRevenue && stockData.totalRevenue.fmt}</p>
          <p>Debt to Equity: {stockData.debtToEquity && stockData.debtToEquity.fmt}</p>
          <p>Revenue per Share: {stockData.revenuePerShare && stockData.revenuePerShare.fmt}</p>
          <p>Return on Assets: {stockData.returnOnAssets && stockData.returnOnAssets.fmt}</p>
          <p>Return on Equity: {stockData.returnOnEquity && stockData.returnOnEquity.fmt}</p>
          <p>Gross Profits: {stockData.grossProfits && stockData.grossProfits.fmt}</p>
          <p>Free Cashflow: {stockData.freeCashflow && stockData.freeCashflow.fmt}</p>
          <p>Operating Cashflow: {stockData.operatingCashflow && stockData.operatingCashflow.fmt}</p>
          <p>Earnings Growth: {stockData.earningsGrowth && stockData.earningsGrowth.fmt}</p>
          <p>Revenue Growth: {stockData.revenueGrowth && stockData.revenueGrowth.fmt}</p>
          <p>Gross Margins: {stockData.grossMargins && stockData.grossMargins.fmt}</p>
          <p>EBITDA Margins: {stockData.ebitdaMargins && stockData.ebitdaMargins.fmt}</p>
          <p>Operating Margins: {stockData.operatingMargins && stockData.operatingMargins.fmt}</p>
          <p>Profit Margins: {stockData.profitMargins && stockData.profitMargins.fmt}</p>
        </div>
      )}
    </div>
  );
}

export default StockDataDisplay;
