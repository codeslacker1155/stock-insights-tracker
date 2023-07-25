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
            <strong>Recommendation Key: </strong>{stockData.recommendationKey}</p>
            <strong>Invesments: </strong>{stockData.investments}<br/>
            <strong>Net Borrowings: </strong>{stockData.netBorrowings}<br/>
            <strong>Other Assets: </strong>{stockData.otherAssets}<br/>
            <strong>Cash Flow: </strong>{stockData.cashFlow}<br/>
            <strong>Capital Expenditures: </strong>{stockData.capitalExpenditures}<br/>
            <strong>Change To Account Receivables: </strong>{stockData.changeToAccountReceivables}<br/>
            <strong>Change To Liabilities: </strong>{stockData.changeToLiabilities}<br/>
            <strong>Change To Net Income: </strong>{stockData.changeToNetincome}<br/>
            <strong>Change To Operating Activities: </strong>{stockData.changeToOperatingActivities}<br/>
            <strong>Depreciation: </strong>{stockData.depreciation}<br/>
            <strong>Dividends Paid: </strong>{stockData.dividendsPaid}<br/>
            <strong>Investing Cashflow: </strong>{stockData.investingCashflow}<br/>
            <strong>Net Income: </strong>{stockData.netIncome}<br/>
            <strong>Other Cashflow From Financing Activities: </strong>{stockData.otherCashflowFromFinancingActivities}<br/>
            <strong>Other Financing Cashflow: </strong>{stockData.otherFinancingCashflow}<br/>
            <strong>Other Investing Cashflow: </strong>{stockData.otherInvestingCashflow}<br/>
            <strong>Treasury Stock: </strong> {stockData.treasuryStock}<br/>
            <strong>Common Stock: </strong> {stockData.commonStock}<br/>
            <strong>Common Stock Total Equity: </strong> {stockData.commonStockTotalEquity}<br/>
            <strong>Net Tangible Assets: </strong> {stockData.netTangibleAssets}<br/>
            <strong>Other Liabilities: </strong> {stockData.otherLiabilities}<br/>
            <strong>Repurchase Of Stock: </strong> {stockData.repurchaseOfStock}<br/>
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
          <div className="long-business-summary">
            <h3>Company Officers</h3>
            <ul>
              {stockData.companyOfficers.map((officer, index) => (
                <li key={index}>
                  <strong>Name: </strong>{officer.name}<br />
                  <strong>Title: </strong>{officer.title}<br />
                  <strong>Compensation: </strong>{officer.totalPay.fmt}<br /><br />
                  <strong>Age: </strong>{officer.age}<br />
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
