import React from 'react';
import { Chart } from "react-google-charts";
import './BarChart.css';

export const data = [
    [
      "Genero",
      "Cantidad",
      { role: "style" },
      {
        sourceColumn: 0,
        role: "annotation",
        type: "string",
        calc: "stringify",
      },
    ],
    ["Hombre", 3000, "#b87333", null],
    ["Mujer", 1000, "silver", null],
  ];
  
  export const options = {
    width: 600,
    height: 400,
    bar: { groupWidth: "95%" },
    legend: { position: "none" },
  };


const BarChart = () => {
    
  return (
        <>
            <Chart
                chartType="BarChart"
                width="100%"
                height="400px"
                data={data}
                options={options}
            />
        </>
  )
}

export default BarChart;