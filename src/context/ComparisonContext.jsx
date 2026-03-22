import { createContext, useState, useContext } from 'react';

const ComparisonContext = createContext();

export const ComparisonProvider = ({ children }) => {
    const [compareList, setCompareList] = useState([]);

    const toggleCompare = (product) => {
        setCompareList((prev) => {
            if (prev.find(item => item.id === product.id)) {
                return prev.filter(item => item.id !== product.id);
            }

            if (prev.length >= 2) {
                alert("You can only compare 2 items at a time!");
                return prev;
            }

            return [...prev, product];
        });
    };

    const removeFromCompare = (id) => {
        setCompareList(prev => prev.filter(item => item.id !== id));
    };

    const clearCompare = () => {
        setCompareList([]);
    };

    return (
        <ComparisonContext.Provider 
            value={{ 
                compareList, 
                toggleCompare, 
                removeFromCompare,
                clearCompare 
            }}
        >
            {children}
        </ComparisonContext.Provider>
    );
};

export const useCompare = () => useContext(ComparisonContext);