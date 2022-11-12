import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import {  Home, TemporalHome, Template, UploadFiles, PanelVisualizacion, CirculoPorcentaje, BarraProbAbandono, ShowAmount, TextSlider, PantallaDividida, PantallaPerfil } from './routeIndex.js'



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

                <Route path='BarraProbAbandono' element={<BarraProbAbandono/>} />

                <Route path='ShowAmount' element={<ShowAmount/>} />

                <Route path='TextSlider' element={<TextSlider/>} />

                <Route path='PantallaDividida' element={<PantallaDividida/>} />

                <Route path='PantallaPerfil' element={<PantallaPerfil/>} />

                

                
                
                
            </Routes>
        </Router>

    );


}

export default App;
