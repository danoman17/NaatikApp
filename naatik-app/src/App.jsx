import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  Home, TemporalHome, Template, UploadFiles, PanelVisualizacion, CirculoPorcentaje } from './routeIndex.js'



const App = () => {
    return(

        <Router>
            <Routes>
                
                <Route path='template' element={<Template/>} />

                <Route path='*' element={<TemporalHome/>} />

                <Route path='home' element={<Home/>} />

                <Route path='upload_files' element={<UploadFiles/>} />

                <Route path='panel_visuzalizacion' element={<PanelVisualizacion/>}/>

                <Route path='CirculoPorcentaje' element={<CirculoPorcentaje/>} />

            </Routes>
        </Router>

    );


}

export default App;
