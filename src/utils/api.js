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
  const stockData = {
    symbol: data.assetProfile.symbol,
    address: data.assetProfile.address1,
    city: data.assetProfile.city,
    state: data.assetProfile.state,
    zip: data.assetProfile.zip,
    country: data.assetProfile.country,
    phone: data.assetProfile.phone,
    website: data.assetProfile.website,
    industry: data.assetProfile.industry,
    sector: data.assetProfile.sector,
    longBusinessSummary: data.assetProfile.longBusinessSummary,
    fullTimeEmployees: data.assetProfile.fullTimeEmployees,
    companyOfficers: data.assetProfile.companyOfficers,
    auditRisk: data.assetProfile.auditRisk,
    boardRisk: data.assetProfile.boardRisk,
    compensationRisk: data.assetProfile.compensationRisk,
    shareHolderRightsRisk: data.assetProfile.shareHolderRightsRisk,
    overallRisk: data.assetProfile.overallRisk,
    governanceEpochDate: data.assetProfile.governanceEpochDate,
    compensationAsOfEpochDate: data.assetProfile.compensationAsOfEpochDate,
    earningsChart: data.earnings.earningsChart,
    financialsChart: data.earnings.financialsChart,
    financialCurrency: data.financialData.financialCurrency,
    currentPrice: data.financialData.currentPrice,
    targetHighPrice: data.financialData.targetHighPrice,
    targetLowPrice: data.financialData.targetLowPrice,
    targetMeanPrice: data.financialData.targetMeanPrice,
    targetMedianPrice: data.financialData.targetMedianPrice,
    recommendationMean: data.financialData.recommendationMean,
    recommendationKey: data.financialData.recommendationKey,
    numberOfAnalystOpinions: data.financialData.numberOfAnalystOpinions,
    totalCash: data.financialData.totalCash,
    totalCashPerShare: data.financialData.totalCashPerShare,
    ebitda: data.financialData.ebitda,
    totalDebt: data.financialData.totalDebt,
    quickRatio: data.financialData.quickRatio,
    currentRatio: data.financialData.currentRatio,
    totalRevenue: data.financialData.totalRevenue,
    debtToEquity: data.financialData.debtToEquity,
    revenuePerShare: data.financialData.revenuePerShare,
    returnOnAssets: data.financialData.returnOnAssets,
    returnOnEquity: data.financialData.returnOnEquity,
    grossProfits: data.financialData.grossProfits,
    freeCashflow: data.financialData.freeCashflow,
    operatingCashflow: data.financialData.operatingCashflow,
    earningsGrowth: data.financialData.earningsGrowth,
    revenueGrowth: data.financialData.revenueGrowth,
    grossMargins: data.financialData.grossMargins,
    ebitdaMargins: data.financialData.ebitdaMargins,
    operatingMargins: data.financialData.operatingMargins,
    profitMargins: data.financialData.profitMargins,
    fiftyTwoWeekChange: data.financialData['52WeekChange'],
    eterpriseToRevenue: data.financialData.enterpriseToRevenue,
    enterpriseToEbitda: data.financialData.enterpriseToEbitda,
    '52WeekHigh': data.financialData['52WeekHigh'],
    '52WeekLow': data.financialData['52WeekLow'],
    '50DayMovingAverage': data.financialData['50DayMovingAverage'],
    '200DayMovingAverage': data.financialData['200DayMovingAverage'],
    sharesOutstanding: data.financialData.sharesOutstanding,
    sharesFloat: data.financialData.sharesFloat,
    sharesShort: data.financialData.sharesShort,
    sharesShortPriorMonth: data.financialData.sharesShortPriorMonth,
    shortRatio: data.financialData.shortRatio,
    shortPercentOutstanding: data.financialData.shortPercentOutstanding,
    shortPercentFloat: data.financialData.shortPercentFloat,
    percentInsiders: data.financialData.percentInsiders,
    percentInstitutions: data.financialData.percentInstitutions,
    forwardAnnualDividendRate: data.financialData.forwardAnnualDividendRate,
  };


  return stockData;
};

// Path: src\components\StockDataDisplay.js