import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import HomeOne from './HomeOne';

const HomeLayouts = () => {
    return (
        <div className=''>
            <Header></Header>
            <HomeOne></HomeOne>
            <Outlet></Outlet>
            
        </div>
    );
};

export default HomeLayouts;