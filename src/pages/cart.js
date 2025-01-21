import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
// import cart from "@/mocks/cart.json";
import Button from "@/components/Button";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from "@/utils";



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
    const handleProceed = () =>
    {
        if (cartContents.length === 0) {
            router.push("/products");
        } else {
            handleCheckout();
        }
    };


    const cartJSX = cartContents.map((product) => (

        <ProductCard 
            key={product._id} 
            product={product} 
            buttonLabel="Remove from Cart" 
            addToCart={() => removeFromCart(product._id)} />
    ));
     // coffee icon to display when the cart is empty
    const emptyCartIcon = (
        <div className="flex justify-items-center justify-center text-center">
            <p className="text-yellow-200 text-2xl font-mono">COFFEE CART IS EMPTY</p>
        <svg xmlns="http://www.w3.org/2000/svg" 
            width={32} 
            height={32} 
            viewBox="0 0 24 24">
            <g fill="none" stroke="#d0ad42" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}>
            <path strokeDasharray={48} strokeDashoffset={48} d="M17 9v9c0 1.66 -1.34 3 -3 3h-6c-1.66 0 -3 -1.34 -3 -3v-9Z">
                <animate fill="freeze" attributeName="stroke-dashoffset" dur="0.6s" values="48;0"></animate>
            </path>
            <path strokeDasharray={14} strokeDashoffset={14} d="M17 9h3c0.55 0 1 0.45 1 1v3c0 0.55 -0.45 1 -1 1h-3">
                <animate fill="freeze" attributeName="stroke-dashoffset" begin="0.6s" dur="0.2s" values="14;0"></animate>
            </path>
            <mask id="lineMdCoffeeLoop0">
                <path stroke="#fff" d="M8 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M12 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4M16 0c0 2-2 2-2 4s2 2 2 4-2 2-2 4 2 2 2 4">
                    <animateMotion calcMode="linear" dur="3s" path="M0 0v-8" repeatCount="indefinite"></animateMotion>
                </path>
            </mask>
            <rect 
                width={24} 
                height={0} 
                y={7} 
                fill="#d0ad42"
                mask="url(#lineMdCoffeeLoop0)">
                <animate fill="freeze" attributeName="y" begin="0.8s" dur="0.6s" values="7;2"></animate>
                <animate fill="freeze" attributeName="height" begin="0.8s" dur="0.6s" values="0;5"></animate>
            </rect>
            </g>
        </svg>
        </div>
    );

    return (
        <>
        <div>
        <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
        <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <h1 className="text-5xl mb-10 mt-10 font-mono font-bold text-stroke-thick flex justify-center">
                Shopping Cart
            </h1>
        {/* If cart is empty, show empty cart icon and message */}
        {cartContents.length === 0 ? (
            emptyCartIcon
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {cartJSX}
            </div>
        )}

            <div className="m-4 mt-10 mb-11 text-center">
            <Button
            label={cartContents.length === 0 ? "Proceed to Products" : "Proceed to Checkout"}
            handleClick={handleProceed} // This triggers the function based on cart content
            variant="btn-info btn-wide"
            />
            </div>
        </div>
        </>
    );
}
