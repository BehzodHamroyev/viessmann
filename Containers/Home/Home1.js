import React from 'react'
import { Home1Wrapper } from './Home1Wrapper'
import Link from 'next/link'
import Fade from 'react-reveal/Fade';

const Home1 = () => {
    return (
      <Home1Wrapper>
        <img
          src="https://kleemannlifts.com/sites/default/files/styles/full/public/projects/lipetsk-viessman.jpg?itok=1GbfKpYd"
          className="homeImg"
        />

        <div className="after">
          <div className="row d-sm-flex justify-content-sm-center">
            <Fade left duration={2000}>
              <div className="col-md-6 col-10 homeBanner ms-4">
                <h2>Фирма Viessmann - ваш партнер во всех областях</h2>
                <p>
                  Компания Viessmann Group является одним из ведущих в мире
                  производителей систем отопления/охлаждения и промышленных
                  установок.
                </p>
                <Link href={`/about`}>
                  <a className="btn btn-danger">О Нас</a>
                </Link>
              </div>
            </Fade>
          </div>
        </div>
      </Home1Wrapper>
    );
}

export default Home1
