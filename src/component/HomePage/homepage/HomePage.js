import React, { Fragment } from 'react';
import Content from '../content/Content';
import Logo from '../logo/Logo';
import Slider from '../slider/Slider';
import CamNang from './camnang/CamNang';
import CamNangAnUong from './camnanganuong/CamNangAnUong';

function HomePage(props) {
    return (
        <Fragment>
            <Logo />
            <Slider />
            <CamNang />
            <Content />
            <CamNangAnUong />
        </Fragment>
    );
}

export default HomePage;