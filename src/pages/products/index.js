import products from '@/mocks/products.json';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";


export default function ProductsPage() {
    const productsJSX = products.map((product) => {
        // Use key prop every time you use map.
        // This is a unique identifier for each product.
        // React is not smart enough to keep track of the order of items in a list.
        // so we need to give it help by providing a unique key prop.
        return (
        <>
        <ProductCard key={product._id} product={product} />
        </>
        
        )
    });
    
    return (
        <>
        <Navbar menuItems={["HOME", "ABOUT", "LOGIN", "PRODUCTS"]} />
        <Header headerText={"COFFEE, TEA, SNACK & READ!"}/>
        <div className="grid grid-rows-3 grid-flow-col mx-0 justify-items-center">
            {productsJSX}
        </div>
        </>
    );
}