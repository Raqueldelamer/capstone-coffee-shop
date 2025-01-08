import { useRouter } from 'next/router';

export default function ProductPage() {
  // For pages with dynamic routes, you can use the useRouter hook to get the route params
    const router = useRouter();
    const { id } = router.query; // Get 'id' from the route params
    return (
        <div>
        <h1>Product Page for product &#35; { id }</h1>
        </div>
    );
}