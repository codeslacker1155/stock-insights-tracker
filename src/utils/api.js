const API_KEY = '0rD6UyDj8jmshLwoCdZCWBgBf6pIp1UK2BBjsnb2kK9LFosz4o'; // Replace with your API key

export const fetchStockData = async (symbol) => {
  const response = await fetch(
    `https://mboum-finance.p.rapidapi.com/mo/module/?symbol=${symbol}&module=asset-profile%2Cfinancial-data%2Cearnings%2Ccashflow-statement%2Cbalance-sheet`,
    {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': API_KEY,
        'X-RapidAPI-Host': 'mboum-finance.p.rapidapi.com',
      },
    }
  );

  if (!response.ok) {
    throw new Error('Failed to fetch stock data');
  }

  const data = await response.json();
  // Process the API response and extract the relevant stock data properties
  const convertObjectToString = (obj) => (obj?.fmt || 'N/A');
  
  // Outline all the values we want to extract from the API response and that are displayed in the StockDataDisplay component
  const stockData = {
    symbol: data.symbol,
    address: data.profile.address1,
    city: data.profile.city,
    state: data.profile.state,
    zip: data.profile.zip,
    country: data.profile.country,
    phone: data.profile.phone,
    website: data.profile.website,
    industry: data.profile.industry,
    sector: data.profile.sector,
    fullTimeEmployees: convertObjectToString(data.profile.fullTimeEmployees),
    auditRisk: convertObjectToString(data.financialData.auditRisk),
    boardRisk: convertObjectToString(data.financialData.boardRisk),
    compensationRisk: convertObjectToString(data.financialData.compensationRisk),
    shareHolderRightsRisk: convertObjectToString(data.financialData.shareHolderRightsRisk),
    governanceEpochDate: convertObjectToString(data.financialData.governanceEpochDate),
    compensationAsOfEpochDate: convertObjectToString(data.financialData.compensationAsOfEpochDate),
    earningsChart: data.earnings,
    financialsChart: data.financialsChart,
    totalCash: convertObjectToString(data.cashflowStatement.totalCash),
    totalCashPerShare: convertObjectToString(data.cashflowStatement.totalCashPerShare),
    ebitda: convertObjectToString(data.cashflowStatement.ebitda),
    totalDebt: convertObjectToString(data.balanceSheet.totalDebt),
    quickRatio: convertObjectToString(data.balanceSheet.quickRatio),
    currentRatio: convertObjectToString(data.balanceSheet.currentRatio),
    totalRevenue: convertObjectToString(data.financialsChart.yearly[0].revenue),
    revenuePerShare: convertObjectToString(data.financialsChart.yearly[0].revenuePerShare),
    revenueGrowth: convertObjectToString(data.financialsChart.yearly[0].revenueGrowth),
    grossProfit: convertObjectToString(data.financialsChart.yearly[0].grossProfit),
    ebitdaMargins: convertObjectToString(data.financialsChart.yearly[0].ebitdaMargins),
    operatingMargins: convertObjectToString(data.financialsChart.yearly[0].operatingMargins),
    profitMargins: convertObjectToString(data.financialsChart.yearly[0].profitMargins),
    financialCurrency: data.financialCurrency,
  };

  return stockData;
};

// Path: src\components\StockDataDisplay.js