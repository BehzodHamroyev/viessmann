import React from 'react'
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
import { CardData } from '../datas/aboutData';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/viessman.jpg',
  title: `Новости`,
  subTitle: ``,
};
const news = () => {
    return (
      <Container>
        <Baner data={dataBaner} />{' '}
        <div className="container d-flex justify-content-center">
          <div className="row ">
            {CardData.map((v, i) => {
              return (
                <div key={i} className=" col-md-3 ">
                  <div className="shadow w-100 h-100">
                    <img src={v.img} className="w-100" alt="" />
                    <h4 className="my-4 text-center">{v.title}</h4>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    );
}

export default news
