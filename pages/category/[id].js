import { useRouter } from 'next/router';
import Container from '../../Containers/Container/Container';

const Id = () => {
  const router = useRouter();
  console.log(router);
  let id = router.query.id;

  return (
    <Container>
      <p className="fw-bolder fs-1 d-flex justify-content-center">Product: {id}</p>
    </Container>
  );
};

export default Id;
