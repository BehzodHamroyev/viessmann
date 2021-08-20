import React from 'react'
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/viessman.jpg',
  title: `Новости`,
  subTitle: ``,
};
const news = () => {
    return (
      <Container>
        <Baner data={dataBaner}/>
      </Container>
    );
}

export default news
