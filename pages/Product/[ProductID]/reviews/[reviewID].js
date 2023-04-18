import { useRouter } from 'next/router';
function Review() {
  const router = useRouter();
  const { ProductID, reviewID } = router.query;
  return (
    <h1>
      Review {reviewID} for product {ProductID}
    </h1>
  );
}

export default Review;
