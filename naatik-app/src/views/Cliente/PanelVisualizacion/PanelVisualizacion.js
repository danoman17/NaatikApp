import React, { useState, useEffect } from 'react'
import { Navbar, TarjetaMaestra, BarraLateral, SliderMultipleIndex, BarraProbAbandono, BotonSubir, BarraNombreArchivo } from '../../../routeIndex';
import { useNavigate, useLocation } from 'react-router-dom';
import { Spinner } from '@chakra-ui/react'
import './panelVisualizacion.css'

const PanelVisualizacion = () => {

    // we get the state params send by the past view
    // in this case, we get onlu the fileName param
    const { state } = useLocation();


    const [loading, setLoading] = useState(false);
    // we create a const in order to use navigate function.
    const navigate = useNavigate();


    // declare our initial params for the components in this view
    const [sliderValue, setSliderValue] = useState([25, 50, 80]);
    const [grupsList, setgrupsList] = useState([]);
    const [currentCluster, setCurrentCluster] = useState(0);


    // const grupsListDummie = [
    //   {
    //     "name":"uno",
    //     "percentage": 20
    //   }, 
    //   {
    //     "name":"dos", 
    //     "percentage": 30
    //   },
    //   {
    //     "name":"tres",
    //     "percentage": 50
    //   }
    // ];

    // conectamos endpoint que nos dará la lista de clusters/grupos calculados.
    // usamos el useEffect para poder ejecutar la consulta una vez accedido a esta view
    useEffect(() => {

        const fetchDataInfo = async () => {
            try {
                const response = await fetch('http://localhost:8080/get_grupo_list/');
                const json = await response.json();
                setgrupsList(await json.grupo);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchDataInfo();

    }, []);


    // funcion para setear los parametros de porcentaje de churn en el backend
    const handleSetParams = () => {
        setLoading(true);
        fetch('http://localhost:8080/set_churn_segment/' + sliderValue[0] + '/' + sliderValue[1] + '/' + sliderValue[2])
            .then((res) => res.json())
            .then((data) => {
                setLoading(false);
                navigate('/PantallaDividida',
                    {
                        state: {
                            clustersInfo: grupsList,
                            fileName: state.fileName
                        }
                    });
            });
    };

    return (
        <>
            {/* Navbar section */}
            <Navbar>  </Navbar>

            {/* name of the current file section */}
            <BarraNombreArchivo fileName={state.fileName}></BarraNombreArchivo>

            {/* general container for the spacework */}
            <TarjetaMaestra>

                {/* container for comodation purposes */}
                <div className='contenedor-general-panel'>

                    {/* lateral navbar section */}
                    <BarraLateral
                        arrayInfo={grupsList}
                        clickBtn={setCurrentCluster}
                        btnActive={false}
                        warningMessage={"Primero elija los porcentajes de Churn con ayuda de los circulos en la barra deslizable."}

                        Bajo={sliderValue[0]}
                        Medio={sliderValue[1]}
                        Alto={sliderValue[2]}
                    >
                    </BarraLateral>

                    {/* section for general content */}
                    <div className='contendor-general-tarjeta'>
                        <div className='tarjeta-maestra'>
                            {/* we can add components here.... */}

                            {/* title/instructions */}
                            <div className='container-title-instructions'>
                                <h1 className='instructions-frame3'>Deslice los puntos para configurar porcentajes de churn</h1>
                            </div>

                            {/* multipleIndexSlider */}
                            <div className='container-slider'>
                                <SliderMultipleIndex values={sliderValue} setValues={setSliderValue}></SliderMultipleIndex>
                            </div>
                            {/* barra de probabilidad de abandono section */}
                            <div className='container-barraprobabandono'>
                                <BarraProbAbandono BajoEnd={sliderValue[0]} MedioEnd={sliderValue[1]} AltoEnd={sliderValue[2]} ></BarraProbAbandono>
                            </div>
                            {/* button */}
                            <div className='container-btn'>

                                {
                                    (loading) ?
                                        (
                                            <div className='loading-section'>
                                                <Spinner
                                                    thickness='4px'
                                                    speed='0.65s'
                                                    emptyColor='gray.200'
                                                    color='blue.500'
                                                    size='xl'
                                                />
                                            </div>
                                        ) :
                                        (
                                            <BotonSubir onClick={handleSetParams} TextBtn={'Siguiente'} />
                                        )
                                }
                            </div>

                        </div>
                    </div>

                </div>

            </TarjetaMaestra>

        </>
    )
}

export default PanelVisualizacion;