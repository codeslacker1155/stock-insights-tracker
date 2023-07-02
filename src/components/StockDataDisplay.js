import React, { useEffect, useState } from 'react';
import { fetchStockData } from '../utils/api';

function StockDataDisplay() {
  const [stockData, setStockData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData();
        setStockData(data);
        setLoading(false);
      } catch (error) {
        setError('Failed to fetch stock data');
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div>
      {stockData && (
        <div>
          <h2>Stock Data</h2>
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
          <p>Earnings Chart: {JSON.stringify(stockData.earningsChart)}</p>
          <p>Financials Chart: {JSON.stringify(stockData.financialsChart)}</p>
          <p>Financial Currency: {stockData.financialCurrency}</p>
          <p>Current Price: {JSON.stringify(stockData.currentPrice)}</p>
          <p>Target High Price: {JSON.stringify(stockData.targetHighPrice)}</p>
          <p>Target Low Price: {JSON.stringify(stockData.targetLowPrice)}</p>
          <p>Target Mean Price: {JSON.stringify(stockData.targetMeanPrice)}</p>
          <p>Target Median Price: {JSON.stringify(stockData.targetMedianPrice)}</p>
          <p>Recommendation Mean: {JSON.stringify(stockData.recommendationMean)}</p>
          <p>Recommendation Key: {stockData.recommendationKey}</p>
          <p>Number of Analyst Opinions: {JSON.stringify(stockData.numberOfAnalystOpinions)}</p>
          <p>Total Cash: {JSON.stringify(stockData.totalCash)}</p>
          <p>Total Cash Per Share: {JSON.stringify(stockData.totalCashPerShare)}</p>
          <p>EBITDA: {JSON.stringify(stockData.ebitda)}</p>
          <p>Total Debt: {JSON.stringify(stockData.totalDebt)}</p>
          <p>Quick Ratio: {JSON.stringify(stockData.quickRatio)}</p>
          <p>Current Ratio: {JSON.stringify(stockData.currentRatio)}</p>
          <p>Total Revenue: {JSON.stringify(stockData.totalRevenue)}</p>
          <p>Debt to Equity: {JSON.stringify(stockData.debtToEquity)}</p>
          <p>Revenue per Share: {JSON.stringify(stockData.revenuePerShare)}</p>
          <p>Return on Assets: {JSON.stringify(stockData.returnOnAssets)}</p>
          <p>Return on Equity: {JSON.stringify(stockData.returnOnEquity)}</p>
          <p>Gross Profits: {JSON.stringify(stockData.grossProfits)}</p>
          <p>Free Cashflow: {JSON.stringify(stockData.freeCashflow)}</p>
          <p>Operating Cashflow: {JSON.stringify(stockData.operatingCashflow)}</p>
          <p>Earnings Growth: {JSON.stringify(stockData.earningsGrowth)}</p>
          <p>Revenue Growth: {JSON.stringify(stockData.revenueGrowth)}</p>
          <p>Gross Margins: {JSON.stringify(stockData.grossMargins)}</p>
          <p>EBITDA Margins: {JSON.stringify(stockData.ebitdaMargins)}</p>
          <p>Operating Margins: {JSON.stringify(stockData.operatingMargins)}</p>
          <p>Profit Margins: {JSON.stringify(stockData.profitMargins)}</p>
        </div>
      )}
    </div>
  );
}

export default StockDataDisplay;
