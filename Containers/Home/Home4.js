import React from 'react';
import Fade from 'react-reveal/Fade';
import CardLink from '../../components/CardLink/CardLink';
import cardLinkData from '../../datas/cardLinkData'


const Home4 = () => {
 const data = cardLinkData;
 console.log(data);
  return (
    <div className="container d-flex justify-content-center ">
      <Fade bottom>
        {' '}
        <div className="row  m-0 my-4">
          {data?.map((v, i) => {
            return (
              <div key={i} className="col-lg-3 col-md-6 mt-4">
                <CardLink data={v} />
              </div>
            );
          })}
        </div>
      </Fade>
    </div>
  );
};

export default Home4;
