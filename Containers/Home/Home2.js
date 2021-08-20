import React from 'react';
import Fade from 'react-reveal/Fade';
import Card from '../../components/Cards/Card';
import { data } from '../../datas/cardData';
import Link from 'next/link';
const Home2 = () => {
  return (
    <div className="row d-flex justify-content-center  m-0">
      {data.map((v, i) => (
        <div key={i} className="col-lg-3  col-md-6 mt-3">
          <Fade bottom duration={1000} delay={i * 200}>
            <Link href={v.to}>
              <a>
                <Card data={v} />
              </a>
            </Link>
          </Fade>
        </div>
      ))}
    </div>
  );
};

export default Home2;
