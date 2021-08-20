import React from 'react'
import Footer from '../Footer/Footer'
import Header from '../Header/Header'
import { ContainerWrapper } from './ContainerWrapper'

const Container = (props) => {
    return (
        <ContainerWrapper>
            <Header />
            <div className="childContainer">
                {props.children}
            </div>
            <Footer/>
        </ContainerWrapper>
    )
}

export default Container
