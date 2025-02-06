import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ProductCard from "@/components/ProductCard";
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
    const router = useRouter();
    const { category } = router.query;

    const [selectedCategory, setSelectedCategory] = useState(category || "");
    const [page, setPage] = useState(1);
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const itemsPerPage = 5;

    const [cartContents, setCartContents] = useState([]);

useEffect(() => {
    async function fetchProducts() {
        setLoading(true);
        setError(null);
        try {
            let url = `${BACKEND_URL}/products`;
            if (selectedCategory) url += `?category=${selectedCategory}`;
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        
        } catch (err) {
        setError("Error fetching products. Please try again later.");
        } finally {
        setLoading(false);
        }
    }
    fetchProducts();
}, [selectedCategory]);

    const totalPages = Math.ceil(products.length / itemsPerPage);
    const paginatedProducts = products.slice(
    (page - 1) * itemsPerPage,
    page * itemsPerPage
    );

    function handleNextPage() {
        if (page < totalPages) setPage(page + 1);
    }

    function handlePreviousPage() {
        if (page > 1) setPage(page - 1);
    }
    
    function addProductToCart(product) {
            setCartContents((prevContents) => {
                const newCartContents = [...prevContents, product];
                saveCartToLocalStorage(newCartContents);
                return newCartContents;
            });
        }
    function addProductToCart(product) {
            setCartContents((prevContents) => {
                const newCartContents = [...prevContents, product];
                saveCartToLocalStorage(newCartContents);
                return newCartContents;
            });
        }
    
        function handleAddToCart(product) {
            alert(`${product.name} added to cart!`);
            addProductToCart(product);
    }

    return (
        <>
        <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
        <Header headerText="COFFEE, TEA, & READ!" />

      {/* Category Selection */}
        <div className="breadcrumbs max-w-lg space-x-4 text-mlg m-2 mx-auto text-center">
            <ul className="flex justify-center space-x-6 cursor-pointer w-full font-mono font-semibold">
            {[ "merchandise", "coffee-tea", "pastry"].map((cat) => (
            <li
                key={cat || "all"}
                onClick={() => setSelectedCategory(cat)}
                className={`hover:text-secondary dark:hover:text-success ${
                selectedCategory === cat ? "text-secondary" : ""
            }`}
            >
                {cat ? cat.charAt(0).toUpperCase() + cat.slice(1) : "All"}
            </li>
            ))}
            </ul>
        </div>

      {/* Product Display */}
        <div className="min-h-[84vh]">
            <h1 className="mt-4 text-6xl text-primary font-mono font-bold text-center">
            Shop by Category
            </h1>

        {loading ? (
        <div className="flex justify-center items-center h-96">
            <p classname="font-mono text-2xl text-yellow-400">Loading Products...</p>
        </div>
        
        ) : error ? (
        <p className="text-red-400 text-lg text-center">{error}</p>
        ) : paginatedProducts.length > 0 ? (
            
        
        <div className="flex flex-wrap justify-evenly items-center gap-5 m-4">
            {paginatedProducts.map((product) => (
                <ProductCard
                key={product._id}
                product={product}
                addToCart={() => handleAddToCart(product)}
                buttonLabel="Add to Cart"/>
            ))}
        </div>
        ) : (
        <p className="text-center text-yellow text-lg">
            Fetching products...
        </p>
        )}

        {/* Pagination Controls */}
        {totalPages > 1 && (
        <div className="flex justify-center my-6">
            <div className="join">
                <button
                className="join-item btn btn-outline"
                onClick={handlePreviousPage}
                disabled={page === 1} >
                «
            </button>
            <button className="join-item btn btn-outline">{page}</button>
            <button
                className="join-item btn btn-outline"
                onClick={handleNextPage}
                disabled={page === totalPages}>
                
            </button>
            </div>
        </div>
            )}
        </div>

        <Footer />
        </>
    );
}

