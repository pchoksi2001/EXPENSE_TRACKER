import React from 'react';
import './Chart.css';
import ChartBar from "./ChartBar";


const Chart = (props) => {

    const dataPointvalue = props.datapoints.map(datapoint => datapoint.value);
    const totalMax = Math.max(...dataPointvalue);    
     
        return (
            <div className='chart'>
            {props.datapoints.map((datapoint) => 
            <ChartBar
            key={datapoint.label}
            value={datapoint.value}
            maxValue={totalMax}
            label={datapoint.label} 
            />
            )}
            </div>
        )
} 

export default Chart;