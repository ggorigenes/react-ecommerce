import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import './index.css';
import './App.css';

import { registerSW } from 'virtual:pwa-register'
registerSW({ onNeedRefresh() {}, onOfflineReady() {} })

import { ComparisonProvider } from './context/ComparisonContext';
import { RecentlyViewedProvider } from './context/RecentlyViewedContext';
import CartProvider from './context/CartContext'; 
import WishlistProvider from './context/WishlistContext';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <ComparisonProvider>
      <RecentlyViewedProvider>
        <WishlistProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </WishlistProvider>
      </RecentlyViewedProvider>
    </ComparisonProvider>
  </StrictMode>,
)