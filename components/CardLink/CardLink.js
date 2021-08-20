import React from 'react';
import { FaChevronRight } from 'react-icons/fa';
import Link from 'next/link';
import { CardLinkWrapper } from './CardLinkWrapper';
const CardLink = (props) => {
  return (
    <CardLinkWrapper>
      <img src={props.data.img} alt="" className="h-50" />
      <div className="content">
        <h5 className="title">{props.data.title}</h5>
        <p className="subTitle">{props.data.subTitle}</p>
        <Link href={props.data.to}>
          <a className="btn btn-danger w-100">
            <FaChevronRight className="me-2" />
            {props.data.link}
          </a>
        </Link>
      </div>
    </CardLinkWrapper>
  );
};

export default CardLink;
