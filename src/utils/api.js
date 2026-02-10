import axios from 'axios';

// Using ExchangeRate-API free tier
const API_BASE_URL = 'https://api.exchangerate-api.com/v4/latest';

// Cache configuration
const CACHE_DURATION = 60 * 60 * 1000; // 1 hour in milliseconds
let ratesCache = {
  data: null,
  timestamp: null,
  baseCurrency: null,
};

/**
 * Fetch exchange rates for a base currency
 * @param {string} baseCurrency - The base currency code
 * @returns {Promise<object>} Exchange rates data
 */
export const fetchExchangeRates = async (baseCurrency = 'USD') => {
  try {
    // Check cache first
    const now = Date.now();
    if (
      ratesCache.data &&
      ratesCache.baseCurrency === baseCurrency &&
      now - ratesCache.timestamp < CACHE_DURATION
    ) {
      console.log('Using cached exchange rates');
      return ratesCache.data;
    }

    // Fetch fresh data
    console.log(`Fetching exchange rates for ${baseCurrency}`);
    const response = await axios.get(`${API_BASE_URL}/${baseCurrency}`, {
      timeout: 10000, // 10 second timeout
    });

    // Update cache
    ratesCache = {
      data: response.data,
      timestamp: now,
      baseCurrency: baseCurrency,
    };

    return response.data;
  } catch (error) {
    // Handle specific error types
    if (error.code === 'ECONNABORTED') {
      throw new Error('Request timeout. Please check your internet connection.');
    } else if (error.response) {
      // Server responded with error
      throw new Error(`API Error: ${error.response.status} - ${error.response.statusText}`);
    } else if (error.request) {
      // Request made but no response
      throw new Error('No response from server. Please check your internet connection.');
    } else {
      // Something else happened
      throw new Error('An unexpected error occurred. Please try again.');
    }
  }
};

/**
 * Convert amount from one currency to another
 * @param {number} amount - Amount to convert
 * @param {string} fromCurrency - Source currency code
 * @param {string} toCurrency - Target currency code
 * @returns {Promise<object>} Conversion result with converted amount and rate
 */
export const convertCurrency = async (amount, fromCurrency, toCurrency) => {
  try {
    const data = await fetchExchangeRates(fromCurrency);
    
    if (!data.rates || !data.rates[toCurrency]) {
      throw new Error(`Exchange rate not found for ${toCurrency}`);
    }

    const rate = data.rates[toCurrency];
    const convertedAmount = amount * rate;

    return {
      convertedAmount,
      rate,
      timestamp: data.time_last_updated || new Date().toISOString(),
    };
  } catch (error) {
    throw error;
  }
};

/**
 * Clear the rates cache (useful for forcing fresh data)
 */
export const clearCache = () => {
  ratesCache = {
    data: null,
    timestamp: null,
    baseCurrency: null,
  };
  console.log('Exchange rates cache cleared');
};
