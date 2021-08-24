import React from 'react'
import Baner from '../components/Baner/Baner';
import Form from '../components/Form/Form';
import Container from '../Containers/Container/Container';

const dataBaner = {
  img: 'https://viessmann.vercel.app/images/services.jpg',
  title: `Сервисные услуги`,
  subTitle: `Полный ассортимент сервисных услуг компании Viessmann`,
};



const Application = () => {


    return (
      <Container>
        <h2 className="text-center mt-4">Отопление жилых зданий | Консультационная поддержка Viessmann</h2>
        <Form/>
      </Container>
    );
}

export default Application;
