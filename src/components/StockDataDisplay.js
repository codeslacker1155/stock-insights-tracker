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
            <br/><p><strong>Cash: </strong>{stockData.totalCash && stockData.totalCash.fmt}<br/>
            <strong>Total Cash Per Share: </strong>{stockData.totalCashPerShare && stockData.totalCashPerShare.fmt}<br/>
            <strong>Total Debt: </strong>{stockData.totalDebt && stockData.totalDebt.fmt}<br/>
            <strong>Quick Ratio: </strong>{stockData.quickRatio && stockData.quickRatio.fmt}<br/>
            <strong>Current Ratio: </strong>{stockData.currentRatio && stockData.currentRatio.fmt}<br/>
            <strong>Total Revenue: </strong>{stockData.totalRevenue && stockData.totalRevenue.fmt}<br/>
            <strong>Debt To Equity: </strong>{stockData.debtToEquity && stockData.debtToEquity.fmt}<br/>
            <strong>Revenue Per Share: </strong>{stockData.revenuePerShare && stockData.revenuePerShare.fmt}<br/>
            <strong>Return On Assets: </strong>{stockData.returnOnAssets && stockData.returnOnAssets.fmt}<br/>
            <strong>Return On Equity: </strong>{stockData.returnOnEquity && stockData.returnOnEquity.fmt}<br/>
            <strong>Gross Profits: </strong>{stockData.grossProfits && stockData.grossProfits.fmt}<br/>
            <strong>Free Cashflow: </strong>{stockData.freeCashflow && stockData.freeCashflow.fmt}<br/>
            <strong>Operating Cashflow: </strong>{stockData.operatingCashflow && stockData.operatingCashflow.fmt}</p>
          </div>
          <div className="box">
            <h3>Financial Growth</h3>
            <p><strong>Earnings Growth: </strong>{stockData.earningsGrowth && stockData.earningsGrowth.fmt}<br/>
            <strong>Revenue Growth: </strong>{stockData.revenueGrowth && stockData.revenueGrowth.fmt}<br/>
            <strong>Gross Margins: </strong>{stockData.grossMargins && stockData.grossMargins.fmt}<br/>
            <strong>EBITDA: </strong>{stockData.ebitda && stockData.ebitda.fmt}<br/>
            <strong>Net Income To Common: </strong>{stockData.netIncomeToCommon && stockData.netIncomeToCommon.fmt}<br/>
            <strong>EBITDA Margins: </strong>{stockData.ebitdaMargins && stockData.ebitdaMargins.fmt}<br/>
            <strong>Profit Margins: </strong>{stockData.profitMargins && stockData.profitMargins.fmt}<br/>
            </p>
          </div>
          <div className="box">
            <h3>Company Officers</h3>
            <ul>
              {stockData.companyOfficers &&
                stockData.companyOfficers.map((item, index) => (
                  <li key={index}>
                    Name: {item.name}, Age: {item.age}, Title: {item.title}, Compensation:{' '}
                  </li>
                ))}
            </ul>
          </div>
          <div className="box">
            <h3>Share Statistics</h3>
            <p><strong>Shares Outstanding: </strong>{stockData.sharesOutstanding && stockData.sharesOutstanding.fmt}<br/>
            <strong>Shares Float: </strong>{stockData.sharesFloat && stockData.sharesFloat.fmt}<br/>
            <strong>Shares Short: </strong>{stockData.sharesShort && stockData.sharesShort.fmt}<br/>
            <strong>Shares Short Prior Month: </strong>{stockData.sharesShortPriorMonth && stockData.sharesShortPriorMonth.fmt}<br/>
            <strong>Short Ratio: </strong>{stockData.shortRatio && stockData.shortRatio.fmt}<br/>
            <strong>Short Percent Outstanding: </strong>{stockData.shortPercentOutstanding && stockData.shortPercentOutstanding.fmt}<br/>
            <strong>Short Percent Float: </strong>{stockData.shortPercentFloat && stockData.shortPercentFloat.fmt}<br/>
            <strong>Percent Insiders: </strong>{stockData.percentInsiders && stockData.percentInsiders.fmt}<br/>
            <strong>Percent Institutions: </strong>{stockData.percentInstitutions && stockData.percentInstitutions.fmt}</p>
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
