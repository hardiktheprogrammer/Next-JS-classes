import Link from 'next/link';

function ProductList({ ProductID = 100 }) {
  return (
    <>
      <Link href="/">
        <h3>Home</h3>
      </Link>

      <h2>
        <Link href="/Product/1">
          <h3>Product1</h3>
        </Link>
      </h2>

      <h2>
        <Link href="/Product/2">
          <h3>Product2</h3>
        </Link>
      </h2>
      <h2>
        <Link href="/Product/3" replace>
          <h3>Product3</h3>
        </Link>
      </h2>
      <h2>
        <Link href={'/Product/${ProductID}'}>
          <h3>Product {ProductID}</h3>
        </Link>
      </h2>
    </>
  );
}

export default ProductList;
