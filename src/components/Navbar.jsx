import { NavLink, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext";

const Navbar = ({ setCategory, setSearchTerm }) => {
    const { cart } = useCart();
    const { wishlist } = useWishlist();
    const navigate = useNavigate();

    const totalQty = cart.reduce((sum, item) => sum + (item.quantity || 0), 0);

    const handleShopClick = () => {
        if (setCategory) setCategory("All");
        if (setSearchTerm) setSearchTerm("");
    };

    const handleMobileNavigate = (path, isShop = false) => {
        const menuElement = document.getElementById('mobileMenu');
        if (window.bootstrap && menuElement) {
            const bsOffcanvas = window.bootstrap.Offcanvas.getInstance(menuElement) || new window.bootstrap.Offcanvas(menuElement);
            bsOffcanvas.hide();
        }

        if (isShop) handleShopClick();

        navigate(path);
    };

    return (
        <>
            {/* DESKTOP NAVIGATION */}
            <nav className="navbar navbar-expand-lg bg-feu-green d-none d-lg-block shadow-sm border-top border-feu-gold py-1 sticky-top">
                <div className="container">
                    <div className="collapse navbar-collapse">
                        <ul className="navbar-nav mx-auto align-items-center">
                            <li className="nav-item">
                                <NavLink to="/" end className={({ isActive }) => isActive ? "nav-link active-link px-4 fw-bold text-feu-gold" : "nav-link text-white px-4"}>HOME</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink
                                    to="/products"
                                    onClick={handleShopClick}
                                    className={({ isActive }) => isActive ? "nav-link active-link px-4 fw-bold text-feu-gold" : "nav-link text-white px-4"}
                                >
                                    PRODUCTS
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/about" className={({ isActive }) => isActive ? "nav-link active-link px-4 fw-bold text-feu-gold" : "nav-link text-white px-4"}>ABOUT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/contact" className={({ isActive }) => isActive ? "nav-link active-link px-4 fw-bold text-feu-gold" : "nav-link text-white px-4"}>CONTACT</NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/terms" className={({ isActive }) => isActive ? "nav-link active-link px-4 fw-bold text-feu-gold" : "nav-link text-white px-4"}>TERMS</NavLink>
                            </li>

                            {/* Icons */}
                            <li className="nav-item ms-4">
                                <NavLink to="/cart" className="nav-link p-0 position-relative d-inline-block">
                                    <i className="fa fa-shopping-cart text-feu-gold fs-5"></i>
                                    {totalQty > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: "10px" }}>{totalQty}</span>}
                                </NavLink>
                            </li>
                            <li className="nav-item ms-4">
                                <NavLink to="/wishlist" className="nav-link p-0 position-relative d-inline-block">
                                    <i className="fa fa-heart text-feu-gold fs-5"></i>
                                    {wishlist.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger border border-light" style={{ fontSize: "10px" }}>{wishlist.length}</span>}
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* MOBILE BOTTOM NAVIGATION */}
            <nav className="navbar fixed-bottom bg-feu-green border-top border-feu-gold d-lg-none shadow-lg" style={{ zIndex: 2000, position: 'fixed', bottom: '0', top: 'auto', height: '65px' }}>
                <div className="container-fluid d-flex justify-content-around align-items-center h-100 px-0">
                    <NavLink to="/" end className={({ isActive }) => isActive ? "text-feu-gold text-decoration-none" : "text-white text-decoration-none"}><div className="d-flex flex-column align-items-center"><i className="fa fa-home fs-5"></i><span style={{ fontSize: "10px" }}>Home</span></div></NavLink>
                    <NavLink to="/products" onClick={handleShopClick} className={({ isActive }) => isActive ? "text-feu-gold text-decoration-none" : "text-white text-decoration-none"}><div className="d-flex flex-column align-items-center"><i className="fa fa-box fs-5"></i><span style={{ fontSize: "10px" }}>Shop</span></div></NavLink>
                    <NavLink to="/cart" className={({ isActive }) => isActive ? "text-feu-gold text-decoration-none" : "text-white text-decoration-none"}><div className="d-flex flex-column align-items-center position-relative"><i className="fa fa-shopping-cart fs-5"></i>{totalQty > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2" style={{ fontSize: "9px" }}>{totalQty}</span>}<span style={{ fontSize: "10px" }}>Cart</span></div></NavLink>
                    <NavLink to="/wishlist" className={({ isActive }) => isActive ? "text-feu-gold text-decoration-none" : "text-white text-decoration-none"}><div className="d-flex flex-column align-items-center position-relative"><i className="fa fa-heart fs-5"></i>{wishlist.length > 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger px-2" style={{ fontSize: "9px" }}>{wishlist.length}</span>}<span style={{ fontSize: "10px" }}>Wishlist</span></div></NavLink>

                    <button className="btn text-white border-0 p-0 shadow-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#mobileMenu">
                        <div className="d-flex flex-column align-items-center"><i className="fa fa-bars fs-5"></i><span style={{ fontSize: "10px" }}>Menu</span></div>
                    </button>
                </div>
            </nav>

            {/* --- ACTUAL HAMBURGER MENU CONTENT (OFFCANVAS) --- */}
            <div className="offcanvas offcanvas-start bg-feu-green text-white" tabIndex="-1" id="mobileMenu" aria-labelledby="mobileMenuLabel" style={{ width: '280px' }}>                <div className="offcanvas-header border-bottom border-feu-gold">
                <h5 className="offcanvas-title text-feu-gold fw-bold" id="mobileMenuLabel">G&G COLLECTIVE</h5>
                <button type="button" className="btn-close btn-close-white shadow-none" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
                <div className="offcanvas-body px-0">
                    <div className="list-group list-group-flush">
                        <div className="list-group-item list-group-item-action bg-transparent text-white border-0 py-3 px-4" style={{ cursor: 'pointer' }} onClick={() => handleMobileNavigate('/about')}>
                            <i className="fa fa-info-circle me-3 text-feu-gold"></i> About Us
                        </div>
                        <div className="list-group-item list-group-item-action bg-transparent text-white border-0 py-3 px-4" style={{ cursor: 'pointer' }} onClick={() => handleMobileNavigate('/contact')}>
                            <i className="fa fa-envelope me-3 text-feu-gold"></i> Contact
                        </div>
                        <div className="list-group-item list-group-item-action bg-transparent text-white border-0 py-3 px-4" style={{ cursor: 'pointer' }} onClick={() => handleMobileNavigate('/terms')}>
                            <i className="fa fa-file-contract me-3 text-feu-gold"></i> Terms & Conditions
                        </div>
                    </div>

                    <div className="mt-5 text-center">
                        <img
                            src="/logo.png"
                            alt="G&G Collective"
                            className="store-logo"
                            style={{ height: '40px', width: 'auto' }}
                        />
                        <p className="mt-2 x-small text-feu-gold opacity-50">TAMARAW PRIDE • EST. 1928</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;