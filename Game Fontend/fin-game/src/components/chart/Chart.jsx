import React from 'react';
import "./chart.css";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


export default function Chart({titel, data, XAxisdataKey ,Firstdatakey,Seconddatakey,Thirddatakey, Fourthkey, grid}) {
    return (
        <div className='chart'>
            <h3 className="chartTitel">
                {titel}
            </h3>
            <ResponsiveContainer width="100%" aspect={4 / 1}>
                <LineChart data={data}>
                    <XAxis dataKey={XAxisdataKey} stroke="#5550bd"/>
                    <YAxis stroke="#5550bd"/>
                    <Line type="monotone" dataKey={Firstdatakey} stroke="green"/>
                    <Line type="monotone" dataKey={Seconddatakey} stroke="red"/>
                    <Line type="natural" dataKey={Thirddatakey} stroke="darkviolet"/>
                    <Line type="monotone" dataKey={Fourthkey} stroke="orange"/>

                    
                    <Legend />
                    <Tooltip/>
                    {grid && <CartesianGrid stroke="#e0dfdf" strokeDasharray="5 5"/>}
                   
                </LineChart>
            </ResponsiveContainer>    
        </div>
    );
}