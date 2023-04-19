import Link from 'next/link';
import { useRouter } from 'next/router';
function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('placing your Order');
    router.replace('/product');
  };
  return (
    <div>
      <h1> Home Page</h1>
      <Link href="/blog">
        <h2>Blog</h2>
      </Link>
      <Link href="/Product">
        <h2>Product</h2>
      </Link>
      <button onClick={handleClick}>PlaceOrder</button>
    </div>
  );
}

export default Home;
