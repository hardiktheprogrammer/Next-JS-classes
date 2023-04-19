import Link from 'next/link';
import { useRouter } from 'next/router';
function Home() {
  const router = useRouter();

  const handleClick = () => {
    console.log('placing your Order');
    router.replace('/Product');
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
      <button className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={handleClick}>
        Place Order
      </button>
    </div>
  );
}

export default Home;
