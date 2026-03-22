import React, { useContext } from 'react';
import { WishlistContext } from '../context/WishlistContext';
import ProductCard from '../components/ProductCard';
import { Link } from 'react-router-dom';

const Wishlist = () => {
    const { wishlist, clearWishlist } = useContext(WishlistContext);

    return (
        <div className="container min-vh-100 py-5">
            <div className="text-center mb-5 position-relative">
                <h2 className="fw-bold text-feu-dark">MY WISHLIST</h2>
                <div className="header-divider mx-auto" style={{ width: '80px', borderBottomWidth: '3px' }}></div>
                
                {wishlist.length > 0 && (
                    <button 
                        className="btn btn-outline-danger btn-sm mt-3"
                        onClick={() => {
                            if(window.confirm("Are you sure you want to clear your entire wishlist?")) {
                                clearWishlist();
                            }
                        }}
                    >
                        <i className="fas fa-trash-alt me-2"></i>
                        CLEAR ALL
                    </button>
                )}
                
                <p className="text-muted mt-3">Items you've marked with fortitude.</p>
            </div>

            {wishlist.length > 0 ? (
                <div className="row g-4">
                    {wishlist.map((product) => (
                        <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
                            <ProductCard product={product} />
                        </div>
                    ))}
                </div>
            ) : (
                <div className="text-center py-5 border rounded-4 bg-white shadow-sm">
                    <div className="mb-4">
                        <i className="far fa-heart fa-4x text-muted opacity-25"></i>
                    </div>
                    <h4 className="fw-bold text-secondary">Your wishlist is empty</h4>
                    <p className="text-muted mb-4">Looks like you haven't found your favorite gear yet.</p>
                    <Link to="/products" className="btn btn-feu px-5 py-2">
                        START SHOPPING
                    </Link>
                </div>
            )}
        </div>
    );
};

export default Wishlist;