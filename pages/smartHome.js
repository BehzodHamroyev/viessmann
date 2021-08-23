import React from 'react';
import Baner from '../components/Baner/Baner';
import Content from '../components/Content/Content';
import Container from '../Containers/Container/Container';
import Home2 from '../Containers/Home/Home2';
import { CardData, data1, data2, data3, data4, data5 } from '../datas/aboutData';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/smart-home.webp',
  title: `Что такое smart-home?`,
  subTitle: `Под умным домом большинство людей понимает интеллектуальную сеть технических устройств внутри дома. Но как выглядит эта «сеть» в деталях? Какие требования должны быть заранее выполнены? Какие стандарты существуют? Говоря другими словами, как работает система Smart Home?`,
};

const smartHome = () => {
  return (
    <Container>
      <Baner data={dataBaner} />
      <Content data={data1} />
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
      <Content data={data2} />
      <div className="px-4">
        <h1 className="text-center">Выбор проекта</h1>
        <Home2 />
      </div>
      <Content data={data3} />
      <Content data={data4} />
      <Content data={data5} />
    </Container>
  );
};

export default smartHome;
