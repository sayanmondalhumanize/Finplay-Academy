import React from 'react';
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import Chart from "../../components/chart/Chart";


import { Userdata } from "../../dummyData";
import "./home.css";


export default function Home() {
    return (
        <div className='home'>
            <FeaturedInfo />
            <Chart data={Userdata} titel="Financial Analysis" grid="grid" Firstdatakey="Total Cash" Seconddatakey="Stock Market Investment" XAxisdataKey="name" Thirddatakey="Crypto Currency Investment" Fourthkey="Other Investment"/>
            <div className="homeWidgets">
            </div>
        </div>
    );
}