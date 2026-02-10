# 💱 Currency Converter

<div align="center">

![Currency Converter](https://img.shields.io/badge/Currency-Converter-blue?style=for-the-badge)
![React](https://img.shields.io/badge/React-19.1.1-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.1.13-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-7.1.5-646CFF?style=for-the-badge&logo=vite&logoColor=white)

A modern, responsive **currency converter** application built with React and TailwindCSS. Convert between 34+ world currencies with real-time exchange rates, featuring a beautiful UI with dark mode support.


</div>

---

## ✨ Features

### Core Functionality
- 🌍 **34+ Currencies** - Support for all major world currencies
- 🎌 **Flag Emojis** - Visual currency identification with country flags
- 🔍 **Searchable Dropdowns** - Quick currency search and selection
- 💱 **Real-time Rates** - Live exchange rates from ExchangeRate-API
- ⚡ **Instant Conversion** - Fast and accurate currency conversion
- 🔄 **Swap Currencies** - One-click currency swap with smooth animation
- 📊 **Exchange Rate Display** - Shows current rate and last update time

### UI/UX Excellence
- 🌙 **Dark/Light Mode** - Toggle between themes with persistence
- 📱 **Fully Responsive** - Works perfectly on mobile, tablet, and desktop
- 🎨 **Modern Design** - Gradient backgrounds with glassmorphism effects
- ✨ **Smooth Animations** - Fade-in effects and animated blob backgrounds
- 🎯 **User-Friendly** - Clean interface with intuitive controls
- ⚠️ **Error Handling** - Clear error messages for network issues
- 💾 **LocalStorage** - Remembers last conversion and theme preference

---

## 🖼️ Screenshots
![image cann't loading!](<Screenshot 2026-02-08 212450.png>)

### Light Mode
Beautiful gradient interface with clean design

### Dark Mode
Eye-friendly dark theme for night-time use

### Mobile Responsive
Optimized layout for all screen sizes

---

## 🚀 Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Setup

1. **Clone the repository**
   ```bash
   git clone <your-repo-url>
   cd currencyConvertor
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open in browser**
   ```
   Navigate to http://localhost:5173
   ```

---

## 📖 Usage

### Basic Conversion

1. **Enter Amount** - Type the amount you want to convert
2. **Select Source Currency** - Choose the currency you're converting from (e.g., USD)
3. **Select Target Currency** - Choose the currency you're converting to (e.g., EUR)
4. **Click Convert** - Get instant conversion results
5. **View Results** - See converted amount with exchange rate

### Additional Features

- **Swap Currencies** - Click the ↔️ button to quickly swap source/target currencies
- **Toggle Dark Mode** - Click the 🌙/☀️ icon in top-right corner
- **Search Currencies** - Use the search box in dropdowns to find currencies quickly
- **Auto-save** - Your last conversion is automatically saved and restored on page reload

---

## 🛠️ Tech Stack

### Frontend Framework
- **React 19.1.1** - Modern UI library with hooks
- **Vite 7.1.5** - Lightning-fast build tool and dev server

### Styling
- **TailwindCSS 4.1.13** - Utility-first CSS framework
- **Custom CSS** - Keyframe animations and transitions

### API & Data
- **ExchangeRate-API** - Real-time currency exchange rates
- **Axios** - HTTP client for API requests

### Icons & UI
- **Lucide React** - Beautiful, consistent icon set

### Development
- **ESLint** - Code quality and consistency
- **Hot Module Replacement (HMR)** - Instant updates during development

---

## 📁 Project Structure

```
currencyConvertor/
├── src/
│   ├── components/
│   │   ├── CurrencyConverter.jsx    # Main converter component
│   │   ├── CurrencyDropdown.jsx     # Searchable currency selector
│   │   └── ThemeToggle.jsx          # Dark mode toggle
│   ├── hooks/
│   │   ├── useCurrencyConverter.js  # Conversion logic
│   │   └── useLocalStorage.js       # LocalStorage persistence
│   ├── utils/
│   │   ├── currencyData.js          # Currency data & formatters
│   │   └── api.js                   # API integration
│   ├── App.jsx                      # Main app component
│   ├── index.css                    # Global styles & animations
│   └── main.jsx                     # Entry point
├── public/                          # Static assets
├── index.html                       # HTML template
├── package.json                     # Dependencies
├── vite.config.js                   # Vite configuration
└── README.md                        # This file
```

---

## 🌍 Supported Currencies

The app supports **34 major world currencies**:

🇺🇸 USD • 🇪🇺 EUR • 🇬🇧 GBP • 🇯🇵 JPY • 🇦🇺 AUD • 🇨🇦 CAD • 🇨🇭 CHF • 🇨🇳 CNY • 🇮🇳 INR • 🇲🇽 MXN • 🇧🇷 BRL • 🇿🇦 ZAR • 🇷🇺 RUB • 🇰🇷 KRW • 🇸🇬 SGD • 🇭🇰 HKD • 🇳🇴 NOK • 🇸🇪 SEK • 🇩🇰 DKK • 🇳🇿 NZD • 🇹🇷 TRY • 🇦🇪 AED • 🇸🇦 SAR • 🇹🇭 THB • 🇲🇾 MYR • 🇮🇩 IDR • 🇵🇭 PHP • 🇵🇱 PLN • 🇨🇿 CZK • 🇭🇺 HUF • 🇮🇱 ILS • 🇨🇱 CLP • 🇦🇷 ARS • 🇪🇬 EGP

---

### Modify API Endpoint
Update `src\utils\api.js` to change the API provider:
```javascript
const API_BASE_URL = 'your-api-url-here';
```

---

## 📊 Performance

- ⚡ **Fast Initial Load** - Optimized bundle size
- 🔄 **Efficient Re-renders** - React hooks optimization
- 💾 **Smart Caching** - Reduced API calls
- 📱 **Mobile Optimized** - Touch-friendly interface

---

## 🐛 Known Issues & Solutions

### Issue: Dark mode not working?
**Solution:** Hard refresh the page (Ctrl + Shift + R) after first load.

### Issue: API rate limit reached?
**Solution:** Cached rates are used. Wait 1 hour or the cache clears automatically.

### Issue: Conversion not working?
**Solution:** Check internet connection. API requires active connection.

---

## 🚀 Build for Production

```bash
# Build optimized production bundle
npm run build

# Preview production build locally
npm run preview
```

The production build will be in the `dist/` folder.

---

## 📦 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist/` folder to [Netlify](https://app.netlify.com/drop)

### Deploy to GitHub Pages
Use [gh-pages](https://www.npmjs.com/package/gh-pages) package or GitHub Actions.

---

## 🤝 Contributing

Contributions are welcome! Feel free to:
- 🐛 Report bugs
- 💡 Suggest new features
- 🔧 Submit pull requests


---

## 👨‍💻 Developer

Built with ❤️ using React, TailwindCSS, and ExchangeRate-API

---



<div align="center">

### ⭐ Star this repo if you found it helpful!

Made with 💱 and ☕

</div>
