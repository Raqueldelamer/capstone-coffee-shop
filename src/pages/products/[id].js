import { useState, useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import ProductCard from '@/components/ProductCard';
import { loadCartFromLocalStorage, saveCartToLocalStorage } from '@/utils';
//import products from '../../mocks/products.json';
//import Button from '@/components/Button';
import { useRouter } from 'next/router';
// import { fetchProduct } from '@/utils/api';

const BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export default function ProductPage() {
  const router = useRouter();
   // get id from route params
  const { id } = router.query; 

  const [product, setProduct] = useState({
    id: null,
    name: "",
    description: "",
    imageUrl: "",
    price:""
  });

  //const [cart, setCart] = useState([]);
  const [error, setError ] = useState(null);

  async function fetchProduct(id) {
    console.log("Fetching Product!");
    try {
      const result = await fetch(`${BACKEND_URL}/products/${id}`);
      if (!result.ok) {
        throw new Error('Failed to fetch product');
      }
      const productData = await result.json();
        console.log("Fetched product:", productData);
        
        setProduct(productData);
      } catch (err) {
        setError('Error fetching product');
        console.error(err);
      }
  }

  useEffect(() => {
    if (id) {
      console.log("Fetching product with ID:", id);
      fetchProduct(id);
    } else {
      console.log("No product ID in the URL");
    }
  }, [id]);

  // function addToCart() {
  //   alert("Clicked Add to Cart" + product.name);
  // }

  function handleAddToCart() {
    alert(product.name + ' added to Cart');
  }


  return (
    <>
    <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
      <Header className="flex justify-items-end items-center w-full" headerText={"COFFEE, TEA, & READ!"} />
      <center>
        <h1 className="text-5xl mb-10 mt-10 font-mono font-bold text-stroke-thick justify-center">Product Info</h1>
      </center>
      {error && <p className="text-red-500 text-center font-bold">{error}</p>}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 justify-items-center">
        {product.id && product.name && product.description && product.imageUrl && product.price ? (
          <ProductCard product={product} addToCart={handleAddToCart} buttonLabel="Add to Cart" />
        ) : (
          <p>Loading product...</p>
        )}
      </div>
    </>
  );
}