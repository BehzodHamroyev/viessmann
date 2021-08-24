import React from 'react';
import Baner from '../components/Baner/Baner';
import ShadowCard from '../components/shadowCard/shadowCard';
import Container from '../Containers/Container/Container';
import { FaPhone } from 'react-icons/fa';
import Fade from 'react-reveal/Fade';
import data from '../datas/servicesData';
import CardLink from '../components/CardLink/CardLink';
import Home2 from '../Containers/Home/Home2';
import Content from '../components/Content/Content';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/services.jpg',
  title: `Сервисные услуги`,
  subTitle: `Полный ассортимент сервисных услуг компании Viessmann`,
};
const shadowData = {
  topTitle: 'Вы можете получить консультацию у наших специалистов.',
  title: 'Телефон горячей линии для Специалистов',
  icon: <FaPhone />,
  link: ' +99897 123 45 67',
  linkTitle: ' +99897 123 45 67',
};
const dataContent = {
  title: 'Сертификаты на оборудование Viessmann',
  subTitles: [
    {
      subTitle:
        'Наше оборудование регулярно проходит испытания в соответствии с законодательством Российской Федерации и получает соответствующие сертификаты и разрешения.',
    },
    { subTitle: ' Перейти в раздел' },
  ],
  img: 'https://viessmann.vercel.app/images/sertificate.webp',
  OR: '2',
  OL: '1',
  backgroundColor: '#f1f1f1',
};
const server = () => {
  return (
    <Container>
      <Baner data={dataBaner} />
      <div className="container">
        <div className="row ">
          <div className="col-md-8 col-10">
            <h2>Полный ассортимент сервисных услуг Viessmann</h2>
            <p>
              Оборудование Viessmann отличается высокой надежностью, при
              правильном монтаже и соблюдении условий использования оно может
              служить без сбоев многие годы. Но котел является объектом
              повышенной пожароопасности. В этой связи необходимость ежегодного
              квалифицированного технического обслуживания газоиспользующего
              оборудования очевидна и предписана законодательно.
            </p>
            <p>
              Только благодаря регулярному, не реже раза в год,
              квалифицированному сервисному обслуживанию можно на ранней стадии
              выявить и устранить опасные отклонения, вызываемые
              неблагоприятными факторами.
            </p>
            <p>
              Широкая сеть партнеров ООО Виссманн обеспечивает доступность и
              оперативность сервиса, а также возможность для потребителя выбрать
              наиболее подходящую сервисную организацию. Многие сервисные
              партнеры Viessmann выступают также в качестве сбытовых партнеров и
              монтажных организаций. Это оптимальное сочетание. От таких
              компаний потребитель получает решение под ключ, начиная с подбора
              оборудования, комплектации, монтажа и заканчивая сервисным
              обслуживанием на долгие годы. Схема комплексного подхода прекрасно
              работает и позволяет Виссманн удерживать значительную долю
              рынка.
            </p>
          </div>
          <div className="col-md-4 col-10">
            <ShadowCard data={shadowData} />
          </div>
        </div>
        <div className=" d-flex justify-content-center ">
          <Fade bottom>
         <div className="container d-flex justify-content-center">
              <div className="row  m-0 my-4">
              {data?.map((v, i) => {
                return (
                  <div key={i} className="col-lg-3 col-md-6 col-10">
                    <CardLink data={v} />
                  </div>
                );
              })}
            </div>
         </div>
          </Fade>
        </div>
        <div className="row">
          <div className="col-md-8 col-10">
            <h2>Гарантийные Обязательства</h2>
            <p>
              Оборудование Viessmann отличается высокой надежностью, при
              правильном монтаже и соблюдении условий использования оно может
              служить без сбоев многие годы. Но котел является объектом
              повышенной пожароопасности. В этой связи необходимость ежегодного
              квалифицированного технического обслуживания газоиспользующего
              оборудования очевидна и предписана законодательно.
            </p>
            <p>
              Только благодаря регулярному, не реже раза в год,
              квалифицированному сервисному обслуживанию можно на ранней стадии
              выявить и устранить опасные отклонения, вызываемые
              неблагоприятными факторами.
            </p>
            <p className="fw-bold">
              Обратите Внимание! Вам необходимо заполнить только левую часть
              бланка акта претензии, правая часть заполняется сотрудником
              Viessmann. Копию (скан) гарантийного талона, заполненный бланк
              акта претензии отправьте на адрес электронной почты технической
              службы Viessmann. рынка.
            </p>
          </div>
          <div className="col-md-4 col-10">
            <ShadowCard data={shadowData} />
          </div>
        </div>
        <div className="px-4">
          <h2 className="text-center">Выбор проекта</h2>
          <Home2 />
        </div>
      </div>
      <Content data={dataContent} />
    </Container>
  );
};

export default server;
