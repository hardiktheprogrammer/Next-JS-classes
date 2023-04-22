import Link from 'next/link';

function Home() {
  return (
    <>
      <h1>NextJS Pre-Rendering</h1>

      <Link href="/user">
        <a>User</a>
      </Link>
    </>
  );
}

export default Home;
