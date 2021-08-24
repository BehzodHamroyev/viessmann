import React from 'react'
import { FooterWrapper } from './FooterWrapper'
import { FaYoutube, FaFacebook, FaTwitter } from 'react-icons/fa'
import footerData from '../../datas/footerData'
import Link from 'next/link'

const Footer = () => {
    const data = footerData;
    console.log(data);
    return (
      <FooterWrapper>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-6 d-flex flex-column justify-content-between">
              <img
                src="https://viessmann.vercel.app/images/viessman%20logo.png"
                className="w-50"
                alt=""
              />
              <div>
                <h3 className="text-white">Социальные сети</h3>
                <div className="d-flex align-items-center">
                  <span className="iconFooter text-white ">
                    <FaYoutube />
                  </span>
                  <span className="iconFooter text-white ">
                    <FaFacebook />
                  </span>
                  <span className="iconFooter text-white ">
                    <FaTwitter />
                  </span>
                </div>
              </div>
            </div>
            {data?.map((v, i) => {
              return (
                <div className="col-lg-3 col-md-6">
                  <h3 className="text-white">{v.title}</h3>
                  <div className="d-flex flex-column">
                    {v.links.map((value, index) => {
                      return (
                        <Link key={index} href={value.to}>
                          <a className="mt-2">{value.link}</a>
                        </Link>
                      );
                    })}
                  </div>
                </div>
              );
            })}
            <div className="col-md-3 d-flex flex-column justify-content-between">
              <Link href="/news">
                <a className="fs-4  fw-bold">Новости</a>
              </Link>
              <Link href="/server">
                <a className="fs-4 fw-bold">Сервис</a>
              </Link>
              <Link href="/about">
                <a className="fs-4 fw-bold">О нас</a>
              </Link>
              <Link href="/contact">
                <a className="fs-4 fw-bold">Контакты</a>
              </Link>
            </div>
          </div>
        </div>
      </FooterWrapper>
    );
}

export default Footer
