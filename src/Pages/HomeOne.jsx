import React from 'react';
import Hero from '../Components/Hero';
import PopularCoupons from '../Components/PopularCoupons';
import Story from '../Components/Story';
import TrendingCategories from '../Components/TrendingCategories';
const HomeOne = () => {
    return (
        <div>
            <Hero></Hero>
            <PopularCoupons></PopularCoupons>
            <Story></Story>
            <TrendingCategories></TrendingCategories>
        
        </div>
    );
};

export default HomeOne;