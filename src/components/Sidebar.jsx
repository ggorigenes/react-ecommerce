import React, { useState, useEffect } from "react";
import { useRecent } from "../context/RecentlyViewedContext";

const Sidebar = ({ setSelectedCategory, selectedCategory }) => {
    const [categories, setCategories] = useState([]);
    const { recentProducts } = useRecent();

    useEffect(() => {
        fetch("https://ecommerce-backend-vie1.onrender.com/api/products")
            .then(res => {
                if (!res.ok) throw new Error("Server error");
                return res.json();
            })
            .then(data => {
                if (Array.isArray(data)) {
                    setCategories(data);
                }
            })
            .catch(err => {
                console.error("Sidebar Error:", err);
                setCategories(["All", "Clothing", "Accessories", "Electronics"]);
            });
    }, []);

    const handleCategoryClick = (categoryName) => {
        if (selectedCategory === categoryName) {
            setSelectedCategory("");
        } else {
            setSelectedCategory(categoryName);
        }
    };

    return (
        <div className="sidebar-wrapper sticky-top" style={{ top: "90px" }}>
            {/* Category Card */}
            <div className="card p-3 shadow-sm border-0 mb-4" style={{ borderRadius: "12px" }}>
                <h5 className="fw-bold mb-3" style={{ color: "#006241", fontSize: "1rem" }}>CATEGORIES</h5>
                <ul className="list-group list-group-flush">
                    {categories.map((cat, index) => (
                        <li key={index} className="list-group-item ps-0 border-0 py-1">
                            <button
                                onClick={() => handleCategoryClick(cat)}
                                className="btn btn-link p-0 text-decoration-none transition-all"
                                style={{
                                    color: selectedCategory === cat ? "#006241" : "#6c757d",
                                    fontWeight: selectedCategory === cat ? "bold" : "500",
                                    fontSize: "0.95rem"
                                }}
                            >
                                {selectedCategory === cat && <i className="fa-solid fa-chevron-right me-2 small"></i>}
                                {cat}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>

            {/* Recently Viewed Widget */}
            {recentProducts.length > 0 && (
                <div className="card p-3 shadow-sm border-0" style={{ borderRadius: "12px" }}>
                    <h6 className="fw-bold mb-3 text-muted shadow-none" style={{ fontSize: "0.8rem", letterSpacing: "1px" }}>
                        <i className="fa-solid fa-clock-rotate-left me-2"></i>RECENTLY VIEWED
                    </h6>
                    <div className="d-flex flex-column gap-3">
                        {recentProducts.map((product) => (
                            <div key={`side-recent-${product.id}`} className="d-flex align-items-center gap-2 pb-2 border-bottom border-light last-child-border-0">
                                <div
                                    className="bg-light rounded d-flex align-items-center justify-content-center"
                                    style={{ width: "45px", height: "45px", flexShrink: 0 }}
                                >
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        style={{ maxWidth: "35px", maxHeight: "35px", objectFit: "contain" }}
                                    />
                                </div>
                                <div className="overflow-hidden">
                                    <p className="mb-0 fw-bold text-truncate" style={{ fontSize: "0.8rem", color: "#333" }} title={product.name}>
                                        {product.name}
                                    </p>
                                    <p className="mb-0 fw-bold" style={{ fontSize: "0.75rem", color: "#006241" }}>
                                        ₱{Number(product.price).toLocaleString()}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
};

export default Sidebar;