import React, { useState, useEffect } from 'react';
import TradingViewWidget from './TradingViewWidget.jsx';
import '../App.css';
import { fetchStockData } from '../utils/api';

function StockDataDisplay({ symbol }) {
  const [stockData, setStockData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchStockData(symbol);
        setStockData(data);
      } catch (error) {
        console.log('Error fetching stock data:', error);
      }
    };

    fetchData();
  }, [symbol]);
  
  return (
    <div>
      {stockData && (
        <div className="grid">
          <div className="tradingview-widget-container">
           <TradingViewWidget symbol={symbol} />
          </div>
          <div className="box">
            <h3>Company Information</h3>
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
          </div>
          <div className="box">
            <h3>Company Details</h3>
            <p>Full-Time Employees: {stockData.fullTimeEmployees}</p>
            <p>Audit Risk: {stockData.auditRisk}</p>
            <p>Board Risk: {stockData.boardRisk}</p>
            <p>Compensation Risk: {stockData.compensationRisk}</p>
            <p>Shareholder Rights Risk: {stockData.shareHolderRightsRisk}</p>
            <p>Governance Epoch Date: {stockData.governanceEpochDate}</p>
            <p>Compensation As Of Epoch Date: {stockData.compensationAsOfEpochDate}</p>
          </div>
          <div className="box">
            <h3>Long Business Summary</h3>
            <p>{stockData.longBusinessSummary}</p>
          </div>
          <div className="box">
            <h3>Earnings Chart</h3>
            <ul>
              {stockData.earningsChart &&
                stockData.earningsChart.quarterly.map((item, index) => (
                  <li key={index}>
                    Date: {item.date}, Actual: {item.actual && item.actual.fmt}, Estimate:{' '}
                    {item.estimate && item.estimate.fmt}
                  </li>
                ))}
            </ul>
          </div>
          <div className="box">
            <h3>Financials Chart</h3>
            <ul>
              {stockData.financialsChart &&
                stockData.financialsChart.yearly.map((item, index) => (
                  <li key={index}>
                    Date: {item.date}, Revenue: {item.revenue && item.revenue.fmt}, Earnings:{' '}
                    {item.earnings && item.earnings.fmt}
                  </li>
                ))}
            </ul>
          </div>
          <div className="box">
            <h3>Financial Data</h3>
            <p>Financial Currency: {stockData.financialCurrency}</p>
            <p>Current Price: {stockData.currentPrice && stockData.currentPrice.fmt}</p>
            <p>Target High Price: {stockData.targetHighPrice && stockData.targetHighPrice.fmt}</p>
            <p>Target Low Price: {stockData.targetLowPrice && stockData.targetLowPrice.fmt}</p>
            <p>Target Mean Price: {stockData.targetMeanPrice && stockData.targetMeanPrice.fmt}</p>
            <p>Target Median Price: {stockData.targetMedianPrice && stockData.targetMedianPrice.fmt}</p>
            <p>Recommendation Mean: {stockData.recommendationMean && stockData.recommendationMean.fmt}</p>
            <p>Recommendation Key: {stockData.recommendationKey}</p>
          </div>
          <div className="box">
            <h3>Financial Metrics</h3>
            <p>Total Cash: {stockData.totalCash && stockData.totalCash.fmt}</p>
            <p>Total Cash Per Share: {stockData.totalCashPerShare && stockData.totalCashPerShare.fmt}</p>
            <p>Total Debt: {stockData.totalDebt && stockData.totalDebt.fmt}</p>
            <p>Quick Ratio: {stockData.quickRatio && stockData.quickRatio.fmt}</p>
            <p>Current Ratio: {stockData.currentRatio && stockData.currentRatio.fmt}</p>
            <p>Total Revenue: {stockData.totalRevenue && stockData.totalRevenue.fmt}</p>
            <p>Debt To Equity: {stockData.debtToEquity && stockData.debtToEquity.fmt}</p>
            <p>Revenue Per Share: {stockData.revenuePerShare && stockData.revenuePerShare.fmt}</p>
            <p>Return On Assets: {stockData.returnOnAssets && stockData.returnOnAssets.fmt}</p>
            <p>Return On Equity: {stockData.returnOnEquity && stockData.returnOnEquity.fmt}</p>
            <p>Gross Profits: {stockData.grossProfits && stockData.grossProfits.fmt}</p>
            <p>Free Cashflow: {stockData.freeCashflow && stockData.freeCashflow.fmt}</p>
            <p>Operating Cashflow: {stockData.operatingCashflow && stockData.operatingCashflow.fmt}</p>
          </div>
          <div className="box">
            <p>Earnings Growth: {stockData.earningsGrowth && stockData.earningsGrowth.fmt}</p>
            <p>Revenue Growth: {stockData.revenueGrowth && stockData.revenueGrowth.fmt}</p>
            <p>Gross Margins: {stockData.grossMargins && stockData.grossMargins.fmt}</p>
            <p>EBITDA: {stockData.ebitda && stockData.ebitda.fmt}</p>
            <p>Net Income To Common: {stockData.netIncomeToCommon && stockData.netIncomeToCommon.fmt}</p>
            <p>EBITDA Margins: {stockData.ebitdaMargins && stockData.ebitdaMargins.fmt}</p>
            <p>Profit Margins: {stockData.profitMargins && stockData.profitMargins.fmt}</p>
            <p>Enterprise To Revenue: {stockData.enterpriseToRevenue && stockData.enterpriseToRevenue.fmt}</p>
            <p>Enterprise To EBITDA: {stockData.enterpriseToEbitda && stockData.enterpriseToEbitda.fmt}</p>
          </div>
          <div className="box">
            <p>52 Week Change: {stockData['52WeekChange'] && stockData['52WeekChange'].fmt}</p>
            <p>52 Week High: {stockData['52WeekHigh'] && stockData['52WeekHigh'].fmt}</p>
            <p>52 Week Low: {stockData['52WeekLow'] && stockData['52WeekLow'].fmt}</p>
            <p>50 Day Moving Average: {stockData['50DayMovingAverage'] && stockData['50DayMovingAverage'].fmt}</p>
            <p>200 Day Moving Average: {stockData['200DayMovingAverage'] && stockData['200DayMovingAverage'].fmt}</p>
          </div>
          <div className="box">
            <p>Shares Outstanding: {stockData.sharesOutstanding && stockData.sharesOutstanding.fmt}</p>
            <p>Shares Float: {stockData.sharesFloat && stockData.sharesFloat.fmt}</p>
            <p>Shares Short: {stockData.sharesShort && stockData.sharesShort.fmt}</p>
            <p>Shares Short Prior Month: {stockData.sharesShortPriorMonth && stockData.sharesShortPriorMonth.fmt}</p>
            <p>Short Ratio: {stockData.shortRatio && stockData.shortRatio.fmt}</p>
            <p>Short Percent Outstanding: {stockData.shortPercentOutstanding && stockData.shortPercentOutstanding.fmt}</p>
            <p>Short Percent Float: {stockData.shortPercentFloat && stockData.shortPercentFloat.fmt}</p>
            <p>Percent Insiders: {stockData.percentInsiders && stockData.percentInsiders.fmt}</p>
            <p>Percent Institutions: {stockData.percentInstitutions && stockData.percentInstitutions.fmt}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDataDisplay;
