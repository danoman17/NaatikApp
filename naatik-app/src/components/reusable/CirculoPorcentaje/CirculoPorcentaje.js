import React from 'react';
import { render } from "react-dom";

import {
    CircularProgressbar,
    CircularProgressbarWithChildren,
    buildStyles
  } from "react-circular-progressbar";
  import "react-circular-progressbar/dist/styles.css";


const percentage = 35;

function CirculoPorcentaje() {
    return (
        <div style={{ width: 200, height: 200 }}>

            <CircularProgressbar 
                value={percentage}
                strokeWidth={10}
                text={`${percentage}%`} 
                styles={buildStyles({
                    backgroundColor: "#3e98c7",
                    textColor: "CornflowerBlue",
                    pathColor: "CornflowerBlue",
                    trailColor: "Gainsboro",
                    strokeLinecap: "butt",
                    textSize: "2em"
                  })}
                
                />;

        </div>
    );
}

export default CirculoPorcentaje;