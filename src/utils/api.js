const API_KEY = '0rD6UyDj8jmshLwoCdZCWBgBf6pIp1UK2BBjsnb2kK9LFosz4o'; // Replace with your API key

const api = {
  fetchStockData: async () => {
    const response = await fetch(
      'https://mboum-finance.p.rapidapi.com/mo/module/?symbol=AAPL&module=asset-profile%2Cfinancial-data%2Cearnings%2Ccashflow-statement%2Cbalance-sheet',
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
      symbol: data.symbol,
      price: data.price,
      change: data.change,
      // Extract additional stock data properties as needed
    };

    return stockData;
  }
};