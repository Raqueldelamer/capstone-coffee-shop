import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import Footer from "@/components/Footer";
// import data from '@/mocks/products.json';
import ProductCard from '@/components/ProductCard';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';
import { useFetch } from '@/hooks/api';
// import Button from '@/components/Button';
const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
    const router = useRouter();
    const { category } = router.query;
    console.log(category);
    //const [products, setProducts] = useState([]);
    const [cartContents, setCartContents] = useState([]);
    const [url, setUrl] = useState(`${BACKEND_URL}/products`);
    // fetch products using hook
    const { data: products = [], loading, error } = useFetch(url, []);
    //const [productFetchError, productsLoading, products] = useFetch (url, []);

    useEffect(() => {
        const cartData = loadCartFromLocalStorage();
        setCartContents(cartData);
    }, []);
        
    function addProductToCart(product) {
        const newCartContents = [...cartContents, product];
        setCartContents(newCartContents);
        saveCartToLocalStorage(newCartContents);
    }

    // handling add to cart
    function handleAddToCart(product) {
        alert(`${product.name} added to cart!`);
        addProductToCart(product);
    }

        if(loading) {
            return <div className='text-xl ml-30 mb-10 mt-10 font-mono font-bold 
            text-stroke-thick justify-center'>Loading products..</div>;
        }
        if(error) {
            return <div>Error loading products: {error.message}</div>;
        }

    //function addProductToCart(product) {
      //  const newCartContents = [ ...cartContents, product ];
        //setCartContents(newCartContents);
       // saveCartToLocalStorage(newCartContents);
    //}

    const productsJSX = Array.isArray(products) && products.length > 0 ? products.map((product) => (
        <ProductCard
            key={product._id}
            product={product}
            addToCart={() => handleAddToCart(product)}
            buttonLabel="Add to Cart" />
)) : <div className="text-2xl flex justify-items-center mb-10 mt-10 font-mono font-bold">No products available...</div>

        //function handleAddToCart() {
          //  alert(product.name + " added to cart!");
            //addProductToCart(product);
        //}

    
    return (
        <>
        <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
        <Header classname="flex justify-items-end items-center w-full" headerText={"COFFEE, TEA, & READ!"}/>
        <center><h1 className="text-5xl mb-10 mt-10 font-mono font-bold 
            text-stroke-thick justify-center">Products In Stock</h1></center>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
            {productsJSX}
        </div>
        <Footer className="flex justify-items-end" />
        </>
    );
}