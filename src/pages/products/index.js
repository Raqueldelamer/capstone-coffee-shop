import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import data from '@/mocks/products.json';
import ProductCard from '@/components/ProductCard';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';
// import Button from '@/components/Button';


export default function ProductsPage() {
    const [products, setProducts] = useState([]);
    const [cartContents, setCartContents] = useState([]);

    useEffect(() => { 

        const cartData = loadCartFromLocalStorage();
        
        setCartContents(cartData);
        setProducts(data)

    }, []);

    function addProductToCart(product) {
        const newCartContents = [ ...cartContents, product ];
        setCartContents(newCartContents);
        saveCartToLocalStorage(newCartContents);
    }

    const productsJSX = products.map((product) => {
        // Use key prop every time you use map.
        // This is a unique identifier for each product.
        // React is not smart enough to keep track of the order of items in a list.
        // so we need to give it help by providing a unique key prop.
        function addToCart() {
            alert(product.name + " added to cart!");
            addProductToCart(product);
        }

    return (
        
        <ProductCard key={product._id} product={product} addToCart={addToCart} />


        )
    });
    
    return (
        <>
        <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART", "CHECKOUT"]} />
        <Header headerText={"COFFEE, TEA, SNACK & READ!"}/>
        <div className="grid grid-rows-2 grid-flow-col grid-cols-3 hover:columns-3 px-30 justify-items-center">
            {productsJSX}
        </div>
        </>
    );
}