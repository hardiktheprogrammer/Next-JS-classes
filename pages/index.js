import Link from 'next/link';

function Home() {
  return (
    <div>
      <h1> Home Page</h1>
      <Link href="/blog">
        <h2>Blog</h2>
      </Link>
      <Link href="/Product">
        <h2>Product</h2>
      </Link>
    </div>
  );
}

export default Home;
