import { useRouter } from 'next/router';

function Doc() {
  const router = useRouter();
  const { params = [] } = router.query;
  console.log(params);

  if (params.length === 2) return <h1> Doc Home page</h1>;
}

export default Doc;
