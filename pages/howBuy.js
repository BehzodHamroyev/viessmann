import React from 'react';
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/howbuy.png',
  title: `Где купить?`,
  subTitle: `Партнеры ООО "Viessmann`,
};
const howBuy = () => {
  return (
    <Container>
      <Baner data={dataBaner}/>
    </Container>
  );
};

export default howBuy;
