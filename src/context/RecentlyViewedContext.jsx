import { createContext, useState, useContext, useEffect } from 'react';

const RecentlyViewedContext = createContext();

export const RecentlyViewedProvider = ({ children }) => {
    const [recentProducts, setRecentProducts] = useState(() => {
        const saved = localStorage.getItem("feu_recent_viewed");
        return saved ? JSON.parse(saved) : [];
    });

    const addRecentProduct = (product) => {
        setRecentProducts((prev) => {
            const filtered = prev.filter(item => item.id !== product.id);
            
            const updated = [product, ...filtered].slice(0, 4);
            
            localStorage.setItem("feu_recent_viewed", JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <RecentlyViewedContext.Provider value={{ recentProducts, addRecentProduct }}>
            {children}
        </RecentlyViewedContext.Provider>
    );
};

export const useRecent = () => {
    const context = useContext(RecentlyViewedContext);
    if (!context) throw new Error("useRecent must be used within RecentlyViewedProvider");
    return context;
};