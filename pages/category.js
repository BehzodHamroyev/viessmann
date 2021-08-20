import { useRouter } from 'next/router';
import React from 'react'
import Container from '../Containers/Container/Container';

const categoriya = () => {
    const router = useRouter();
    const { pid } = router.query;

    return   <Container>
      <p>categoriya</p>
    </Container>
}

export default categoriya
