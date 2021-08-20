import React from 'react'
import Container from '../Containers/Container/Container';
import Baner from '../components/Baner/Baner'
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/apps.webp',
  title: `Управление отопительными приборами Viessmann через приложения`,
  subTitle: `Будь то конечный пользователь или профессиональный партнер, Viessmann предлагает соответствующие приложения для каждой аудитории. Узнайте больше об их функциях и областях применения здесь.`,
};

const viessmannApp = () => {
    return (
      <Container>
        <Baner data={dataBaner}/>
      </Container>
    );
}

export default viessmannApp
