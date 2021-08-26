import React from 'react'
import { BanerWrapper } from './BanerWrapper'

const Baner = ({data}) => {
    return (
      <BanerWrapper>
        <div className=" w-100 h-100 container">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <div className="img position-relative">
                <img src={data.img} alt="" className="imgRelative" />
              </div>
            </div>
            <div className="col-md-4 m-0 p-0 d-flex  flex-column justify-content-center ">
              <h1 className="fw-bolder">{data.title}</h1>
              <p className="fs-4">
                {data.subTitle}
              </p>
            </div>
          </div>
        </div>
      </BanerWrapper>
    );
}

export default Baner
