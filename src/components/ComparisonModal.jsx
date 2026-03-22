import React, { useState } from 'react';
import { useCompare } from '../context/ComparisonContext';
import { useCart } from '../context/CartContext';

const ComparisonModal = () => {
    const { compareList, clearCompare } = useCompare();
    const { addToCart } = useCart();

    const [hoverClose, setHoverClose] = useState(false);

    if (compareList.length < 2) return null;

    const [p1, p2] = compareList;
    const feuGreen = "#006241";
    const feuGold = "#FECB00";

    const getStatus = (product) => {
        if (!product.inStock) return <span className="text-muted italic">By Reservation</span>;
        return <span className="text-success">Available</span>;
    };

    const SpecRow = ({ label, val1, val2, isLast = false }) => (
        <div className={`row py-3 align-items-center ${!isLast ? 'border-bottom' : ''}`} style={{ borderColor: '#eee' }}>
            <div className="col-4 text-muted small fw-bold text-uppercase" style={{ fontSize: '0.65rem', letterSpacing: '1px' }}>
                {label}
            </div>
            <div className="col-4 text-center fw-bold text-dark">{val1}</div>
            <div className="col-4 text-center fw-bold text-dark">{val2}</div>
        </div>
    );

    return (
        <div
            style={{
                position: "fixed",
                inset: 0,
                zIndex: 9999,
                isolation: "isolate" 
            }}
        >
            {/* Backdrop */}
            <div
                onClick={clearCompare}
                style={{
                    position: "absolute",
                    inset: 0,
                    background: "rgba(0,0,0,0.7)",
                    backdropFilter: "blur(8px)",
                }}
            />

            {/* Modal */}
            <div
                onClick={(e) => e.stopPropagation()}
                style={{
                    position: "absolute",
                    top: "50%",
                    left: "50%",
                    transform: "translate(-50%, -50%)",
                    width: "95%",
                    maxWidth: "750px",
                    maxHeight: "90vh",
                    background: "white",
                    borderRadius: "20px",
                    display: "flex",
                    flexDirection: "column",
                    overflow: "hidden",
                    zIndex: 10000
                }}
            >

                {/* Header */}
                <div
                    className="p-3 text-white d-flex justify-content-between align-items-center"
                    style={{
                        backgroundColor: feuGreen,
                        borderBottom: `4px solid ${feuGold}`,
                        flexShrink: 0
                    }}
                >
                    <div className="ps-2">
                        <h5 className="m-0 fw-black italic">TAMARAW MATCH-UP</h5>
                    </div>

                    {/* Close Button */}
                    <button
                        className="btn p-0 border-0"
                        onClick={(e) => {
                            e.stopPropagation();
                            clearCompare();
                        }}
                        onMouseEnter={() => setHoverClose(true)}
                        onMouseLeave={() => setHoverClose(false)}
                        style={{
                            cursor: 'pointer',
                            background: 'transparent',
                            border: 'none'
                        }}
                    >
                        <i
                            className="fa-solid fa-circle-xmark fs-4"
                            style={{
                                color: hoverClose ? feuGold : "#fff",
                                transform: hoverClose ? "scale(1.2)" : "scale(1)",
                                transition: "all 0.2s ease"
                            }}
                        ></i>
                    </button>
                </div>

                {/* Body */}
                <div className="p-4 overflow-auto" style={{ flexGrow: 1 }}>
                    <div className="row mb-4">
                        <div className="col-4"></div>

                        <div className="col-4 text-center">
                            <div className="bg-light rounded-4 p-3 mb-2 shadow-sm border d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                                <img src={p1.image} alt={p1.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                            </div>
                            <p className="small fw-black text-uppercase m-0" style={{ color: feuGreen }}>{p1.name}</p>
                        </div>

                        <div className="col-4 text-center">
                            <div className="bg-light rounded-4 p-3 mb-2 shadow-sm border d-flex align-items-center justify-content-center" style={{ height: '160px' }}>
                                <img src={p2.image} alt={p2.name} style={{ maxHeight: "100%", maxWidth: "100%", objectFit: "contain" }} />
                            </div>
                            <p className="small fw-black text-uppercase m-0" style={{ color: feuGreen }}>{p2.name}</p>
                        </div>
                    </div>

                    <div className="border rounded-4 px-3 bg-white">
                        <SpecRow label="Price" val1={`₱${Number(p1.price).toLocaleString()}`} val2={`₱${Number(p2.price).toLocaleString()}`} />
                        <SpecRow label="Category" val1={p1.category} val2={p2.category} />
                        <SpecRow label="Rating" val1={`${p1.rating || '4.5'} ⭐`} val2={`${p2.rating || '4.5'} ⭐`} />
                        <SpecRow label="Status" val1={getStatus(p1)} val2={getStatus(p2)} />
                        <SpecRow label="Product ID" val1={p1.id} val2={p2.id} isLast={true} />
                    </div>
                </div>

                {/* Footer */}
                <div className="p-4 bg-light border-top text-center" style={{ flexShrink: 0 }}>
                    <div className="row g-3">
                        <div className="col-4 d-none d-md-flex align-items-center justify-content-center">
                            <p className="text-muted m-0 italic fw-bold" style={{ fontSize: '10px' }}>LET'S GO TAMARAWS</p>
                        </div>

                        <div className="col-6 col-md-4">
                            <button
                                className="btn w-100 py-2 fw-bold rounded-3"
                                style={{ backgroundColor: feuGreen, border: 'none' }}
                                onClick={() => addToCart(p1)}
                            >
                                ADD TO CART
                            </button>
                        </div>

                        <div className="col-6 col-md-4">
                            <button
                                className="btn w-100 py-2 fw-bold rounded-3"
                                style={{ backgroundColor: feuGreen, border: 'none' }}
                                onClick={() => addToCart(p2)}
                            >
                                ADD TO CART
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default ComparisonModal;