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
    symbol: data.assetProfile?.symbol || 'N/A',
    address: data.assetProfile?.address1 || 'N/A',
    city: data.assetProfile?.city || 'N/A',
    state: data.assetProfile?.state || 'N/A',
    zip: data.assetProfile?.zip || 'N/A',
    country: data.assetProfile?.country || 'N/A',
    phone: data.assetProfile?.phone || 'N/A',
    website: data.assetProfile?.website || 'N/A',
    industry: data.assetProfile?.industry || 'N/A',
    sector: data.assetProfile?.sector || 'N/A',
    longBusinessSummary: data.assetProfile?.longBusinessSummary || 'N/A',
    fullTimeEmployees: data.assetProfile?.fullTimeEmployees || 'N/A',
    companyOfficers: data.assetProfile?.companyOfficers || [],
    auditRisk: data.assetProfile?.auditRisk || 'N/A',
    boardRisk: data.assetProfile?.boardRisk || 'N/A',
    compensationRisk: data.assetProfile?.compensationRisk || 'N/A',
    shareHolderRightsRisk: data.assetProfile?.shareHolderRightsRisk || 'N/A',
    overallRisk: data.assetProfile?.overallRisk || 'N/A',
    governanceEpochDate: data.assetProfile?.governanceEpochDate || 'N/A',
    compensationAsOfEpochDate: data.assetProfile?.compensationAsOfEpochDate || 'N/A',
    earningsChart: data.earnings?.earningsChart || [],
    financialsChart: data.earnings?.financialsChart || [],
    financialCurrency: data.financialData?.financialCurrency || 'N/A',
    currentPrice: data.financialData?.currentPrice?.fmt || 'N/A',
    recommendationMean: data.financialData?.recommendationMean?.fmt || 'N/A',
    recommendationKey: data.financialData?.recommendationKey || 'N/A',
    numberOfAnalystOpinions: data.financialData?.numberOfAnalystOpinions || 'N/A',
    totalCash: data.financialData?.totalCash?.fmt || 'N/A',
    totalCashPerShare: data.financialData?.totalCashPerShare?.fmt || 'N/A',
    ebitda: data.financialData?.ebitda?.fmt || 'N/A',
    totalDebt: data.financialData?.totalDebt?.fmt || 'N/A',
    quickRatio: data.financialData?.quickRatio?.fmt || 'N/A',
    currentRatio: data.financialData?.currentRatio?.fmt || 'N/A',
    totalRevenue: data.financialData?.totalRevenue?.fmt || 'N/A',
    debtToEquity: data.financialData?.debtToEquity?.fmt || 'N/A',
    revenuePerShare: data.financialData?.revenuePerShare?.fmt || 'N/A',
    returnOnAssets: data.financialData?.returnOnAssets?.fmt || 'N/A',
    returnOnEquity: data.financialData?.returnOnEquity?.fmt || 'N/A',
    grossProfits: data.financialData?.grossProfits?.fmt || 'N/A',
    freeCashflow: data.financialData?.freeCashflow?.fmt || 'N/A',
    operatingCashflow: data.financialData?.operatingCashflow?.fmt || 'N/A',
    earningsGrowth: data.financialData?.earningsGrowth?.fmt || 'N/A',
    revenueGrowth: data.financialData?.revenueGrowth?.fmt || 'N/A',
    grossMargins: data.financialData?.grossMargins?.fmt || 'N/A',
    ebitdaMargins: data.financialData?.ebitdaMargins?.fmt || 'N/A',
    operatingMargins: data.financialData?.operatingMargins?.fmt || 'N/A',
    profitMargins: data.financialData?.profitMargins?.fmt || 'N/A',
    fiftyTwoWeekChange: data.financialData?.['52WeekChange']?.fmt || 'N/A',
    enterpriseToRevenue: data.financialData?.enterpriseToRevenue?.fmt || 'N/A',
    enterpriseToEbitda: data.financialData?.enterpriseToEbitda?.fmt || 'N/A',
    '52WeekHigh': data.financialData?.['52WeekHigh']?.fmt || 'N/A',
    '52WeekLow': data.financialData?.['52WeekLow']?.fmt || 'N/A',
    '50DayMovingAverage': data.financialData?.['50DayMovingAverage']?.fmt || 'N/A',
    '200DayMovingAverage': data.financialData?.['200DayMovingAverage']?.fmt || 'N/A',
    sharesOutstanding: data.financialData?.sharesOutstanding?.fmt || 'N/A',
    sharesFloat: data.financialData?.sharesFloat?.fmt || 'N/A',
    sharesShort: data.financialData?.sharesShort?.fmt || 'N/A',
    sharesShortPriorMonth: data.financialData?.sharesShortPriorMonth?.fmt || 'N/A',
    shortRatio: data.financialData?.shortRatio?.fmt || 'N/A',
    shortPercentOutstanding: data.financialData?.shortPercentOutstanding?.fmt || 'N/A',
    shortPercentFloat: data.financialData?.shortPercentFloat?.fmt || 'N/A',
    percentInsiders: data.financialData?.percentInsiders?.fmt || 'N/A',
    percentInstitutions: data.financialData?.percentInstitutions?.fmt || 'N/A',
    forwardAnnualDividendRate: data.financialData?.forwardAnnualDividendRate?.fmt || 'N/A',
    payoutRatio: data.financialData?.payoutRatio?.fmt || 'N/A',
    investments: data.financialData?.investments?.fmt || 'N/A',
    totalCashflowsFromInvestingActivities: data.financialData?.totalCashflowsFromInvestingActivities?.fmt || 'N/A',
    netBorrowings: data.financialData?.netBorrowings?.fmt || 'N/A',
    otherCashflowsFromFinancingActivities: data.financialData?.otherCashflowsFromFinancingActivities?.fmt || 'N/A',
    cashChange: data.financialData?.cashChange?.fmt || 'N/A',
    cashFlow: data.financialData?.cashFlow?.fmt || 'N/A',
    operatingGainsLosses: data.financialData?.operatingGainsLosses?.fmt || 'N/A',
    depreciation: data.financialData?.depreciation?.fmt || 'N/A',
    changesInInventories: data.financialData?.changesInInventories?.fmt || 'N/A',
    accountsReceivables: data.financialData?.accountsReceivables?.fmt || 'N/A',
    netIncome: data.financialData?.netIncome?.fmt || 'N/A',
    totalNonCurrentAssets: data.financialData?.totalNonCurrentAssets?.fmt || 'N/A',
    discontinuedOperations: data.financialData?.discontinuedOperations?.fmt || 'N/A',
    netIncomeFromContinuingOperations: data.financialData?.netIncomeFromContinuingOperations?.fmt || 'N/A',
    operatingIncome: data.financialData?.operatingIncome?.fmt || 'N/A',
    totalOperatingExpenses: data.financialData?.totalOperatingExpenses?.fmt || 'N/A',
    otherOperatingExpenses: data.financialData?.otherOperatingExpenses?.fmt || 'N/A',
    totalLiab: data.financialData?.totalLiab?.fmt || 'N/A',
    totalStockholderEquity: data.financialData?.totalStockholderEquity?.fmt || 'N/A',
    netTangibleAssets: data.financialData?.netTangibleAssets?.fmt || 'N/A',
    netReceivables: data.financialData?.netReceivables?.fmt || 'N/A',
    longTermDebt: data.financialData?.longTermDebt?.fmt || 'N/A',
    inventory: data.financialData?.inventory?.fmt || 'N/A',
    accountsPayable: data.financialData?.accountsPayable?.fmt || 'N/A',
    totalPermanentEquity: data.financialData?.totalPermanentEquity?.fmt || 'N/A',
    additionalPaidInCapital: data.financialData?.additionalPaidInCapital?.fmt || 'N/A',
    commonStockTotalEquity: data.financialData?.commonStockTotalEquity?.fmt || 'N/A',
    preferredStockTotalEquity: data.financialData?.preferredStockTotalEquity?.fmt || 'N/A',
    retainedEarningsTotalEquity: data.financialData?.retainedEarningsTotalEquity?.fmt || 'N/A',
    treasuryStock: data.financialData?.treasuryStock?.fmt || 'N/A',
    dividenedsPayable: data.financialData?.dividenedsPayable?.fmt || 'N/A',
    commonStock: data.financialData?.commonStock?.fmt || 'N/A',
    repurchaseOfStock: data.financialData?.repurchaseOfStock?.fmt || 'N/A',
    otherLiab: data.financialData?.otherLiab?.fmt || 'N/A',
    goodwill: data.financialData?.goodwill?.fmt || 'N/A',
    otherAssets: data.financialData?.otherAssets?.fmt || 'N/A',
    cash: data.financialData?.cash?.fmt || 'N/A',
    targetHighPrice: data.financialData?.targetHighPrice?.fmt || 'N/A',
    targetLowPrice: data.financialData?.targetLowPrice?.fmt || 'N/A',
    targetMeanPrice: data.financialData?.targetMeanPrice?.fmt || 'N/A',
    targetMedianPrice: data.financialData?.targetMedianPrice?.fmt || 'N/A',
    currentQuarterEstimate: data.financialData?.currentQuarterEstimate?.fmt || 'N/A',
    currentQuarterEstimateDate: data.financialData?.currentQuarterEstimateDate?.fmt || 'N/A',
    currentQuarterEstimateYear: data.financialData?.currentQuarterEstimateYear?.fmt || 'N/A',
    earningsDate: data.financialData?.earningsDate?.fmt || 'N/A',
    totalCurrentLiabilities: data.financialData?.totalCurrentLiabilities?.fmt || 'N/A',
    deferredLongTermAssetCharges: data.financialData?.deferredLongTermAssetCharges?.fmt || 'N/A',
    shortLongTermDebt: data.financialData?.shortLongTermDebt?.fmt || 'N/A',
    otherStockholderEquity: data.financialData?.otherStockholderEquity?.fmt || 'N/A',
  };

  return stockData;
};

// Path: src\components\StockDataDisplay.js