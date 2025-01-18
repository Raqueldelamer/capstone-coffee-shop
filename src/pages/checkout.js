import Navbar from "@/components/Navbar";
//import Button from "@/components/Button";
import CheckoutForm from "@/components/CheckoutForm";
import CartSummary from "@/components/CartSummary";
import Footer from "@/components/Footer";
import { useRouter } from "next/router";


export default function CheckoutPage () {
    const router = useRouter();

    // get subtotal, tax & total from url query parameters
    const { subtotal, tax, total } = router.query;

    const divStyle = {
        backgroundImage: 'url(/imgs/book-cafe.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundColor: 'brown',
        height: '100vh',
    };

    function handleCheckout(name, address, city, state, zipcode) {
        alert('Submit Clicked!');
        console.log('Checkout Info:', { name, address, city, state, zipcode });
    }
    
    return (
    
        <>
            
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <div style={divStyle}>
            <h1 className="text-black text-5xl bg-slate-400 opacity-70 drop-shadow-2xl mb-5 mx-auto font-mono font-bold 
                text-stroke-thick flex justify-around items-center w-full"> CHECK OUT FORM</h1>
                <div className="flex sm:flex-shrink justify-evenly w-full">
            <CheckoutForm className="w-full" handleCheckout={handleCheckout}  />
                <div className=" rounded-lg shadow-lg">
            <CartSummary subtotal={subtotal} tax={tax} total={total} />
            </div>
            </div>
            </div>
            <Footer />
            
        </>
        
    );
}