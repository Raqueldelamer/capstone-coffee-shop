import Navbar from "@/components/Navbar";
import CheckoutForm from "@/components/CheckoutForm";
import CartSummary from "@/components/CartSummary";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";
import { useState } from "react";


export default function CheckoutPage () {
    const router = useRouter();

    // get subtotal, tax & total from url query parameters
    const { subtotal, tax, total } = router.query;
    const [cart, setCart] = useState({
        subtotal: subtotal || 0,
        tax: tax || 0,
        total: total || 0,
    });

    const divStyle = {
        backgroundImage: 'url(/imgs/book-cafe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'brown',
    };

    function handleCheckout(name, address, city, state, zipcode) {
        alert('Submit Clicked!');
        console.log('Checkout Info:', { name, address, city, state, zipcode });

         // Clear the cart summary after checkout
        setCart({
            subtotal: 0,
            tax: 0,
            total: 0,
        });
    }
    
    return (
    
        <>
            
            <Navbar className="min-h-screen text-wrap" menuItems={["HOME", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <div className="h-screen w-full min-h-screen" style={divStyle}>
                <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 font-mono font-bold 
                text-stroke-thick flex justify-around items-center w-full"> CHECK OUT FORM</h1>
                <div className="flex justify-evenly w-full">
            <CheckoutForm className="mb-1" handleCheckout={handleCheckout}  />
                <div className="rounded-lg shadow-lg">
            <CartSummary subtotal={cart.subtotal} tax={cart.tax} total={cart.total} />
            </div>
            </div>
            </div>
            <Footer className="flex justify-items-end" />
        </>
        
    );
}