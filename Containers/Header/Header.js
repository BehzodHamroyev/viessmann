import React from 'react'
import { HeaderWrapper } from './HeaderWrapper'
import { headerData } from '../../datas/headerData'
import Link from 'next/link'
import { FaBars, FaSearch } from 'react-icons/fa'
const Header = () => {
    const data = headerData;
    console.log(data);
    return (
        <HeaderWrapper>
            <img src="https://viessmann.vercel.app/images/viessman%20logo.png" className="logo" alt="" className="logo" />
            <ul className="menu">
                {data.map((v, i) => {
                    return <li className="m-o p-0" key={i}>
                        <Link href={v.to}><a className="d-flex align-items-center ms-3 "><div className="fs-5 me-2 mb-2">{v.icon}</div>{v.title}</a></Link>
                    </li>
                })}
            </ul>
            < div className="d-flex justify-content-around align-items-center m-o p-0">
                <FaBars className="d-block text-white  fs-3  me-2"/>
                <FaSearch className="d-block text-white  fs-3 ms-2"/>
            </div>

        </HeaderWrapper>
    )
}

export default Header
