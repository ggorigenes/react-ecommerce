import React from 'react';
import { useParams, Link } from 'react-router-dom';

const SingleProduct = () => {
    const { id } = useParams();

    const product = {
        name: "FEU Dri-Fit Football Kit",
        oldPrice: 1600,
        price: 1250,
        discount: 25,
        rating: 4,
        image: "/src/assets/images/product1.webp"
    };

    return (
        <div className="container my-5">
            <nav aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/">Home</Link></li>
                    <li className="breadcrumb-item"><Link to="/products">Products</Link></li>
                    <li className="breadcrumb-item active">{product.name}</li>
                </ol>
            </nav>

            <div className="row">
                {/* Product Image Section */}
                <div className="col-md-6 mb-4">
                    <div className="card shadow-sm">
                        <div className="product-img-wrapper overflow-hidden">
                             <img 
                                src={product.image} 
                                className="img-fluid product-img w-100" 
                                alt={product.name} 
                            />
                        </div>
                    </div>
                </div>

                {/* Product Details Section */}
                <div className="col-md-6">
                    <span className="badge bg-danger mb-2">FLASH SALE</span>
                    <h2 className="display-5 fw-bold">{product.name}</h2>
                    
                    <div className="text-warning mb-3">
                        {[...Array(product.rating)].map((_, i) => (
                            <i key={i} className="fa-solid fa-star"></i>
                        ))}
                        <span className="text-muted ms-2">(ID: {id})</span>
                    </div>

                    <div className="d-flex align-items-center mb-3">
                        <h3 className="text-primary fw-bold mb-0">₱{product.price}</h3>
                        <span className="text-muted text-decoration-line-through ms-3">
                            ₱{product.oldPrice}
                        </span>
                    </div>

                    <p className="lead text-secondary">
                        {product.description}
                    </p>

                    <hr />

                    <div className="d-grid gap-2 d-md-block">
                        <button className="btn btn-primary btn-lg px-5 me-md-2" type="button">
                            <i className="fa-solid fa-cart-plus me-2"></i>Add to Cart
                        </button>
                        <button className="btn btn-outline-secondary btn-lg px-5" type="button">
                            <i className="fa-solid fa-heart me-2"></i>Wishlist
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingleProduct;