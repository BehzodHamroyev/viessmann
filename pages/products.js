import React from 'react'
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container'
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/services.jpg',
  title: `Продукты`,
  subTitle: ``,
};
const products = () => {
    return (
      <Container>
        <Baner data={dataBaner} />
       
      </Container>
    );
}

export default products
