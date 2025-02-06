import { useState, useEffect } from 'react';
import { useRouter } from "next/router";
import Navbar from '@/components/Navbar';
import Header from "@/components/Header";
import TestButton from "@/components/TestButton";
import Footer from "@/components/Footer";
import ProductCard from '@/components/ProductCard';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductsPage() {
    const router = useRouter();
    const { category, id } = router.query;

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    function handleCtaClick() {
        console.log('CTA button clicked!');
        router.push('/products/mock');
    }

    const [cartContents, setCartContents] = useState([]);

    useEffect(() => {
        async function fetchProducts() {
            setLoading(true);
            setError(null)
            try {
                const response = await fetch(`${BACKEND_URL}/products`);
                const data = await response.json();

                console.log("Fetched products:", data); // Debugging

                if (Array.isArray(data)) {
                    setProducts(data);
                } else if (data.products && Array.isArray(data.products)) {
                    setProducts(data.products); // Handle nested structure
                } else {
                    console.error("Unexpected response format:", data);
                }
            } catch (error) {
                console.error("Error fetching products:", error);
                setError("Failed to load products.");
            } finally {
                setLoading(false);
            }
        }

        fetchProducts();
    }, []);

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

    if (loading) {
        return (
            <div className="text-xl ml-30 mb-10 mt-10 font-mono font-bold text-stroke-thick justify-center">
                <p className="text-yellow-200 font-mono">Loading products...</p>
            </div>
        );
    }

    if (error) {
        return (
            <div className="text-red-500 font-mono text-xl">
                Error: {error}
            </div>
        );
    }

    const productsJSX = products.length > 0 ? (
        products.map((product) => (
            <ProductCard
                key={product._id}
                product={product}
                addToCart={() => handleAddToCart(product)}
                buttonLabel="Add to Cart"
            />
        ))
    ) : (
        <div className="text-2xl flex justify-around ml-20 mb-10 mt-10 font-mono font-bold">
            ..No products available.
        </div>
    );

    return (
        <>
            <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
            <Header classname="flex justify-items-end items-center w-full" headerText={"COFFEE, TEA, & READ!"} />
            <center>
                <h1 className="text-5xl mb-10 mt-10 font-mono font-bold text-stroke-thick justify-center">
                    Products In Stock
                </h1>
            </center>
            <center>
                <TestButton label="PRODUCTS BY CATEGORY" handleClick={handleCtaClick} className="mb-30" />
            </center>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
                {productsJSX}
            </div>
            <Footer className="flex justify-items-end" />
        </>
    );
}


// import { useState, useEffect } from 'react';
// import { useRouter } from "next/router";
// import Navbar from '@/components/Navbar';
// import Header from "@/components/Header";
// import TestButton from "@/components/TestButton";
// import Footer from "@/components/Footer";
// import ProductCard from '@/components/ProductCard';
// import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';
// import { useFetch } from '@/hooks/api'; 
// // import useAuth from '@/hooks/auth'; 
// const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

// export default function ProductsPage() {
//     const router = useRouter();
//     const { category } = router.query;
//     const [url, setUrl] = useState(`${BACKEND_URL}/products`);
//     console.log(category);

//     function handleCtaClick() {
//     console.log('CTA button clicked!');
//     router.push('/products/mock');
//     }

//     const [cartContents, setCartContents] = useState([]);
//     const [products, setProducts] = useState([]);

    
//     const [productFetchError, productsLoading] = useFetch(url, []);
//     console.log('Fetched products:', products);

//     useEffect(() => {
//         async function fetchProducts() {
//             try {
//                 const response = await fetch(`${BACKEND_URL}/products`);
//                 const data = await response.json();
    
//                 console.log("Fetched products:", data); // debugging
    
//                 if (Array.isArray(data)) {
//                     setProducts(data); 
//                 } else {
//                     console.error("Unexpected response format:", data);
//                 }
//             } catch (error) {
//                 console.error("Error fetching products:", error);
//             }
//         }
    
//         fetchProducts();
//     }, []);

//     // useEffect(() => {
//     //     const cartData = loadCartFromLocalStorage();
//     //     setCartContents(cartData);
//     // }, []);

//     function addProductToCart(product) {
//         setCartContents((prevContents) => {
//             const newCartContents = [...prevContents, product];
//             saveCartToLocalStorage(newCartContents);
//             return newCartContents;
//         });
//     }

//     function handleAddToCart(product) {
//         alert(`${product.name} added to cart!`);
//         addProductToCart(product);
//     }

//     if (productsLoading) {
//         return (
//             <div className='text-xl ml-30 mb-10 mt-10 font-mono font-bold 
//             text-stroke-thick justify-center'>
//                 <svg xmlns="http://www.w3.org/2000/svg"
//                     width={32}
//                     height={32}
//                     viewBox="0 0 24 24">
//                     <circle cx={18} cy={12} r={0} fill="#d0ad42">
//                         <animate attributeName="r" begin={0.67} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate>
//                     </circle>
//                     <circle cx={12} cy={12} r={0} fill="#d0ad42">
//                         <animate attributeName="r" begin={0.33} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate>
//                     </circle>
//                     <circle cx={6} cy={12} r={0} fill="#d0ad42">
//                         <animate attributeName="r" begin={0} calcMode="spline" dur="1.5s" keySplines="0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8;0.2 0.2 0.4 0.8" repeatCount="indefinite" values="0;2;0;0"></animate>
//                     </circle>
//                 </svg>
//                 <p className="text-yellow-200 font-mono">Loading products..</p>
//             </div>
//         );
//     }


    
//     console.log(products);
//     const productsJSX = Array.isArray(products) && products.length > 0 ? products.map((product) => (
//         <ProductCard
//             key={product._id}
//             product={product}
//             addToCart={() => handleAddToCart(product)}
//             buttonLabel="Add to Cart" />
//     )) : <div className="text-2xl flex justify-around ml-20 mb-10 mt-10 font-mono font-bold">
//                     ..No products available.
//             </div>;

//     return (
//         <>
//             <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
//             <Header classname="flex justify-items-end items-center w-full" headerText={"COFFEE, TEA, & READ!"} />
//                 <center><h1 className="text-5xl mb-10 mt-10 font-mono font-bold 
//                 text-stroke-thick justify-center">Products In Stock</h1></center>
//                 <center><TestButton label="PRODUCTS BY CATEGORY" handleClick={handleCtaClick} className="mb-30"/></center>
//             <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
//                 {productsJSX}
//             </div>
//             <Footer className="flex justify-items-end" />
//         </>
//     );
// }
