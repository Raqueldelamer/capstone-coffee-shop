import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import products from '@/mocks/products.json';
import ProductCard from '@/components/ProductCard';

export default function ProductsPage() {

    const productsJSX = products.map((product) => {
        // Use key prop every time you use map.
        // This is a unique identifier for each product.
        // React is not smart enough to keep track of the order of items in a list.
        // so we need to give it help by providing a unique key prop.
        function addToCart() {
            alert(product.name + " added to cart!");
        }

    return (
        <>
        <ProductCard key={product._id} product={product} addToCart={addToCart} />
        </>
        
        )
    });
    
    return (
        <>
        <Navbar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
        <Header headerText={"COFFEE, TEA, SNACK & READ!"}/>
        <div className="grid grid-rows-2 grid-flow-col grid-cols-3 hover:columns-3 px-30 justify-items-center">
            {productsJSX}
        </div>
        </>
    );
}