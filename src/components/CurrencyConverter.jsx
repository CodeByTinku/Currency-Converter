import { useEffect } from 'react';
import { ArrowLeftRight, RefreshCw, AlertCircle } from 'lucide-react';
import CurrencyDropdown from './CurrencyDropdown';
import { useCurrencyConverter } from '../hooks/useCurrencyConverter';
import { useLocalStorage } from '../hooks/useLocalStorage';
import { formatCurrency } from '../utils/currencyData';

/**
 * Main currency converter component
 */
export default function CurrencyConverter() {
  const {
    fromCurrency,
    toCurrency,
    amount,
    convertedAmount,
    exchangeRate,
    loading,
    error,
    lastUpdated, 
    setFromCurrency,
    setToCurrency,
    setAmount,
    convert,
    swapCurrencies,
    reset,
    loadLastConversion,
  } = useCurrencyConverter();

  // Load last conversion from localStorage on mount
  const [lastConversion] = useLocalStorage('lastConversion', null);

  useEffect(() => {
    if (lastConversion) {
      loadLastConversion(lastConversion);
    }
  }, []); // Empty dependency array - only run on mount

  const handleAmountChange = (e) => {
    const value = e.target.value;
    // Allow only numbers and decimal point
    if (value === '' || /^\d*\.?\d*$/.test(value)) {
      setAmount(value);
    }
  };

  const handleConvert = (e) => {
    e.preventDefault();
    convert();
  };

  return (
    <div className="w-full max-w-2xl mx-auto animate-fade-in">
      {/* Main Card */}
      <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 border border-gray-200 dark:border-gray-700">
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Currency Converter
          </h1>
          <p className="text-gray-600 dark:text-gray-400">
            Convert between different currencies with live exchange rates
          </p>
        </div>

        <form onSubmit={handleConvert} className="space-y-6">
          {/* Amount Input */}
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
              Amount
            </label>
            <input
              type="text"
              value={amount}
              onChange={handleAmountChange}
              placeholder="Enter amount"
              className="w-full bg-gray-50 dark:bg-gray-700 border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 text-lg font-semibold text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
            />
          </div>

          {/* From Currency */}
          <CurrencyDropdown
            label="From"
            value={fromCurrency}
            onChange={setFromCurrency}
          />

          {/* Swap Button */}
          <div className="flex justify-center -my-2">
            <button
              type="button"
              onClick={swapCurrencies}
              className="p-3 bg-blue-500 hover:bg-blue-600 text-white rounded-full shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              aria-label="Swap currencies"
            >
              <ArrowLeftRight className="w-5 h-5" />
            </button>
          </div>

          {/* To Currency */}
          <CurrencyDropdown
            label="To"
            value={toCurrency}
            onChange={setToCurrency}
          />

          {/* Convert Button */}
          <button
            type="submit"
            disabled={loading || !amount}
            className="w-full bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 disabled:from-gray-400 disabled:to-gray-500 text-white font-semibold py-4 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:cursor-not-allowed disabled:hover:shadow-lg transform hover:scale-[1.02] active:scale-[0.98]"
          >
            {loading ? (
              <span className="flex items-center justify-center gap-2">
                <RefreshCw className="w-5 h-5 animate-spin" />
                Converting...
              </span>
            ) : (
              'Convert'
            )}
          </button>

          {/* Reset Button */}
          {(amount || convertedAmount) && (
            <button
              type="button"
              onClick={reset}
              className="w-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white font-medium py-2 transition-colors duration-200"
            >
              Reset
            </button>
          )}
        </form>

        {/* Error Message */}
        {error && (
          <div className="mt-6 p-4 bg-red-50 dark:bg-red-900/20 border-2 border-red-200 dark:border-red-800 rounded-xl flex items-start gap-3 animate-fade-in">
            <AlertCircle className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" />
            <div>
              <p className="text-red-800 dark:text-red-300 font-medium">
                Error
              </p>
              <p className="text-red-600 dark:text-red-400 text-sm mt-1">
                {error}
              </p>
            </div>
          </div>
        )}

        {/* Result Display */}
        {convertedAmount !== null && !error && (
          <div className="mt-6 p-6 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-gray-700 dark:to-gray-600 rounded-2xl border-2 border-blue-200 dark:border-gray-500 animate-fade-in">
            <div className="text-center">
              <p className="text-gray-600 dark:text-gray-300 text-sm mb-2">
                Converted Amount
              </p>
              <p className="text-4xl font-bold text-gray-900 dark:text-white mb-3">
                {formatCurrency(convertedAmount, toCurrency)} <span className="text-2xl">{toCurrency}</span>
              </p>
              {exchangeRate && (
                <div className="text-sm text-gray-600 dark:text-gray-400 space-y-1">
                  <p>
                    1 {fromCurrency} = {formatCurrency(exchangeRate, toCurrency)} {toCurrency}
                  </p>
                  {lastUpdated && (
                    <p className="text-xs">
                      Last updated: {new Date(lastUpdated).toLocaleString()}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        )}
      </div>

      {/* Info Footer */}
      <div className="mt-6 text-center text-sm text-gray-500 dark:text-gray-400">
        <p>Exchange rates are fetched in real-time from ExchangeRate-API</p>
      </div>
    </div>
  );
}
