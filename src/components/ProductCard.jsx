import React from 'react';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';
import { useRecent } from '../context/RecentlyViewedContext';
import { useCompare } from '../context/ComparisonContext';

const ProductCard = ({ product }) => {
    const { addToCart } = useCart();
    const { toggleWishlist, isInWishlist } = useWishlist();
    const { addRecentProduct } = useRecent();
    const { toggleCompare, compareList } = useCompare();
    const isComparing = compareList.some(item => item.id === product.id);

    const hasDiscount = Number(product.discount) > 0;

    const handleAddToCart = (e) => {
        e.preventDefault();
        e.stopPropagation();

        addToCart({
            ...product,
            price: Number(product.price),
            quantity: 1
        });
    };

    const handleToggleWishlist = (e) => {
        e.stopPropagation();
        toggleWishlist(product);
    };

    const handleViewProduct = () => {
        addRecentProduct(product);
    };

    return (
        <div
            className="card h-100 shadow-sm border-0 position-relative product-card-hover"
            style={{ cursor: 'pointer' }}
            onClick={handleViewProduct}
        >

            {/* Wishlist Heart Button */}
            <button
                onClick={handleToggleWishlist}
                className="btn-wishlist shadow-sm"
                aria-label="Toggle Wishlist"
                style={{
                    position: 'absolute',
                    top: '10px',
                    right: '10px',
                    zIndex: 10,
                    background: 'white',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}
            >
                <i className={isInWishlist(product.id) ? "fas fa-heart text-danger" : "far fa-heart text-muted"}></i>
            </button>
            
            <button
                onClick={(e) => { e.stopPropagation(); toggleCompare(product); }}
                className="shadow-sm"
                style={{
                    position: 'absolute',
                    top: '60px',
                    right: '10px',
                    zIndex: 10,
                    background: isComparing ? '#006241' : 'white',
                    color: isComparing ? 'white' : '#006241',
                    border: 'none',
                    borderRadius: '50%',
                    width: '35px',
                    height: '35px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    transition: '0.3s'
                }}
            >
                <i className="fa-solid fa-code-compare"></i>
            </button>

            <div className="product-img-wrapper" style={{ overflow: 'hidden' }}>
                {hasDiscount && (
                    <div className="sale-badge" style={{
                        position: 'absolute',
                        top: '10px',
                        left: '10px',
                        backgroundColor: '#FEBC11',
                        color: '#006241',
                        padding: '2px 8px',
                        fontWeight: 'bold',
                        borderRadius: '4px',
                        zIndex: 5
                    }}>
                        -{product.discount}%
                    </div>
                )}

                <img
                    src={product.image}
                    className="card-img-top product-img"
                    alt={product.name}
                    style={{ height: '200px', objectFit: 'contain', padding: '15px' }}
                />
            </div>

            <div className="card-body d-flex flex-column text-center align-items-center">
                <h6 className="card-title fw-bold text-dark mb-1">{product.name}</h6>

                <div className="mb-2">
                    {[...Array(5)].map((_, index) => (
                        <i
                            key={index}
                            className={`${index < Math.floor(product.rating || 0) ? 'fas' : 'far'} fa-star`}
                            style={{ color: "#FEBC11", fontSize: '0.8rem' }}
                        ></i>
                    ))}
                </div>

                <div className="mb-3 d-flex align-items-center justify-content-center gap-2">
                    {hasDiscount && product.oldPrice && (
                        <span className="text-muted text-decoration-line-through small">
                            ₱{Number(product.oldPrice).toLocaleString()}
                        </span>
                    )}
                    <span className="fw-bold fs-5" style={{ color: "#006241" }}>
                        ₱{Number(product.price).toLocaleString()}
                    </span>
                </div>

                <button
                    className="btn mt-auto d-flex align-items-center justify-content-center btn-feu py-2 w-100"
                    onClick={handleAddToCart}
                    style={{
                        backgroundColor: "#006241",
                        color: "white",
                        border: "none",
                        transition: "0.3s",
                        zIndex: 5
                    }}
                    onMouseOver={(e) => e.target.style.backgroundColor = "#004d33"}
                    onMouseOut={(e) => e.target.style.backgroundColor = "#006241"}
                >
                    <i className="fas fa-shopping-cart me-2"></i>
                    Add to Cart
                </button>
            </div>
        </div>
    );
};

export default ProductCard;