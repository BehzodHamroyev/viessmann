import React from 'react'
import { BanerWrapper } from './BanerWrapper'

const Baner = ({data}) => {
    return (
      <BanerWrapper>
        <div className="w-100 h-100">
          <div className="row">
            <div className="col-md-8 d-flex align-items-center">
              <div className="img position-relative">
                <img src={data.img} alt="" className="imgRelative" />
                {/* <img
                src={`https://o.remove.bg/downloads/3b6842c9-b609-4546-bb56-737980f2f0af/102-1020479_png-file-svg-lines-and-shapes-png-transparent-removebg-preview.png`}
                className="imgAbsolute"
                alt=""
              /> */}
              </div>
            </div>
            <div className="col-md-4 d-flex flex-column justify-content-center ">
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
