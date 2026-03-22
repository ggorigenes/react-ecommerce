import { createContext, useState, useContext } from "react";

// 1. Create the Context
export const CartContext = createContext();

// 2. The Provider Component
const CartProvider = ({ children }) => {
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart(prevCart => {
            const existingItem = prevCart.find(item => item.id === product.id);
            if (existingItem) {
                return prevCart.map(item =>
                    item.id === product.id
                        ? { ...item, quantity: item.quantity + 1 }
                        : item
                );
            }
            // Using 'quantity' to match your Checkout.jsx logic
            return [...prevCart, { ...product, quantity: 1 }];
        });
    };

    const clearCart = () => {
        setCart([]);
    };

    const removeFromCart = (id) => {
        setCart(prevCart =>
            prevCart.filter(item => item.id !== id)
        );
    };

    const increaseQty = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item
            )
        );
    };

    const decreaseQty = (id) => {
        setCart(prevCart =>
            prevCart.map(item =>
                item.id === id && item.quantity > 1
                    ? { ...item, quantity: item.quantity - 1 }
                    : item
            )
        );
    };

    const getTotalPrice = () => {
        return cart.reduce((total, item) => {
            const itemPrice = Number(item.price) || 0;
            const itemQty = Number(item.quantity) || 0;
            return total + (itemPrice * itemQty);
        }, 0);
    };

    return (
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                removeFromCart,
                increaseQty,
                decreaseQty,
                clearCart,
                getTotalPrice // Exporting this for Checkout.jsx
            }}
        >
            {children}
        </CartContext.Provider>
    );
};

// 3. THE MISSING LINK: The Custom Hook (This fixes your SyntaxError)
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context) {
        throw new Error("useCart must be used within a CartProvider");
    }
    return context;
};

export default CartProvider;