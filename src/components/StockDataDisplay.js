import React, { useEffect } from 'react';
import '../App.css';
import { fetchStockData } from '../utils/api';

function StockDataDisplay({ symbol, stockData, setStockData, loading, setLoading, error, setError }) {
    
    
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
      }, [symbol, setStockData]);      

  return (
    <div>
      {stockData && (
        <div className="grid">
          <div className="box">
            <h3>Company Information</h3>
            <p><strong>Symbol: </strong>{symbol}<br/>
            <strong>Address: </strong>{stockData.address}<br/>
            <strong>City: </strong>{stockData.city}<br/>
            <strong>State: </strong>{stockData.state}<br/>
            <strong>ZIP: </strong>{stockData.zip}<br/>
            <strong>Country: </strong>{stockData.country}<br/>
            <strong>Phone: </strong>{stockData.phone}<br/>
            <strong>Website: </strong>{stockData.website}<br/>
            <strong>Industry: </strong>{stockData.industry}<br/>
            <strong>Sector: </strong>{stockData.sector}</p>
          </div>
          <div className="box">
            <h3>Company Details</h3>
            <p><strong>Full-Time Employees: </strong>{stockData.fullTimeEmployees}<br/>
            <strong>Audit Risk: </strong>{stockData.auditRisk}<br/>
            <strong>Board Risk: </strong>{stockData.boardRisk}<br/>
            <strong>Compensation Risk: </strong>{stockData.compensationRisk}<br/>
            <strong>Shareholder Rights Risk: </strong>{stockData.shareHolderRightsRisk}<br/>
            <strong>Governance Epoch Date: </strong>{stockData.governanceEpochDate}<br/>
            <strong>Compensation As Of Epoch Date: </strong>{stockData.compensationAsOfEpochDate}</p>
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
            <p><strong>Financial Currency: </strong>{stockData.financialCurrency}<br/>
            <strong>Current Price: </strong>{stockData.currentPrice && stockData.currentPrice.fmt}<br/>
            <strong>Target High Price: </strong>{stockData.targetHighPrice && stockData.targetHighPrice.fmt}<br/>
            <strong>Target Low Price: </strong>{stockData.targetLowPrice && stockData.targetLowPrice.fmt}<br/>
            <strong>Target Mean Price: </strong>{stockData.targetMeanPrice && stockData.targetMeanPrice.fmt}<br/>
            <strong>Target Median Price: </strong>{stockData.targetMedianPrice && stockData.targetMedianPrice.fmt}<br/>
            <strong>Recommendation Mean: </strong>{stockData.recommendationMean && stockData.recommendationMean.fmt}<br/>
            <strong>Recommendation Key: </strong>{stockData.recommendationKey}</p>
          </div>
          <div className="box">
            <h3>Financial Metrics</h3>
            <br/><p><strong>Cash: </strong>{stockData.totalCash}<br/>
            <strong>Total Cash Per Share: </strong>{stockData.totalCashPerShare}<br/>
            <strong>Total Debt: </strong>{stockData.totalDebt }<br/>
            <strong>Quick Ratio: </strong>{stockData.quickRatio }<br/>
            <strong>Current Ratio: </strong>{stockData.currentRatio }<br/>
            <strong>Total Revenue: </strong>{stockData.totalRevenue }<br/>
            <strong>Debt To Equity: </strong>{stockData.debtToEquity }<br/>
            <strong>Revenue Per Share: </strong>{stockData.revenuePerShare }<br/>
            <strong>Return On Assets: </strong>{stockData.returnOnAssets }<br/>
            <strong>Return On Equity: </strong>{stockData.returnOnEquity }<br/>
            <strong>Gross Profits: </strong>{stockData.grossProfits}<br/>
            <strong>Free Cashflow: </strong>{stockData.freeCashflow }<br/>
            <strong>Operating Cashflow: </strong>{stockData.operatingCashflow   }</p>
          </div>
          <div className="box">
            <h3>Financial Growth</h3>
            <p>
              <strong>Earnings Growth: </strong>
            </p>
          </div>
          <div className="box">
            <h3>Index Ticker</h3>
            <p><strong>52 Week Change: </strong>{stockData.fiftyTwoWeekChange}<br />
              <strong>Enterprise to Revenue: </strong>{stockData.enterpriseToRevenue}<br />
              <strong>Enterprise to EBITDA: </strong>{stockData.enterpriseToEbitda}<br />
              <strong>52 Week High: </strong>{stockData['52WeekHigh']}<br />
              <strong>52 Week Low: </strong>{stockData['52WeekLow']}<br />
              <strong>50 Day Moving Average: </strong>{stockData['50DayMovingAverage']}<br />
              <strong>200 Day Moving Average: </strong>{stockData['200DayMovingAverage']}</p>
          </div>
          <div className="box"> 
            <h3>Share Statistics</h3>
            <p> <strong>Shares Outstanding: </strong>{stockData.sharesOutstanding}<br />
              <strong>Shares Float: </strong>{stockData.sharesFloat}<br />
              <strong>Shares Short: </strong>{stockData.sharesShort}<br />
              <strong>Shares Short Prior Month: </strong>{stockData.sharesShortPriorMonth}<br />
              <strong>Short Ratio: </strong>{stockData.shortRatio}<br />
              <strong>Short Percent Outstanding: </strong>{stockData.shortPercentOutstanding}<br />
              <strong>Short Percent Float: </strong>{stockData.shortPercentFloat}<br />
              <strong>Percent Insiders: </strong>{stockData.percentInsiders}<br />
              <strong>Percent Institutions: </strong>{stockData.percentInstitutions}<br />
              <strong>Forward Annual Dividend Rate: </strong>{stockData.forwardAnnualDividendRate}</p>
          </div>
          <div className="box">
            <h3>Company Officers</h3>
            <ul>
              {stockData.companyOfficers.map((officer, index) => (
                <li key={index}>
                  <strong>Name: </strong>{officer.name}<br />
                  <strong>Title: </strong>{officer.title}<br />
                  <strong>Compensation: </strong>{officer.compensation}<br />
                </li>
              ))}
            </ul>
          </div>
          <div className="long-business-summary">
            <h3>Long Business Summary</h3>
            <p>{stockData.longBusinessSummary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDataDisplay;
