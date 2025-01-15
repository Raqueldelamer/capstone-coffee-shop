import { useState, useEffect } from "react";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
//import Button from "@/components/Button";
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

    //function removeFromCart() {
    ///    alert(product.name + " removed from cart!" );
        
    //}
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
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <h1 className="text-5xl mb-10 mt-10 font-mono font-bold 
            text-stroke-thick flex justify-around items-center">Cart Contents</h1>
            <div className="grid grid-cols-4 gap-4 justify-items-center ml-10">
                {cartJSX}
            </div>
            
            
        </div>
    )
}