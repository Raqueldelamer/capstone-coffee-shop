import products from '../../mocks/products.json';
import Button from '@/components/Button';
import { useRouter } from 'next/router';
import ProductCard from '@/components/ProductCard';

export default function ProductPage() {
  const router = useRouter();
  const id = router.query.id;
  const product = products[id]|| {};
  return (
    <div>
      {/* TODO: Put this in CardProduct --> */}
      <ProductCard product={product}/>
    </div>
  );
}