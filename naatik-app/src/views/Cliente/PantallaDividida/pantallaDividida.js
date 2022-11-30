import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import {
    Navbar,
    TarjetaMaestra,
    BarraLateral,
    PieChart,
    CirculoPorcentaje,
    TextSlider,
    BarraNombreArchivo,
} from "../../../routeIndex";
import "./pantallaDividida.css";

const PantallaDividida = () => {
    // variable donde guardaremos los valores de churn
    const [churnvalues, setChurnvalues] = useState([]);

    // Establecemos un stado para obtener el cluster actual.
    const [currentCluster, setCurrentCluster] = useState(0);

    // Establecemos un estado para almacenar la info del cluster actual.
    const [dataCluster, setDataCluster] = useState([]);

    // obtenemos info de la view anterior
    const { state } = useLocation();


    const fetchSliderValues = async () => {
        try {
            const response = await fetch("http://localhost:8080/get_churn_segment/");
            const json = await response.json();
            setChurnvalues(await json.churn_segment);
        } catch (error) {
            console.log("error", error);
        }
    };

    // creamos metodo para mandar a llamar al endpoint que nos traerá la informacion del cluster, dependiendo del cluster actual
    const fetchClusterInfo = async (clusterNumer) => {
        try {
            const response = await fetch(
                "http://localhost:8080/cluster/Cluster_" + clusterNumer
            );
            const json = await response.json();
            setDataCluster(await json.perfil);
        } catch (error) {
            console.log("error", error);
        }
    };

    // usamos el useEffect para poder ejecutar la consulta una vez accedido a esta view
    useEffect(() => {
        // traemos los valores del churn
        fetchSliderValues();
        // treamos la info del cluster actual, dependiendo del currentCluster
        fetchClusterInfo(currentCluster);
    }, []);

    return (
        <>
            {/* Navbar section */}
            <Navbar> </Navbar>

            {/* name of the current file section */}
            <BarraNombreArchivo fileName={ state.fileName } ></BarraNombreArchivo>

            {/* general container for the spacework */}
            <TarjetaMaestra>
                {/* container for comodation purposes */}
                <div className="contenedor-general-panel">
                    {/* lateral navbar section */}
                    <BarraLateral
                        Bajo={(churnvalues[0] * 100).toFixed(0)}
                        Medio={(churnvalues[1] * 100).toFixed(0)}
                        Alto={(churnvalues[2] * 100).toFixed(0)}
                        arrayInfo={state.clustersInfo}
                        clickBtn={setCurrentCluster}
                    ></BarraLateral>

                    {/* section for general content */}
                    <div className="contendor-general-tarjeta">
                        <div className="tarjeta-maestra">
                            {/* we can add components here.... */}

                            {/* title/instructions */}
                            <div className="contenedor-der-pantalladiv">
                                <div className="contendeor-PieChart">
                                    <div className="contenedor-PieChart-header">
                                        <p>Distribución de grupos</p>
                                    </div>
                                    <div className="contenedor-PieChart-chart">
                                        {(currentCluster !== -1 && dataCluster.length > 0) ? (
                                            <PieChart
                                                number={currentCluster}
                                                infoCluster={dataCluster}
                                            ></PieChart>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                                <div className="contenedor-porcentaje">
                                    <div className="contenedor-porcentaje-header">
                                        <p className="texto-porcentaje">
                                            Porcentaje del dataset usado
                                        </p>
                                    </div>
                                    <div className="contenedor-porcentaje-graph">
                                        {(currentCluster !== -1) ? (
                                            <CirculoPorcentaje
                                                porcentaje={
                                                    state.clustersInfo[currentCluster].percentage
                                                }
                                            ></CirculoPorcentaje>
                                        ) : (
                                            <></>
                                        )}
                                    </div>
                                </div>
                            </div>
                            <div className="contenedor-izq-pantalladiv">
                                {(currentCluster !== -1 && dataCluster.length > 0) ?
                                    (
                                        <TextSlider
                                            info={dataCluster}
                                            infoLateralBar={[state.clustersInfo, churnvalues]}
                                        ></TextSlider>
                                    ) :
                                    (
                                        <>
                                        </>
                                    )}
                            </div>
                        </div>
                    </div>
                </div>
            </TarjetaMaestra>
        </>
    );
};

export default PantallaDividida;