import React from 'react';
import Baner from '../components/Baner/Baner';
import Container from '../Containers/Container/Container';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/howbuy.png',
  title: `Где купить?`,
  subTitle: `Партнеры ООО "Viessmann`,
};
const howBuy = () => {
  return (
    <Container>
      <Baner data={dataBaner} />
      <div className="container">
        <div className="row">
          <div className="col-md-8">
            <div>
              <h3>
                Представительство Viessmann в Республике Узбекистан - ООО
                Viessmann
              </h3>
              <p>Адрес: 100052, Ташкент, Салар Буйи, 7</p>
              <p>Время работы: с понедельника по пятниуе с 9-00 до 18-00,</p>
              <p>
                обеденный переыв с 13-00 до 14-00 Эл. почта: info@viessmann.uz
              </p>
            </div>
            <div>
              <h3>Наши контакты:</h3>
              <p>
                Генеральный менеджер Сабуров Бахтиёр телефон: +998 90 945 09
                00sbrb@viessmann.com
              </p>
              <p>
                Менеджер по проектам Машарипов Икрам телефон: +998 97 719 95
                97mshi@viessmann.com
              </p>
              <p>
                Менеджер по продажам Ибрагимов Фаррух телефон: +998 99 806 80
                20sbrb@viessmann.com
              </p>
              <p>
                Менеджер по сервису продаж Исмаилова Комила телефон: +998 93 550
                55 03ismk@viessmann.com
              </p>
            </div>
            <div>
              <h3>Информационно-техническая поддержка:</h3>
              <p>
                Сервис Менеджер Кабулов Нигмон телефон: +998 97 733 11
                55kbln@viessmann.com
              </p>
            </div>
            <div>
              <h3>Склад ООО Viessmann - в разработке</h3>
              <p>
                Дата отгрузки оборудования согласовывается с Отделом логистики и
                поддержки продаж ООО Виссманн в г. Ташкент посредством
                электронной почты, либо потелефону +XXXXXXXXXX - заранее, но не
                позднее 16:00 рабочего дня, предшествующегодню планируемой
                отгрузки.
              </p>
            </div>
          </div>
          <div className="col-md-4">
            {shadowData?.map((v, i) => {
              console.log(v);
              return (
                <div key={i} className="my-3">
                  <ShadowCard data={v} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
      <div className="px-4">
        <h2 className="text-center">Выбор проекта</h2>
        <Home2 />
      </div>
    </Container>
  );
};

export default howBuy;
