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
            <p><strong>Symbol: </strong>{stockData.symbol}
            <strong>Address: </strong>{stockData.address}
            <strong>City: </strong>{stockData.city}
            <strong>State: </strong>{stockData.state}
            <strong>ZIP: </strong>{stockData.zip}
            <strong>Country: </strong>{stockData.country}
            <strong>Phone: </strong>{stockData.phone}
            <strong>Website: </strong>{stockData.website}
            <strong>Industry: </strong>{stockData.industry}
            <strong>Sector: </strong>{stockData.sector}</p>
          </div>
          <div className="box">
            <h3>Company Details</h3>
            <p><strong>Full-Time Employees: </strong>{stockData.fullTimeEmployees}
            <strong>Audit Risk: </strong>{stockData.auditRisk}
            <strong>Board Risk: </strong>{stockData.boardRisk}
            <strong>Compensation Risk: </strong>{stockData.compensationRisk}
            <strong>Shareholder Rights Risk: </strong>{stockData.shareHolderRightsRisk}
            <strong>Governance Epoch Date: </strong>{stockData.governanceEpochDate}
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
            <p><strong>Financial Currency: </strong>{stockData.financialCurrency}
            <strong>Current Price: </strong>{stockData.currentPrice && stockData.currentPrice.fmt}
            <strong>Target High Price: </strong>{stockData.targetHighPrice && stockData.targetHighPrice.fmt}
            <strong>Target Low Price: </strong>{stockData.targetLowPrice && stockData.targetLowPrice.fmt}
            <strong>Target Mean Price: </strong>{stockData.targetMeanPrice && stockData.targetMeanPrice.fmt}
            <strong>Target Median Price: </strong>{stockData.targetMedianPrice && stockData.targetMedianPrice.fmt}
            <strong>Recommendation Mean: </strong>{stockData.recommendationMean && stockData.recommendationMean.fmt}
            <strong>Recommendation Key: </strong>{stockData.recommendationKey}</p>
          </div>
          <div className="box">
            <h3>Financial Metrics</h3>
            <p><strong>Cash: </strong>{stockData.totalCash && stockData.totalCash.fmt}
            <strong>Total Cash Per Share: </strong>{stockData.totalCashPerShare && stockData.totalCashPerShare.fmt}
            <strong>Total Debt: </strong>{stockData.totalDebt && stockData.totalDebt.fmt}
            <strong>Quick Ratio: </strong>{stockData.quickRatio && stockData.quickRatio.fmt}
            <strong>Current Ratio: </strong>{stockData.currentRatio && stockData.currentRatio.fmt}
            <strong>Total Revenue: </strong>{stockData.totalRevenue && stockData.totalRevenue.fmt}
            <strong>Debt To Equity: </strong>{stockData.debtToEquity && stockData.debtToEquity.fmt}
            <strong>Revenue Per Share: </strong>{stockData.revenuePerShare && stockData.revenuePerShare.fmt}
            <strong>Return On Assets: </strong>{stockData.returnOnAssets && stockData.returnOnAssets.fmt}
            <strong>Return On Equity: </strong>{stockData.returnOnEquity && stockData.returnOnEquity.fmt}
            <strong>Gross Profits: </strong>{stockData.grossProfits && stockData.grossProfits.fmt}
            <strong>Free Cashflow: </strong>{stockData.freeCashflow && stockData.freeCashflow.fmt}
            <strong>Operating Cashflow: </strong>{stockData.operatingCashflow && stockData.operatingCashflow.fmt}</p>
          </div>
          <div className="box">
            <p><strong>Earnings Growth: </strong>{stockData.earningsGrowth && stockData.earningsGrowth.fmt}
            <strong>Revenue Growth: </strong>{stockData.revenueGrowth && stockData.revenueGrowth.fmt}
            <strong>Gross Margins: </strong>{stockData.grossMargins && stockData.grossMargins.fmt}
            <strong>EBITDA: </strong>{stockData.ebitda && stockData.ebitda.fmt}
            <strong>Net Income To Common: </strong>{stockData.netIncomeToCommon && stockData.netIncomeToCommon.fmt}
            <strong>EBITDA Margins: </strong>{stockData.ebitdaMargins && stockData.ebitdaMargins.fmt}
            <strong>Profit Margins: </strong>{stockData.profitMargins && stockData.profitMargins.fmt}
            <strong>Enterprise To Revenue: </strong>{stockData.enterpriseToRevenue && stockData.enterpriseToRevenue.fmt}
            <strong>Enterprise To EBITDA: </strong>{stockData.enterpriseToEbitda && stockData.enterpriseToEbitda.fmt}</p>
          </div>
          <div className="box">
            <p><strong>52 Week Change: </strong>{stockData['52WeekChange'] && stockData['52WeekChange'].fmt}
            <strong>52 Week High: </strong>{stockData['52WeekHigh'] && stockData['52WeekHigh'].fmt}
            <strong>52 Week Low: </strong>{stockData['52WeekLow'] && stockData['52WeekLow'].fmt}
            <strong>50 Day Moving Average: </strong>{stockData['50DayMovingAverage'] && stockData['50DayMovingAverage'].fmt}
            <strong>200 Day Moving Average: </strong>{stockData['200DayMovingAverage'] && stockData['200DayMovingAverage'].fmt}</p>
          </div>
          <div className="box">
            <p><strong>Shares Outstanding: </strong>{stockData.sharesOutstanding && stockData.sharesOutstanding.fmt}
            <strong>Shares Float: </strong>{stockData.sharesFloat && stockData.sharesFloat.fmt}
            <strong>Shares Short: </strong>{stockData.sharesShort && stockData.sharesShort.fmt}
            <strong>Shares Short Prior Month: </strong>{stockData.sharesShortPriorMonth && stockData.sharesShortPriorMonth.fmt}
            <strong>Short Ratio: </strong>{stockData.shortRatio && stockData.shortRatio.fmt}
            <strong>Short Percent Outstanding: </strong>{stockData.shortPercentOutstanding && stockData.shortPercentOutstanding.fmt}
            <strong>Short Percent Float: </strong>{stockData.shortPercentFloat && stockData.shortPercentFloat.fmt}
            <strong>Percent Insiders: </strong>{stockData.percentInsiders && stockData.percentInsiders.fmt}
            <strong>Percent Institutions: </strong>{stockData.percentInstitutions && stockData.percentInstitutions.fmt}</p>
          </div>
          <div className=".long-business-summary">
            <h3>Long Business Summary</h3>
            <p>{stockData.longBusinessSummary}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default StockDataDisplay;
