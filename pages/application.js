import React from 'react'
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/services.jpg',
  title: `Сервисные услуги`,
  subTitle: `Полный ассортимент сервисных услуг компании Viessmann`,
};

const application = () => {
    return (
      <Container>
        <p className="d-flex justify-content-center fw-bolder fs-1">application </p>
      </Container>
    );
}

export default application
