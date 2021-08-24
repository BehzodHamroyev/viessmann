import React from 'react';
import { CardWrapper } from './CardWrapper';
// import Link from 'next/link';
import Link from 'next/link';


const Card = (props) => {
  return (
    <CardWrapper>
      <img
        src={props.data.img}
        className="img-fluid imgCard h-100"
        alt=""
      />
      <div className="affterCard">
        <Link href={props.data.to}>
          <a className="fs-4 fw-bold">{props.data.title}</a>
        </Link>
        <p className="p-0 m-0">{props.data.subTitle}</p>
      </div>
    </CardWrapper>
  );
};

export default Card;
