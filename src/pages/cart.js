import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import ProductCard from "@/components/ProductCard";
import Button from "@/components/Button";
import cart from "@/mocks/cart.json";


export default function Cart() {
    console.log(cart);
    console.log(cart.products);
    const cartContents= cart.products || [];
    const cartJSX = cartContents.map((product) => {

    function removeFromCart() {
        alert(product.name + " removed from cart!" );
        
    }
        return (
            
            <ProductCard 
            key={product._id} 
            product={product} 
            buttonLabel="Remove from Cart" 
            addToCart={removeFromCart} />
        );
    });
    
    return (
        <div>
            <Navbar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
            <Header headerText={"COFFEE, TEA, SNACK & READ!"} />
            <h1 className="text-5xl mb-5 mt-10 mx-auto font-mono font-bold 
            text-stroke-thick flex justify-around items-center">Cart Contents</h1>
            <div className="flex-wrap grid grid-cols-3 ">
                {cartJSX}
            </div>
            <Button />
        </div>
    )
}