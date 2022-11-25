import React, { useEffect, useMemo, useState } from "react";
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
  const variableParaGuardarDatos = [];
  // variable donde guardaremos los valores de churn
  const [churnvalues, setChurnvalues] = useState([]);

  // Establecemos un stado para obtener el cluster actual.

  const [currentCluster, setCurrentCluster] = useState(0);

  const [dataCluster, setDataCluster] = useState([]);

  // obtenemos info de la view anterior
  const { state } = useLocation();

  // usamos el useEffect para poder ejecutar la consulta una vez accedido a esta view

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
      console.log("fetching cluster info");
      const response = await fetch(
        "http://localhost:8080/cluster/Cluster_" + clusterNumer
      );
      const json = await response.json();
      console.log("perfil aaaaa", json.perfil);
      setDataCluster(await json.perfil);
    } catch (error) {
      console.log("error", error);
    }
  };

  useEffect(() => {
    // traemos los valores del churn
    fetchSliderValues();
    fetchClusterInfo(currentCluster);
    console.log("useEffect aaaaaaaa", dataCluster);
  }, []);

  return (
    <>
      {/* Navbar section */}
      <Navbar> </Navbar>

      {/* name of the current file section */}
      <BarraNombreArchivo></BarraNombreArchivo>

      {/* general container for the spacework */}
      <TarjetaMaestra>
        {/* container for comodation purposes */}
        <div className="contenedor-general-panel">
          {/* lateral navbar section */}
          <BarraLateral
            Bajo={churnvalues[0]}
            Medio={churnvalues[1]}
            Alto={churnvalues[2]}
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
                    {currentCluster !== -1 ? (
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
                      {" "}
                      Porcentaje del dataset usado{" "}
                    </p>
                  </div>
                  <div className="contenedor-porcentaje-graph">
                    {currentCluster !== -1 ? (
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
                {currentCluster !== -1 && dataCluster.length > 0 ? (
                  <TextSlider
                    info={dataCluster}
                    infoLateralBar={[state.clustersInfo, churnvalues]}
                  ></TextSlider>
                ) : (
                  <></>
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
