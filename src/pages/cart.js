import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
// import cart from "@/mocks/cart.json";
import Button from "@/components/Button";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";
import CartSummary from "@/components/CartSummary";



export default function Cart() {
    const [cartContents, setCartContents] = useState([]);
    const [subtotal, setSubtotal] = useState(0);
    const [tax, setTax] = useState(0); 
    const [total, setTotal] = useState(0);
    const router = useRouter();

    useEffect(() => {

        const cartData = loadCartFromLocalStorage();
        setCartContents(cartData);
    }, []);
    
    useEffect(() => {
        // recalculate subtotal, tax & total when cartContents changes
        const newSubtotal = cartContents.reduce((acc, product) => acc + product.price, 0) .toFixed(2);
            setSubtotal(newSubtotal);

        const newTax = (newSubtotal * 0.10).toFixed(2);
            setTax(newTax);
            
        const newTotal = (parseFloat(newSubtotal) + parseFloat(newTax)).toFixed(2);
            setTotal(newTotal);
    }, [cartContents]);

    function removeFromCart(productId) {
        // Remove the product from the cart array
        const updatedCart = cartContents.filter(product => product._id!==productId);

        // Save the updated cart back to local storage
        saveCartToLocalStorage(updatedCart);
         // Update the state with the new cart contents
        setCartContents(updatedCart);

        alert("Product removed from cart!");
    }
    
    function handleCheckout() {
         // calculate subtotal, tax & total 
    const subtotal = cartContents.reduce((acc, product) => acc + product.price, 0).toFixed(2);

    const tax = (subtotal * 0.10).toFixed(2);

    const total = (parseFloat(subtotal) + parseFloat(tax)).toFixed(2);

        router.push({ pathname: "/checkout", query: { subtotal, tax, total },
        });
        
    }


    const cartJSX = cartContents.map((product) => (

        <ProductCard 
            key={product._id} 
            product={product} 
            buttonLabel="Remove from Cart" 
            addToCart={() => removeFromCart(product._id)} />
    ));
    
    return (
        <div>
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <h1 className="text-5xl mb-10 mt-10 font-mono font-bold text-stroke-thick flex justify-center">Shopping Cart</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {cartJSX}
            </div>
            <CartSummary subtotal={subtotal} tax={tax} total={total} />   
        <div className="m-4 mt-10 mb-11 text-center">
            <Button
            label={"Proceed to Checkout"}
            handleClick={handleCheckout}
            variant="btn-info btn-wide" />
        </div>
            <Footer />
        </div>
    )
}