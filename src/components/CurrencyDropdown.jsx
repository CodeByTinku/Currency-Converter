import { useState } from 'react';
import { ChevronDown, Search } from 'lucide-react';
import { currencies, filterCurrencies } from '../utils/currencyData';

/**
 * Currency dropdown component with search functionality
 * @param {object} props - Component props
 * @param {string} props.value - Selected currency code
 * @param {function} props.onChange - Change handler
 * @param {string} props.label - Dropdown label
 */
export default function CurrencyDropdown({ value, onChange, label }) {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const selectedCurrency = currencies.find(c => c.code === value);
  const filteredCurrencies = filterCurrencies(searchQuery);

  const handleSelect = (currency) => {
    onChange(currency.code);
    setIsOpen(false);
    setSearchQuery('');
  };

  return (
    <div className="relative">
      {label && (
        <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
          {label}
        </label>
      )}
      
      {/* Dropdown Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="w-full bg-white dark:bg-gray-800 border-2 border-gray-300 dark:border-gray-600 rounded-xl px-4 py-3 flex items-center justify-between hover:border-blue-500 dark:hover:border-blue-400 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
      >
        <div className="flex items-center gap-3">
          <span className="text-2xl">{selectedCurrency?.flag}</span>
          <div className="text-left">
            <div className="font-semibold text-gray-900 dark:text-white">
              {selectedCurrency?.code}
            </div>
            <div className="text-xs text-gray-500 dark:text-gray-400">
              {selectedCurrency?.name}
            </div>
          </div>
        </div>
        <ChevronDown
          className={`w-5 h-5 text-gray-500 dark:text-gray-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 z-10"
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu Content */}
          <div className="absolute z-20 w-full mt-2 bg-white dark:bg-gray-800 border-2 border-gray-200 dark:border-gray-700 rounded-xl shadow-xl max-h-80 overflow-hidden animate-fade-in">
            {/* Search Input */}
            <div className="p-3 border-b border-gray-200 dark:border-gray-700">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search currency..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2 bg-gray-50 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                  onClick={(e) => e.stopPropagation()}
                />
              </div>
            </div>

            {/* Currency List */}
            <div className="overflow-y-auto max-h-60">
              {filteredCurrencies.length > 0 ? (
                filteredCurrencies.map((currency) => (
                  <button
                    key={currency.code}
                    onClick={() => handleSelect(currency)}
                    className={`w-full px-4 py-3 flex items-center gap-3 hover:bg-blue-50 dark:hover:bg-gray-700 transition-colors duration-150 ${
                      currency.code === value
                        ? 'bg-blue-100 dark:bg-gray-700'
                        : ''
                    }`}
                  >
                    <span className="text-2xl">{currency.flag}</span>
                    <div className="text-left flex-1">
                      <div className="font-medium text-gray-900 dark:text-white">
                        {currency.code}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {currency.name}
                      </div>
                    </div>
                    {currency.code === value && (
                      <div className="w-2 h-2 bg-blue-500 rounded-full" />
                    )}
                  </button>
                ))
              ) : (
                <div className="px-4 py-8 text-center text-gray-500 dark:text-gray-400">
                  No currencies found
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
