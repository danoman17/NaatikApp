import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Home, TemporalHome, Template, UploadFiles, PanelVisualizacion, CirculoPorcentaje, BarraProbAbandono, ShowAmount, TextSlider, PantallaDividida, PantallaPerfil, BarChart, DownloadJson } from './routeIndex.js'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const App = () => {
    return (
        <>
            <ToastContainer
                position="top-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="light"
            />
            <Router>
                <Routes>

                    <Route path='template' element={<Template />} />

                    <Route path='*' element={<Home />} />

                    <Route path='home' element={<Home />} />

                    <Route path='upload_files' element={<UploadFiles />} />

                    <Route path='panel_visuzalizacion' element={<PanelVisualizacion />} />

                    <Route path='CirculoPorcentaje' element={<CirculoPorcentaje />} />

                    <Route path='BarraProbAbandono' element={<BarraProbAbandono />} />

                    <Route path='ShowAmount' element={<ShowAmount />} />

                    <Route path='TextSlider' element={<TextSlider />} />

                    <Route path='PantallaDividida' element={<PantallaDividida />} />

                    <Route path='PantallaPerfil' element={<PantallaPerfil />} />

                    <Route path='BarChart' element={<BarChart />} />

                    <Route path='downloadJson' element={<DownloadJson />} />
                </Routes>
            </Router>
        </>

    );


}

export default App;
