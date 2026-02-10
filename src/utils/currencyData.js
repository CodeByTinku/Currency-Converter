// Popular currencies with their codes, names, and flag emojis
export const currencies = [
  { code: 'USD', name: 'US Dollar', flag: '🇺🇸' },
  { code: 'EUR', name: 'Euro', flag: '🇪🇺' },
  { code: 'GBP', name: 'British Pound', flag: '🇬🇧' },
  { code: 'JPY', name: 'Japanese Yen', flag: '🇯🇵' },
  { code: 'AUD', name: 'Australian Dollar', flag: '🇦🇺' },
  { code: 'CAD', name: 'Canadian Dollar', flag: '🇨🇦' },
  { code: 'CHF', name: 'Swiss Franc', flag: '🇨🇭' },
  { code: 'CNY', name: 'Chinese Yuan', flag: '🇨🇳' },
  { code: 'INR', name: 'Indian Rupee', flag: '🇮🇳' },
  { code: 'MXN', name: 'Mexican Peso', flag: '🇲🇽' },
  { code: 'BRL', name: 'Brazilian Real', flag: '🇧🇷' },
  { code: 'ZAR', name: 'South African Rand', flag: '🇿🇦' },
  { code: 'RUB', name: 'Russian Ruble', flag: '🇷🇺' },
  { code: 'KRW', name: 'South Korean Won', flag: '🇰🇷' },
  { code: 'SGD', name: 'Singapore Dollar', flag: '🇸🇬' },
  { code: 'HKD', name: 'Hong Kong Dollar', flag: '🇭🇰' },
  { code: 'NOK', name: 'Norwegian Krone', flag: '🇳🇴' },
  { code: 'SEK', name: 'Swedish Krona', flag: '🇸🇪' },
  { code: 'DKK', name: 'Danish Krone', flag: '🇩🇰' },
  { code: 'NZD', name: 'New Zealand Dollar', flag: '🇳🇿' },
  { code: 'TRY', name: 'Turkish Lira', flag: '🇹🇷' },
  { code: 'AED', name: 'UAE Dirham', flag: '🇦🇪' },
  { code: 'SAR', name: 'Saudi Riyal', flag: '🇸🇦' },
  { code: 'THB', name: 'Thai Baht', flag: '🇹🇭' },
  { code: 'MYR', name: 'Malaysian Ringgit', flag: '🇲🇾' },
  { code: 'IDR', name: 'Indonesian Rupiah', flag: '🇮🇩' },
  { code: 'PHP', name: 'Philippine Peso', flag: '🇵🇭' },
  { code: 'PLN', name: 'Polish Zloty', flag: '🇵🇱' },
  { code: 'CZK', name: 'Czech Koruna', flag: '🇨🇿' },
  { code: 'HUF', name: 'Hungarian Forint', flag: '🇭🇺' },
  { code: 'ILS', name: 'Israeli Shekel', flag: '🇮🇱' },
  { code: 'CLP', name: 'Chilean Peso', flag: '🇨🇱' },
  { code: 'ARS', name: 'Argentine Peso', flag: '🇦🇷' },
  { code: 'EGP', name: 'Egyptian Pound', flag: '🇪🇬' },
];

/**
 * Format currency amount with proper decimal places
 * @param {number} amount - The amount to format
 * @param {string} currencyCode - The currency code
 * @returns {string} Formatted amount
 */
export const formatCurrency = (amount, currencyCode) => {
  if (isNaN(amount)) return '0.00';
  
  // Special formatting for currencies without decimal places
  const noDecimalCurrencies = ['JPY', 'KRW', 'IDR', 'VND'];
  const decimals = noDecimalCurrencies.includes(currencyCode) ? 0 : 2;
  
  return new Intl.NumberFormat('en-US', {
    minimumFractionDigits: decimals,
    maximumFractionDigits: decimals,
  }).format(amount);
};

/**
 * Get currency by code
 * @param {string} code - Currency code
 * @returns {object|null} Currency object or null
 */
export const getCurrencyByCode = (code) => {
  return currencies.find(currency => currency.code === code) || null;
};

/**
 * Filter currencies by search query
 * @param {string} query - Search query
 * @returns {array} Filtered currencies
 */
export const filterCurrencies = (query) => {
  if (!query) return currencies;
  
  const lowerQuery = query.toLowerCase();
  return currencies.filter(currency => 
    currency.code.toLowerCase().includes(lowerQuery) ||
    currency.name.toLowerCase().includes(lowerQuery)
  );
};
