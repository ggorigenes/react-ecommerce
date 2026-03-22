import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const OrderConfirmation = () => {
    const location = useLocation();
    
    const userEmail = location.state?.userEmail || "your email";

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const feuGreen = "#006241";
    const feuGold = "#FECB00";

    return (
        <div className="container py-5 d-flex align-items-center justify-content-center" style={{ minHeight: "80vh" }}>
            <div className="text-center p-5 shadow-lg rounded-4 bg-white border-top" style={{ maxWidth: "600px", borderTop: `10px solid ${feuGreen}` }}>
                
                {/* Success Icon */}
                <div className="mb-4">
                    <div className="display-1 text-success animate__animated animate__bounceIn">
                        <i className="fa-solid fa-circle-check"></i>
                    </div>
                </div>
                
                <h1 className="fw-bold mb-3" style={{ color: feuGreen }}>ORDER CONFIRMED!</h1>
                <p className="lead text-muted mb-4">
                    Thank you for your purchase, Tamaraw! Your gear is being prepared for the journey to your doorstep.
                </p>
                
                {/* Order Details Summary Box */}
                <div className="bg-light p-4 rounded-3 mb-4 text-start border">
                    <h6 className="fw-bold text-uppercase small mb-3" style={{ color: feuGreen, letterSpacing: "1px" }}>
                        What's Next?
                    </h6>
                    <div className="d-flex mb-3">
                        <div className="me-3 text-success"><i className="fa-solid fa-envelope"></i></div>
                        {/* 3. DYNAMIC EMAIL DISPLAY */}
                        <p className="small mb-0 text-secondary">
                            A confirmation receipt has been sent to <strong>{userEmail}</strong>.
                        </p>
                    </div>
                    <div className="d-flex mb-3">
                        <div className="me-3 text-success"><i className="fa-solid fa-box-open"></i></div>
                        <p className="small mb-0 text-secondary">We will notify you once your Tamaraw Merch has been dispatched.</p>
                    </div>
                    <div className="d-flex">
                        <div className="me-3 text-success"><i className="fa-solid fa-truck-ramp-box"></i></div>
                        <p className="small mb-0 text-secondary">Estimated Delivery: <strong>3-5 Business Days</strong> (Free for Campus Deliveries).</p>
                    </div>
                </div>

                {/* Action Buttons */}
                <div className="d-grid gap-2">
                    <Link to="/" className="btn btn-success py-3 fw-bold shadow-sm" style={{ backgroundColor: feuGreen, border: "none" }}>
                        RETURN TO HOME
                    </Link>
                    <Link to="/products" className="btn btn-outline-secondary py-2 border-0 small">
                        Continue Shopping
                    </Link>
                </div>
                
                <div className="mt-5 pt-3 border-top">
                    <p className="mb-0 fw-bold" style={{ color: feuGreen, fontStyle: "italic" }}>
                        Be Brave. Be Bold. Be FEU.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OrderConfirmation;