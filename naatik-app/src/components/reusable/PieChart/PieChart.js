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
            console.log("selelected: " + targetID);
          });
        }
    }
];

  export const options = {
    legend:'none',
    colors: ['#E34956','#70AE47','#EE7D30','#982B52'],
    chartArea:{width:'85%',height:'85%'}
  };


const PieChart = ({infoCluster}) => {
  
  const data = [["Grupo","Porcentaje"]];

  // creamos el metodo que calcula los porcentajes de la PieChart.

  function bringGroupName(index) {
      if(index === 0){
        return "Permanente";
      } 
      if(index === 1){
        return "Bajo";
      }
      if(index === 2){
        return "Medio";
      }
      if(index === 3) {
        return "Alto";
      }else {
        return "";
      }
  }


  const calculatePercentages = () => {
    let sumaTotal = 0;
    let arrayAmount = [];


    infoCluster.map((cluster)=> {
      arrayAmount.push(cluster.amount);
    });

    arrayAmount.map((cantidad)=>{
      sumaTotal = cantidad + sumaTotal;
    });



    arrayAmount.map((amout,key)=> {
      data.push([bringGroupName(key),amout*100/sumaTotal]);
    });
  };

  calculatePercentages();


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