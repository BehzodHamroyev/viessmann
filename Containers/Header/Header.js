import React from 'react';
import { HeaderWrapper } from './HeaderWrapper';
import { headerData } from '../../datas/headerData';
import Link from 'next/link';
import { FaBars, FaSearch,FaTimes } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import toggle from '../../Redux/Action/globallAction';
const Header = () => {
  const data = headerData;
  const sidebar = useSelector((state) => state.globalReducer.sidebar);
  const isShow = () => {
    toggle();
  };
  return (
    <HeaderWrapper isShow={sidebar}>
      <Link href="/">
        <a>
          <img
            src="https://viessmann.vercel.app/images/viessman%20logo.png"
            className="logo"
            alt=""
          />
        </a>
      </Link>
      <ul className="menu d-md-flex">
        {data.map((v, i) => {
          return (
            <li onClick={isShow} className="m-o" key={i}>
              <Link href={v.to}>
                <a className="d-flex align-items-center m-0 p-0 ms-3">
                  <div className="fs-5 me-2 mb-2">{v.icon}</div>
                  {v.title}
                </a>
              </Link>
            </li>
          );
        })}
      </ul>
      <div className="d-flex justify-content-around align-items-center m-o p-0">
          <FaBars
            onClick={isShow}
            className="d-block text-white bars  fs-5  me-2"
          />
        <FaSearch className="d-block text-white  fs-5 ms-2" />
      </div>
    </HeaderWrapper>
  );
};

export default Header;
