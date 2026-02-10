import { useState, useCallback } from 'react';
import { convertCurrency } from '../utils/api';
import { useLocalStorage } from './useLocalStorage';

/**
 * Custom hook for currency conversion logic
 * @returns {object} Conversion state and methods
 */
export const useCurrencyConverter = () => {
  // State
  const [fromCurrency, setFromCurrency] = useState('USD');
  const [toCurrency, setToCurrency] = useState('EUR');
  const [amount, setAmount] = useState('');
  const [convertedAmount, setConvertedAmount] = useState(null);
  const [exchangeRate, setExchangeRate] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [lastUpdated, setLastUpdated] = useState(null);

  // Save last conversion to localStorage
  const [, setLastConversion] = useLocalStorage('lastConversion', null);

  /**
   * Perform currency conversion
   */
  const convert = useCallback(async () => {
    // Validate input
    if (!amount || isNaN(amount) || parseFloat(amount) <= 0) {
      setError('Please enter a valid amount');
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const result = await convertCurrency(
        parseFloat(amount),
        fromCurrency,
        toCurrency
      );

      setConvertedAmount(result.convertedAmount);
      setExchangeRate(result.rate);
      setLastUpdated(result.timestamp);

      // Save to localStorage
      setLastConversion({
        fromCurrency,
        toCurrency,
        amount,
        convertedAmount: result.convertedAmount,
        rate: result.rate,
        timestamp: new Date().toISOString(),
      });
    } catch (err) {
      setError(err.message);
      setConvertedAmount(null);
      setExchangeRate(null);
    } finally {
      setLoading(false);
    }
  }, [amount, fromCurrency, toCurrency, setLastConversion]);

  /**
   * Swap source and target currencies
   */
  const swapCurrencies = useCallback(() => {
    setFromCurrency(toCurrency);
    setToCurrency(fromCurrency);
    
    // If there's a converted amount, swap the amounts too
    if (convertedAmount !== null && amount) {
      setAmount(convertedAmount.toString());
      setConvertedAmount(parseFloat(amount));
      
      // Update exchange rate to inverse
      if (exchangeRate) {
        setExchangeRate(1 / exchangeRate);
      }
    }
  }, [fromCurrency, toCurrency, amount, convertedAmount, exchangeRate]);

  /**
   * Reset all values
   */
  const reset = useCallback(() => {
    setAmount('');
    setConvertedAmount(null);
    setExchangeRate(null);
    setError(null);
    setLastUpdated(null);
  }, []);

  /**
   * Load last conversion from localStorage
   */
  const loadLastConversion = useCallback((lastConversion) => {
    if (lastConversion) {
      setFromCurrency(lastConversion.fromCurrency);
      setToCurrency(lastConversion.toCurrency);
      setAmount(lastConversion.amount);
      setConvertedAmount(lastConversion.convertedAmount);
      setExchangeRate(lastConversion.rate);
    }
  }, []);

  return {
    // State
    fromCurrency,
    toCurrency,
    amount,
    convertedAmount,
    exchangeRate,
    loading,
    error,
    lastUpdated,
    
    // Setters
    setFromCurrency,
    setToCurrency,
    setAmount,
    
    // Methods
    convert,
    swapCurrencies,
    reset,
    loadLastConversion,
  };
};
