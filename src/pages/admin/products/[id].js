import Navbar from "@/components/Navbar";
import ProductCard from '@/components/ProductCard';
import useAuth from '@/hooks/auth';
import Footer from "@/components/Footer";



export default function AdminProduct() {
    const {token} = useAuth();
    
    // need ID , token, & product

    return (
        <>
        <Navbar menuItems={["HOME", "", "PRODUCTS", "CART"]} />
        {/* New admin product card goes here.  */}
        <Footer />
        </>
    )
}