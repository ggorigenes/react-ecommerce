import React from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm }) => {
  const location = useLocation();
  const isProductsPage = location.pathname === '/products';

  return (
    <header className="bg-feu-dark header-divider pt-2 pb-4 pb-md-2">
      <div className="container">
        <div className="row align-items-center g-2">

          {/* 1. Left: Branding (Logo + Name) */}
          <div className="col-8 col-md-3">
            <Link to="/" className="d-flex align-items-center text-decoration-none">
              <img
                src="/logo.png"
                alt="G&G Collective"
                className="store-logo"
                style={{ height: '45px', width: 'auto' }}
              />
              <span className="brand-name ms-2">
                G&G COLLECTIVE
              </span>
            </Link>
          </div>

          {/* 2. Center: Search Bar OR Motto (Desktop Only) */}
          <div className="col-md-6 d-none d-md-block text-center">
            {isProductsPage ? (
              <div className="search-wrapper">
                <input
                  type="text"
                  className="form-control search-bar-premium"
                  placeholder="FIND YOUR STYLE..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            ) : (
              <div className="motto-text text-feu-gold fw-bold letter-spacing-2">
                BE BRAVE
              </div>
            )}
          </div>

          {/* 3. Right: Est. Tag & Location */}
          <div className="col-4 col-md-3 text-end">
            <div className="motto-text small fw-bold">
              EST. <span className="text-white">1928</span>
            </div>
            <div className="text-white-50 x-small fw-light" style={{ fontSize: '0.65rem' }}>
              Manila, Philippines
            </div>
          </div>

          {/* 4. Mobile Search Bar (Only on Products Page) */}
          {isProductsPage && (
            <div className="col-12 d-block d-md-none mt-3">
              <div className="search-wrapper">
                <input
                  type="text"
                  className="form-control search-bar-premium"
                  placeholder="FIND YOUR STYLE..."
                  style={{ color: 'white' }}
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          )}

        </div>
      </div>
    </header>
  );
};

export default Header;