import { useEffect, useState } from 'react';
import products from '../../mocks/products.json';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';
import { useQuery } from '@tanstack/react-query';
import { fetchProduct } from '@/utils/api';

export default function ProductPage() {
  const router = useRouter();
  // const id = router.query.id;
  const {id} = router.query; 
  //const product = products[id]|| {};
  const [product, setProduct] = useState({});

  async function fetchProduct(id) {
    console.log("Fetching Product!");
    const result = await fetch(`https://coffee-shop-backend-5fmn.onrender.com/api/v1/products/${id}`);
    const product = await result.json();
    setProduct(product);
  }

  useEffect(()=>{
    console.log("Hello from useEffect with [id]" + id)
    fetchProduct(id);
  }, [id]);

  function addToCart() {
    alert("Clicked Add to Cart" + product.name);
  }


  function handleAddToCart() {
    alert(product.name + ' added to Cart');
  }

  return (
    <>
      <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
      <Header headerText={"COFFEE, TEA, & READ!"}/>
      <div className="container mx-auto mt-5 px-4">
      <ProductCard product={product} addToCart={handleAddToCart} buttonLabel="Add to Cart" />
      </div>
    </>
  );
}