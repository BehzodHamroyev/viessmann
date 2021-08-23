import React from 'react';
import Container from '../Containers/Container/Container';
import Baner from '../components/Baner/Baner';
import { data } from '../datas/ViessmannAppData';
import Content from '../components/Content/Content';
const dataBaner = {
  img: 'https://viessmann.vercel.app/images/apps.webp',
  title: `Управление отопительными приборами Viessmann через приложения`,
  subTitle: `Будь то конечный пользователь или профессиональный партнер, Viessmann предлагает соответствующие приложения для каждой аудитории. Узнайте больше об их функциях и областях применения здесь.`,
};

const viessmannApp = () => {
  console.log(data);
  return (
    <Container>
      <Baner data={dataBaner} />
      <div className="row container">
        <div className="col-md-8">
          <h3>
            Приложения для управления отоплением – с приложениями Viessmann вы
            можете контролировать отопительную систему просто и безопасно через
          </h3>
          <p>
            интернет Отоплением можно управлять классическим способом, с помощью
            ручки термостата или же более удобным способом через интернет.
            Удаленная диагностика системы отопления лицензированным специалистом
            теперь также не представляет никаких проблем, это стало возможным
            благодаря интеллектуальным приложениям Viessmann,
            интернет-интерфейсу и устройствам с доступом в Интернет, например
            смартфону или планшету.
          </p>
        </div>
      </div>
      {data.map((v, i) => {
        return <Content data={v} />;
      })}
    </Container>
  );
};

export default viessmannApp;
