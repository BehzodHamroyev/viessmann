import React from 'react';
import { CardData, shadowData } from '../datas/aboutData';
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
import ShadowCard from '../components/shadowCard/shadowCard';
import Content from '../components/Content/Content';
import { data1, data2, data3, data4, data5 } from '../datas/aboutData';
import Home2 from '../Containers/Home/Home2';
import { Fade } from 'react-reveal/Fade';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/about.webp',
  title: `Информация о компании Viessmann`,
  subTitle: `Предприятие Viessmann Group является одним из ведущих в мире производителей энергетических систем.`,
};

const about = () => {
  const data = shadowData;
  console.log(data);
  return (
    <Container>
      <Baner data={dataBaner} />
      <div className="container">
        <div className="row bg-white  d-flex justify-content-center ">
          <div className="col-md-6">
            <h2>
              Информация о предприятии Viessmann Group Компания Viessmann Group
            </h2>
            <p>
              является одним из ведущих в мире производителей систем отопления,
              промышленных отопительных установок и систем охлаждения.
              Основанное в 1917 году, семейное предприятие имеет штат персонала
              численностью 12 000 человек, товарооборот компании составляет 2,25
              млрд. евро. Компания Viessmann является крупным международным
            </p>
            <p>
              концерном, в составе которого числятся 23 производственных
              предприятия в 12 странах, сбытовые филиалы и представительства в
              74 странах и 120 торговых представительства во всех регионах мира.
              56 % товарооборота компании
            </p>
          </div>
          <div className="col-md-6 d-flex flex-column justify-content-center">
            {data.map((v, i) => {
              console.log(v);
              return (
                <div key={i} className="my-2">
                  <ShadowCard data={v} />
                </div>
              );
            })}
          </div>
          <div className="col-12 my-4 d-flex justify-content-center">
            <iframe
              className="w-100"
              height="560"
              src="https://www.youtube.com/embed/j9s5ZDJOZxw"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
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

export default about;
