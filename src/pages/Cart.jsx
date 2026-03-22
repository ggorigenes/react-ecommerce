import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { cart, removeFromCart, increaseQty, decreaseQty, getTotalPrice } = useCart();

    const formatPrice = (value) => {
        return Number(value).toLocaleString('en-PH', {
            minimumFractionDigits: 2,
            maximumFractionDigits: 2
        });
    };

    const feuGreen = "#006241";
    const feuGold = "#FECB00";

    return (
        <div className="container my-5" style={{ minHeight: "70vh" }}>
            <div className="d-flex align-items-center mb-4">
                <h2 className="fw-bold m-0" style={{ color: feuGreen }}>🛒 SHOPPING CART</h2>
                <div className="ms-3 flex-grow-1" style={{ height: "3px", backgroundColor: feuGold }}></div>
            </div>

            {cart.length === 0 ? (
                <div className="text-center py-5 bg-light rounded shadow-sm border">
                    <i className="fa-solid fa-cart-shopping mb-3 text-muted" style={{ fontSize: "4rem" }}></i>
                    <h4 className="text-muted">Your cart is empty, Tamaraw!</h4>
                    <p className="mb-4">Don't leave the stockroom empty-handed.</p>
                    <Link to="/products" className="btn btn-success px-4 py-2 fw-bold" style={{ backgroundColor: feuGreen, border: "none" }}>
                        Start Shopping
                    </Link>
                </div>
            ) : (
                <>
                    {cart.map((item) => (
                        <div key={item.id} className="card mb-3 shadow-sm border-0 overflow-hidden" style={{ borderRadius: "12px" }}>
                            <div className="card-body p-0">
                                <div className="row g-0 align-items-center">
                                    {/* Product Image */}
                                    <div className="col-4 col-md-2 bg-light d-flex align-items-center justify-content-center p-2" style={{ minHeight: "120px" }}>
                                        <img
                                            src={item.image}
                                            alt={item.name}
                                            className="img-fluid rounded"
                                            style={{ maxHeight: "100px", objectFit: "contain" }}
                                        />
                                    </div>

                                    {/* Product Info */}
                                    <div className="col-8 col-md-4 p-3">
                                        <h5 className="fw-bold mb-1 text-dark">{item.name}</h5>
                                        <div className="text-muted small">
                                            ₱{formatPrice(item.price)} each
                                        </div>
                                    </div>

                                    {/* Quantity Controls */}
                                    <div className="col-6 col-md-3 p-3">
                                        <div className="d-flex align-items-center justify-content-center justify-content-md-start">
                                            <button
                                                onClick={() => decreaseQty(item.id)}
                                                className="btn btn-sm shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ backgroundColor: "#e9ecef", color: feuGreen, width: "32px", height: "32px", border: "none" }}
                                            >
                                                <i className="fas fa-minus"></i>
                                            </button>
                                            
                                            {/* Logic check: Defaults to 1 if quantity is missing */}
                                            <span className="mx-3 fw-bold" style={{ fontSize: "1.2rem" }}>
                                                {item.quantity || 1}
                                            </span>
                                            
                                            <button
                                                onClick={() => increaseQty(item.id)}
                                                className="btn btn-sm shadow-sm rounded-circle d-flex align-items-center justify-content-center"
                                                style={{ backgroundColor: feuGreen, color: "white", width: "32px", height: "32px", border: "none" }}
                                            >
                                                <i className="fas fa-plus"></i>
                                            </button>
                                        </div>
                                    </div>

                                    {/* Item Total & Remove */}
                                    <div className="col-6 col-md-3 p-3 text-end">
                                        <div className="fw-bold mb-2 fs-5" style={{ color: feuGreen }}>
                                            ₱{formatPrice((item.price || 0) * (item.quantity || 1))}
                                        </div>
                                        <button
                                            onClick={() => removeFromCart(item.id)}
                                            className="btn btn-link text-danger text-decoration-none fw-bold p-0 small"
                                        >
                                            <i className="fas fa-trash-alt me-1"></i> REMOVE
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}

                    {/* Summary Card */}
                    <div className="card shadow mt-4 border-0 rounded-4 overflow-hidden">
                        <div className="card-body p-4 d-flex flex-column flex-md-row justify-content-between align-items-center bg-white">
                            <div className="mb-3 mb-md-0">
                                <h3 className="fw-bold m-0">
                                    Grand Total: <span className="ms-2" style={{ color: "#dc3545" }}>₱{formatPrice(getTotalPrice())}</span>
                                </h3>
                                <p className="text-muted small m-0 mt-1">Shipping and taxes calculated at checkout.</p>
                            </div>
                            
                            <Link 
                                to="/checkout" 
                                className="btn btn-success btn-lg px-5 py-3 fw-bold shadow-sm"
                                style={{ backgroundColor: feuGreen, border: "none", borderRadius: "10px" }}
                            >
                                PROCEED TO CHECKOUT <i className="fa-solid fa-arrow-right ms-2"></i>
                            </Link>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Cart;