import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import { Home3Wrapper } from './Home3Wrapper';
import Fade from 'react-reveal/Fade';
const Home3 = () => {
  return (
    <Home3Wrapper>
      <div className="container pt-5">
        <h1 className="text-center pt-5">
          Фирма Viessmann - ваш партнер во всех областях
        </h1>
        <p className="mt-0 p-0">
          Компания Viessmann Group является одним из ведущих в мире
          производителей систем отопления/охлаждения и промышленных установок.
          Фирма Viessmann, выпуская полный комплект оборудования, предлагает
          индивидуальные решения и эффективные системы в диапазоне мощности от
          1,5 до 120 000 кВт для любых областей применения и всех
          энергоносителей.
        </p>
        <div className="row">
          <div className="col-md-4 col-10">
            <Fade bottom>
              <h5>
                <FaChevronRight />
                Системы отопления
              </h5>
              <p className="mt-0">
                Выпускаемое нами комплектное оборудование отличается высшим
                качеством и устанавливает новые масштабы в отрасли.
                Сосредоточившись на эффективном потреблении энергии, мы
                добиваемся снижения затрат, одновременно экономя ресурсы и
                сберегая окружающую среду.
              </p>
            </Fade>
          </div>
          <div className="col-md-4 col-10">
            <Fade bottom duration={1000} delay={500}>
              <h5>
                <FaChevronRight />
                Промышленные системы
              </h5>
              <p className="mt-0">
                Экономная и экологичная выработка энергии, а также высокая
                эксплуатационная готовность и надежность - вот основные
                требования, предъявляемые к энергетическим установкам.
              </p>
            </Fade>
          </div>
          <div className="col-md-4 col-10">
            <Fade bottom duration={1000} delay={1500}>
              <h5>
                <FaChevronRight />
                Системы охлаждения
              </h5>
              <p className="mt-0">
                Фирма Viessmann является одним из ведущих европейских
                производителей инновационной холодильной техники. Обширный
                ассортимент выпускаемой продукции и предоставляемых услуг
                содержит высокоэффективные решения для промышленного применения.
              </p>
            </Fade>
          </div>
        </div>
      </div>
    </Home3Wrapper>
  );
};

export default Home3;
