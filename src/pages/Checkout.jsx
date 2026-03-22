import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Checkout = () => {
    const [email, setEmail] = useState("");
    const { cart, getTotalPrice, clearCart } = useCart();
    const navigate = useNavigate();
    const [paymentMethod, setPaymentMethod] = useState("cod");

    const handlePlaceOrder = (e) => {
        e.preventDefault();
        clearCart();
        navigate("/order-confirmation", { state: { userEmail: email } });
    };

    return (
        <div className="container py-5" style={{ minHeight: "80vh" }}>
            <div className="d-flex align-items-center mb-4">
                <h2 className="fw-bold m-0" style={{ color: "#006241" }}>CHECKOUT</h2>
                <div className="ms-3 flex-grow-1" style={{ height: "3px", backgroundColor: "#FECB00" }}></div>
            </div>

            <div className="row g-4">
                {/* Left: Forms */}
                <div className="col-lg-8">
                    <form onSubmit={handlePlaceOrder}>
                        {/* Shipping Section */}
                        <div className="card shadow-sm border-0 p-4 mb-4">
                            <h5 className="fw-bold mb-3" style={{ color: "#006241" }}>
                                <i className="fa-solid fa-truck-fast me-2"></i>Shipping Details
                            </h5>
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="First Name" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="Last Name" required />
                                </div>

                                {/* Email Field with @gmail.com constraint */}
                                <div className="col-12">
                                    <label className="small fw-bold mb-1 text-secondary">Email Address (Must be @gmail.com)</label>
                                    <input
                                        type="email"
                                        className="form-control"
                                        placeholder="tamaraw@gmail.com"
                                        required
                                        pattern=".+@gmail\.com$"
                                        title="Please use a valid @gmail.com address."
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </div>

                                <div className="col-12">
                                    <input type="text" className="form-control" placeholder="Complete Address (House No., Street, Brgy)" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="text" className="form-control" placeholder="City" required />
                                </div>
                                <div className="col-md-6">
                                    <input type="tel" className="form-control" placeholder="Phone Number (09XX...)" required />
                                </div>
                            </div>
                        </div>

                        {/* Payment Section */}
                        <div className="card shadow-sm border-0 p-4">
                            <h5 className="fw-bold mb-3" style={{ color: "#006241" }}>
                                <i className="fa-solid fa-wallet me-2"></i>Payment Method
                            </h5>

                            <div className="row g-2 mb-4 text-center">
                                {/* Payment Methods Mapping */}
                                {[
                                    { id: 'cod', icon: 'fa-hand-holding-dollar', label: 'COD', border: 'border-success' },
                                    { id: 'gcash', icon: 'fa-mobile-screen-button', label: 'GCash', border: 'border-primary' },
                                    { id: 'card', icon: 'fa-credit-card', label: 'Card', border: 'border-dark' },
                                    { id: 'maya', icon: 'fa-bolt', label: 'Maya', border: 'border-info' }
                                ].map((method) => (
                                    <div className="col-6 col-md-3" key={method.id}>
                                        <div
                                            className={`p-3 border rounded h-100 d-flex flex-column align-items-center justify-content-center ${paymentMethod === method.id ? `${method.border} bg-light shadow-sm` : ''}`}
                                            onClick={() => setPaymentMethod(method.id)}
                                            style={{ cursor: 'pointer', transition: '0.3s' }}
                                        >
                                            <i className={`fa-solid ${method.icon} mb-2 fs-4`}></i>
                                            <div className="small fw-bold">{method.label}</div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            {/* Dynamic Payment Fields */}
                            <div className="p-3 rounded bg-light border">
                                {paymentMethod === 'cod' && (
                                    <p className="m-0 text-muted small">
                                        <i className="fa-solid fa-circle-info me-2"></i>
                                        Pay in cash when your Tamaraw Merch arrives at your doorstep.
                                    </p>
                                )}
                                {paymentMethod === 'card' && (
                                    <div className="row g-2">
                                        <div className="col-12 mb-2">
                                            <label className="small fw-bold mb-1">Card Owner Name</label>
                                            <input type="text" className="form-control form-control-sm" placeholder="Full Name on Card" required />
                                        </div>
                                        <div className="col-12">
                                            <label className="small fw-bold mb-1">Card Details</label>
                                            <input type="text" className="form-control form-control-sm" placeholder="Card Number (16 digits)" required />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control form-control-sm" placeholder="MM/YY" required />
                                        </div>
                                        <div className="col-6">
                                            <input type="text" className="form-control form-control-sm" placeholder="CVV" required />
                                        </div>
                                    </div>
                                )}
                                {(paymentMethod === 'gcash' || paymentMethod === 'maya') && (
                                    <p className="m-0 text-muted small">
                                        Redirecting to secure <strong>{paymentMethod.toUpperCase()}</strong> portal after checkout.
                                    </p>
                                )}
                            </div>

                            <button type="submit" className="btn w-100 mt-4 py-3 fw-bold text-white shadow" style={{ backgroundColor: "#006241" }}>
                                CONFIRM ORDER (₱{getTotalPrice().toLocaleString()})
                            </button>
                        </div>
                    </form>
                </div>

                {/* Right: Summary */}
                <div className="col-lg-4">
                    <div className="card shadow-sm border-0 p-4 sticky-top" style={{ top: "100px" }}>
                        <h5 className="fw-bold mb-3" style={{ color: "#006241" }}>Your Order</h5>
                        {cart.map((item) => (
                            <div key={item.id} className="d-flex justify-content-between mb-2 small">
                                <span>{item.quantity}x {item.name}</span>
                                <span className="fw-bold">₱{(item.price * item.quantity).toLocaleString()}</span>
                            </div>
                        ))}
                        <hr />
                        <div className="d-flex justify-content-between fw-bold fs-5 mb-0">
                            <span>Total</span>
                            <span style={{ color: "#006241" }}>₱{getTotalPrice().toLocaleString()}</span>
                        </div>
                        <p className="text-muted extra-small mt-2" style={{ fontSize: "0.75rem" }}>
                            *Free shipping for FEU campus deliveries.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Checkout;