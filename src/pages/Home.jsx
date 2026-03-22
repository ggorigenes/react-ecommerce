import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import banner1 from "../assets/images/banner.jpg";
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const API_BASE = "http://localhost:5001";

    useEffect(() => {
        const carouselEl = document.querySelector('#feuBannerCarousel');
        if (carouselEl && window.bootstrap) {
            new window.bootstrap.Carousel(carouselEl, {
                interval: 3000,
                ride: 'carousel',
                pause: false
            });
        }

        fetch(`${API_BASE}/api/products`)
            .then((res) => res.json())
            .then((data) => {
                const sortedData = Array.isArray(data) 
                    ? data.sort((a, b) => b.rating - a.rating) 
                    : [];
                setProducts(sortedData);
                setLoading(false);
            })
            .catch(() => {
                setProducts([]);
                setLoading(false);
            });
    }, []);

    const categories = [
        { name: "Clothing" },
        { name: "Accessories" },
        { name: "Electronics" }
    ];

    return (
        <>
            {/* Banner Carousel */}
            <div className="position-relative w-100 overflow-hidden" style={{ maxHeight: '550px' }}>
                <div id="feuBannerCarousel" className="carousel slide carousel-fade">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#feuBannerCarousel" data-bs-slide-to="0" className="active"></button>
                        <button type="button" data-bs-target="#feuBannerCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#feuBannerCarousel" data-bs-slide-to="2"></button>
                    </div>

                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,98,65,0.5))', zIndex: 1 }}></div>
                            <img src={banner1} className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="FEU Banner" />
                        </div>
                        <div className="carousel-item">
                            <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,98,65,0.5))', zIndex: 1 }}></div>
                            <img src={`${API_BASE}/images/banner2.jpg`} className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="UAAP Gear" />
                        </div>
                        <div className="carousel-item">
                            <div className="overlay" style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(0,0,0,0.1), rgba(0,98,65,0.5))', zIndex: 1 }}></div>
                            <img src={`${API_BASE}/images/banner3.svg`} className="d-block w-100" style={{ height: '550px', objectFit: 'cover' }} alt="Tamaraw Pride" />
                        </div>
                    </div>

                    <div className="position-absolute top-50 start-50 translate-middle text-center text-white w-100" style={{ zIndex: 10 }}>
                        <h1 className="fw-black display-2 italic tracking-tighter" style={{ textShadow: '4px 4px 15px rgba(0,0,0,0.7)' }}>
                            WEAR THE <span style={{ color: '#FEBC11' }}>GREEN & GOLD</span>
                        </h1>
                        <p className="fs-4 fw-light mb-4">The Official Home of Tamaraw Merchandise</p>
                        <Link to="/products" className="btn btn-lg fw-bold px-5 py-3 shadow-lg hover-scale" style={{ backgroundColor: "#FEBC11", color: "#006241", borderRadius: '50px' }}>
                            EXPLORE COLLECTION
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mt-5">
                {/* Categories Section */}
                <div className="mb-5 text-center">
                    <h2 className="fw-bold mb-4" style={{ color: "#006241" }}>SHOP BY CATEGORY</h2>
                    <div className="d-flex justify-content-center gap-4 flex-wrap mt-3">
                        {categories.map(cat => (
                            <Link 
                                key={cat.name}
                                to={`/products?category=${cat.name}`} 
                                className="btn btn-outline-success border-2 px-4 py-2 fw-bold rounded-pill transition-all"
                                style={{ color: "#006241", borderColor: "#006241" }}
                            >
                                {cat.icon} {cat.name}
                            </Link>
                        ))}
                    </div>
                </div>

                {/* Featured Products */}
                {loading ? (
                    <div className="text-center py-5">
                        <div className="spinner-border" style={{ color: "#006241" }}></div>
                        <h5 className="mt-3" style={{ color: "#006241" }}>Assembling the Gear...</h5>
                    </div>
                ) : (
                    <>
                        <div className="d-flex justify-content-between align-items-end mb-4 border-bottom pb-3">
                            <div>
                                <h2 className="fw-black m-0" style={{ color: "#006241", letterSpacing: '-1px' }}>
                                    TOP PICKS FOR YOU
                                </h2>
                                <p className="text-muted m-0">Based on Tamaraw student ratings</p>
                            </div>
                            <Link to="/products" className="text-decoration-none fw-bold" style={{ color: "#006241" }}>
                                View All Products <i className="fa-solid fa-arrow-right ms-1"></i>
                            </Link>
                        </div>

                        <div className="row">
                            {products.length > 0 ? (
                                products.slice(0, 4).map((product) => (
                                    <div className="col-lg-3 col-md-4 col-sm-6 mb-4" key={product.id}>
                                        <ProductCard product={product} />
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <p className="text-muted fs-5 italic">G&G Collective are currently out of stock. Check back soon!</p>
                                </div>
                            )}
                        </div>
                    </>
                )}

                {/* Promo Banner / Why Choose Us */}
                <div className="mt-5 p-5 rounded-5 text-center text-white shadow-lg" style={{ backgroundColor: "#006241", backgroundImage: 'linear-gradient(45deg, #006241, #004d33)' }}>
                    <h2 className="fw-bold mb-5">WHY SHOP WITH G&G COLLECTIVE?</h2>
                    <div className="row g-4">
                        <div className="col-md-4">
                            <div className="bg-white text-dark p-4 rounded-4 h-100 shadow-sm border-top border-5 border-warning">
                                <i className="fa-solid fa-shield-halved fs-1 mb-3 text-success"></i>
                                <h5 className="fw-bold">100% Authentic</h5>
                                <p className="small text-muted mb-0">Every purchase supports our FEU student-athletes directly.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white text-dark p-4 rounded-4 h-100 shadow-sm border-top border-5 border-warning">
                                <i className="fa-solid fa-bolt fs-1 mb-3 text-success"></i>
                                <h5 className="fw-bold">Fast Fulfillment</h5>
                                <p className="small text-muted mb-0">On-campus pickup and quick delivery options available.</p>
                            </div>
                        </div>
                        <div className="col-md-4">
                            <div className="bg-white text-dark p-4 rounded-4 h-100 shadow-sm border-top border-5 border-warning">
                                <i className="fa-solid fa-graduation-cap fs-1 mb-3 text-success"></i>
                                <h5 className="fw-bold">Tamaraw Made</h5>
                                <p className="small text-muted mb-0">Designed by the FEU community, for the FEU community.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;