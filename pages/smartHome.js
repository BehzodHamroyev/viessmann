import React from 'react';
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/smart-home.webp',
  title: `Что такое smart-home?`,
  subTitle: `Под умным домом большинство людей понимает интеллектуальную сеть технических устройств внутри дома. Но как выглядит эта «сеть» в деталях? Какие требования должны быть заранее выполнены? Какие стандарты существуют? Говоря другими словами, как работает система Smart Home?`,
};

const smartHome = () => {
  return (
    <Container>
      <Baner data={dataBaner} />
    </Container>
  );
};

export default smartHome;
