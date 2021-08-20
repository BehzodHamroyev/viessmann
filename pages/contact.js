import React from 'react'
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container'
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/menu4back.jpg',
  title: `Контакт
`,
  subTitle: `ООО "Viessmann" в Узбекистане`,
};
const contact = () => {
    return (
      <Container>
        <Baner data={dataBaner} />
      </Container>
    );
}

export default contact
