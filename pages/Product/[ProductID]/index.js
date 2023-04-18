import { useRouter } from 'next/router';
function Productdetail() {
  const router = useRouter();
  const ProductID = router.query.ProductID;
  return <h1>Details About Product {ProductID}</h1>;
}

export default Productdetail;
