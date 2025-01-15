import products from '../../mocks/products.json';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard';
import Navbar from '@/components/Navbar';
import Header from '@/components/Header';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;
  const product = products[id]|| {};

  function handleAddToCart() {
    alert(product.name + ' added to Cart');
  }

  return (
    <>
      <Navbar menuItems={["HOME", "LOGIN", "PRODUCTS", "CART"]} />
      <Header headerText={"COFFEE, TEA, & READ!"}/>
      <div className="container mx-auto mt-5 px-4">
      <ProductCard product={product} addToCart={handleAddToCart}/>
      </div>
    </>
  );
}