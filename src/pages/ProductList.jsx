import { useEffect, useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Sidebar from "../components/Sidebar";
import { useRecent } from "../context/RecentlyViewedContext";

const ProductList = ({ searchTerm, category, setCategory, sortOrder, setSortOrder }) => {
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const { recentProducts } = useRecent();
    const categories = ["All", "Clothing", "Accessories", "Electronics"];

    useEffect(() => {
        fetch("https://ecommerce-backend-vie1.onrender.com/api/products")
            .then(res => res.json())
            .then(data => {
                const cleanData = Array.isArray(data) ? data : (data.products || []);
                setProducts(cleanData);
                setLoading(false);
            })
            .catch(error => {
                console.error("API Fetch Error:", error);
                setProducts([]);
                setLoading(false);
            });
    }, []);

    const processedProducts = useMemo(() => {
        return (Array.isArray(products) ? products : [])
            .filter((product) => {
                const name = product.name || "";
                const matchesSearch = name.toLowerCase().includes((searchTerm || "").toLowerCase());
                const matchesCategory = category === "" || category === "All" || product.category === category;
                return matchesSearch && matchesCategory;
            })
            .sort((a, b) => {
                if (sortOrder === "priceLow") return a.price - b.price;
                if (sortOrder === "priceHigh") return b.price - a.price;
                if (sortOrder === "name") return (a.name || "").localeCompare(b.name || "");
                return 0;
            });
    }, [products, searchTerm, category, sortOrder]);

    if (loading) {
        return (
            <div className="container text-center py-5" style={{ minHeight: '60vh', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <div className="spinner-border text-success" role="status"></div>
                <h3 className="mt-3 fw-bold text-feu-green">Loading Tamaraw Gear...</h3>
            </div>
        );
    }

    return (
        <div className="product-list-page w-100">
            <div className="container py-4">

                <div className="d-md-none mb-4 px-2" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    
                    <div className="bg-white rounded shadow-sm border p-3">
                        <h6 className="fw-bold text-secondary mb-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>EXPLORE CATEGORIES</h6>
                        <div className="d-flex overflow-auto pb-1 gap-2 no-scrollbar" style={{ whiteSpace: 'nowrap' }}>
                            {categories.map((cat) => (
                                <button
                                    key={cat}
                                    onClick={() => setCategory(cat)}
                                    className={`btn btn-sm rounded-pill px-4 border-0 ${category === cat ? 'bg-feu-green text-feu-gold' : 'bg-light text-dark'}`}
                                    style={{ fontWeight: '600', fontSize: '12px' }}
                                >
                                    {cat.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    </div>

                    {recentProducts && recentProducts.length > 0 && (
                        <div className="bg-white rounded shadow-sm border p-3">
                            <h6 className="fw-bold text-secondary mb-2" style={{ fontSize: '11px', letterSpacing: '1px' }}>RECENTLY VIEWED</h6>
                            <div className="d-flex overflow-auto gap-2 no-scrollbar">
                                {recentProducts.map((p) => (
                                    <div
                                        key={p.id}
                                        className="bg-light rounded border p-1"
                                        style={{ minWidth: '60px', cursor: 'pointer' }}
                                        onClick={() => navigate(`/product/${p.id}`)}
                                    >
                                        <img src={p.image} alt={p.name} style={{ width: '50px', height: '50px', objectFit: 'contain' }} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}
                </div>

                <div className="row g-0 g-md-4">
                    <div className="col-md-3 col-lg-2 d-none d-md-block">
                        <Sidebar
                            setSelectedCategory={setCategory}
                            selectedCategory={category}
                        />
                    </div>

                    <div className="col-12 col-md-9 col-lg-10">
                        <div className="d-flex flex-column flex-md-row justify-content-between align-items-center mb-4 gap-3">
                            <div className="text-center text-md-start px-2">
                                <h2 className="fw-bold m-0" style={{ color: "#006241", fontSize: "1.4rem" }}>
                                    {!category || category === "All" ? "ALL PRODUCTS" : category.toUpperCase()}
                                </h2>
                                <div className="mx-auto mx-md-0" style={{ height: "4px", width: "40px", backgroundColor: "#FEBC11", marginTop: "5px" }}></div>
                            </div>

                            <div className="d-flex align-items-center bg-white p-2 rounded shadow-sm border">
                                <label className="me-2 fw-bold text-secondary small">Sort By:</label>
                                <select
                                    className="form-select form-select-sm border-0 shadow-none fw-bold"
                                    style={{ width: "135px", cursor: 'pointer' }}
                                    value={sortOrder}
                                    onChange={(e) => setSortOrder(e.target.value)}
                                >
                                    <option value="name">Alphabetical</option>
                                    <option value="priceLow">Price: Low to High</option>
                                    <option value="priceHigh">Price: High to Low</option>
                                </select>
                            </div>
                        </div>

                        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 justify-content-center px-2">
                            {processedProducts.length > 0 ? (
                                processedProducts.map((product) => (
                                    <div className="col d-flex justify-content-center" key={product.id}>
                                        <div className="w-100" style={{ maxWidth: "300px" }}>
                                            <ProductCard product={product} />
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <div className="col-12 text-center py-5">
                                    <i className="fa-solid fa-box-open fs-1 text-muted opacity-25 mb-3"></i>
                                    <p className="text-muted fw-bold">No items match your filters.</p>
                                    <button className="btn btn-link text-feu-green fw-bold" onClick={() => setCategory('All')}>Clear Filters</button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductList;