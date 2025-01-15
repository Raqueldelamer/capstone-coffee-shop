import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
// import cart from "@/mocks/cart.json";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";


export default function Cart() {
    const [cartContents, setCartContents] = useState([]);

    useEffect(() => {

        const cartData = loadCartFromLocalStorage();
        setCartContents(cartData);

    }, []);

    function removeFromCart(productId) {
        // Remove the product from the cart array
        const updatedCart = cartContents.filter(product => product._id!==productId);

        // Save the updated cart back to local storage
        saveCartToLocalStorage(updatedCart);
         // Update the state with the new cart contents
        setCartContents(updatedCart);

        alert("Product removed from cart!" );
    }
    
    const cartJSX = cartContents.map((product) => {

        return (
            
            <ProductCard 
            key={product._id} 
            product={product} 
            buttonLabel="Remove from Cart" 
            addToCart={() => removeFromCart(product._id)} />
        );
    });
    
    return (
        <div>
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <h1 className="text-5xl mb-10 mt-10 font-mono font-bold text-stroke-thick flex justify-around items-center">Shopping Cart</h1>
            <div className="grid grid-cols-4 gap-4 justify-items-center ml-10">
                {cartJSX}
            </div>
            <Footer />
        </div>
    )
}