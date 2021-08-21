import { useRouter } from 'next/router';
import Container from '../../Containers/Container/Container';

const User = () => {
  const router = useRouter();

  const id  = router.query.id;
  console.log(id, router);
  return (
    <Container>
      <p className="fw-bolder fs-1 d-flex justify-content-center">
        Product: {id}
      </p>
    </Container>
  );
};

export default User;
