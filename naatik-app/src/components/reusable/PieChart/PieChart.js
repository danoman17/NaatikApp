import React from 'react'
import { Chart } from "react-google-charts";
import './PieChart.css'




const chartEvents = [
    {
        eventName: "ready",
        callback: ({ chartWrapper, google }) => {
          const chart = chartWrapper.getChart();
          google.visualization.events.addListener(chart, "click", e => {
            const { targetID } = e;
            console.log(targetID);
          });
        }
    }
];

export const data = [
    ["Grupo", "Porcentaje"],
    ["Grupo1", 10],
    ["Grupo2", 40],
    ["Grupo3", 50],
  ];
  
  export const options = {
    legend:'none',
    colors: ['#E89742','#AFAC84','#6088A5'],
    chartArea:{width:'100%',height:'100%'}
  };



const PieChart = () => {
    
  return (
    <>
        <Chart
            chartType="PieChart"
            data={data}
            options={options}
            width={"100%"}
            height={"100%"}
            chartEvents={chartEvents}

        />
    </>
  )
}

export default PieChart;