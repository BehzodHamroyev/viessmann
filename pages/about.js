import React from 'react'
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/about.webp',
  title: `Информация о компании Viessmann`,
  subTitle: `Предприятие Viessmann Group является одним из ведущих в мире производителей энергетических систем.`,
};
const about = () => {
    return (
      <Container>
        <Baner data={dataBaner} />
      </Container>
    );
}

export default about
