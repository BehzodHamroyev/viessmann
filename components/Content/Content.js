import React from 'react';
import { ContentWrapper } from './contentWrapper';
import Fade from 'react-reveal/Fade';
const Content = ({ data }) => {
  return (
    <ContentWrapper color={data}>
      <div className="row d-flex justify-content-center align-items-center">
        <div className={`leftContent col-md-7 col-10  order-${data.OL}`}>
          <Fade bottom>
            <div>
              <h1>{data.title}</h1>
              {data.subTitles.map((v, index) => {
                return <p key={index}>{v.subTitle}</p>;
              })}
            </div>
          </Fade>
        </div>

        <div className={`rightContent col-md-5 col-10 order-${data.OR}`}>
          <Fade bottom>
            <div>
              <img src={data.img} alt="" className="w-100 rounded" />
            </div>
          </Fade>
        </div>
      </div>
    </ContentWrapper>
  );
};

export default Content;
