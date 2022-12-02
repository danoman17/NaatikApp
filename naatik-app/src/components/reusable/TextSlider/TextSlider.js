import React from "react";
import { ShowAmount } from "../../../routeIndex";
import "./TextSlider.css";
import {
    Button,
    Tabs,
    TabList,
    TabPanels,
    Tab,
    TabPanel,
    Card,
    CardHeader,
    CardBody,
} from "@chakra-ui/react";


import { useNavigate } from "react-router-dom";

const TextSlider = ({ info, infoLateralBar, fileName = "", currentClusterIndex }) => {


    const navigate = useNavigate();


    const goToPerfil = (e) => {
        e.preventDefault();
        const clusterPerfil = e.target.getAttribute('a-key');
        navigate("/PantallaPerfil", {
            state: {
                clusterInfo: infoLateralBar[0],
                churns: infoLateralBar[1],
                dataCluster: info[clusterPerfil],
                index: clusterPerfil,
                fileName: fileName,
                currentClusterIndexFinal: currentClusterIndex

            },
        });
    };


    return (
        <Tabs
            variant="unstyled"
            p="3"
            rounded="md"
            bg="white"
            w="95%"
            h="95%"
            overflow="scroll"
            backgroundColor="#ffff"
            id="contenedor-general-textslider"
        >
            <TabList
                h="15%"
                w="100%"
                display="flex"
                justifyContent="space-around"
                alignItems="center"
                borderBottom="2px #D9D9D9 solid"
            >
                <Tab
                    _selected={{ color: "white", bg: "#E34956", borderRadius: "10px" }}
                    className="btn-textslider-1"
                    aria-selected="true"
                >

                    <p className="txt-btn-textSlider">Permanente</p>
                </Tab>
                <Tab
                    _selected={{ color: "white", bg: "#70AE47", borderRadius: "10px" }}
                    className="btn-textslider-2"
                    aria-selected="true"
                >
                    <p className="txt-btn-textSlider">Bajo</p>
                </Tab>
                <Tab
                    _selected={{ color: "white", bg: "#EE7D30", borderRadius: "10px" }}
                    className="btn-textslider-3"
                >
                    <p className="txt-btn-textSlider">Medio</p>
                </Tab>
                <Tab
                    _selected={{ color: "white", bg: "#982B52", borderRadius: "10px" }}
                    className="btn-textslider-4"
                >
                    <p className="txt-btn-textSlider">Alto</p>
                </Tab>
            </TabList>

            <TabPanels h="85%" w="95%">
                <TabPanel h="100%" w="100%">
                    <div className="contenedor-general-resumen">
                        <div className="parte-arriba">

                            {
                                (info[0]["amount"] === 0) ?
                                    (
                                        <div className="card-noInfo">
                                            <div className="cardHeader-noInfo">
                                                <h3>Nada que mostrar</h3>
                                            </div>
                                            <div className="cardBody-noInfo">
                                                <p>Al parece la previsualizacion de este perfil no es posible con los datos analizados.</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        (info[0]["bill amount"] === 0) ?
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[0]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[0]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Total de Factura: "}
                                                        Amount={(info[0]["bill amount"]).toFixed(2)}
                                                        descripcion={"Cantidad total de de factura de los elementos analizados."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Ingresos: "}
                                                        Amount={(info[0]["revenues"]).toFixed(2)}
                                                        descripcion={"Ingresos totales de este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            )


                                    )
                            }
                        </div>
                        <div className="parte-abajo">
                            <Button colorScheme="green" onClick={goToPerfil} a-key={0}>
                                Ver más
                            </Button>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel h="100%" w="100%">
                    <div className="contenedor-general-resumen">
                        <div className="parte-arriba">
                        {
                                (info[1]["amount"] === 0) ?
                                    (
                                        <div className="card-noInfo">
                                            <div className="cardHeader-noInfo">
                                                <h3>Nada que mostrar</h3>
                                            </div>
                                            <div className="cardBody-noInfo">
                                                <p>Al parece la previsualizacion de este perfil no es posible con los datos analizados.</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        (info[1]["bill amount"] === 0) ?
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[1]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[1]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Total de Factura: "}
                                                        Amount={(info[1]["bill amount"]).toFixed(2)}
                                                        descripcion={"Cantidad total de de factura de los elementos analizados."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Ingresos: "}
                                                        Amount={(info[1]["revenues"]).toFixed(2)}
                                                        descripcion={"Ingresos totales de este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            )


                                    )
                            }
                            
                        </div>
                        <div className="parte-abajo">
                            <Button colorScheme="green" onClick={goToPerfil} a-key={1}>
                                Ver más
                            </Button>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel h="100%" w="100%">
                    <div className="contenedor-general-resumen">
                        <div className="parte-arriba">
                        {
                                (info[2]["amount"] === 0) ?
                                    (
                                        <div className="card-noInfo">
                                            <div className="cardHeader-noInfo">
                                                <h3>Nada que mostrar</h3>
                                            </div>
                                            <div className="cardBody-noInfo">
                                                <p>Al parece la previsualizacion de este perfil no es posible con los datos analizados.</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        (info[2]["bill amount"] === 0) ?
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[2]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[2]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Total de Factura: "}
                                                        Amount={(info[2]["bill amount"]).toFixed(2)}
                                                        descripcion={"Cantidad total de de factura de los elementos analizados."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Ingresos: "}
                                                        Amount={(info[2]["revenues"]).toFixed(2)}
                                                        descripcion={"Ingresos totales de este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            )


                                    )
                            }
                        </div>
                        <div className="parte-abajo">
                            <Button colorScheme="green" onClick={goToPerfil} a-key={2}>
                                Ver más
                            </Button>
                        </div>
                    </div>
                </TabPanel>

                <TabPanel h="100%" w="100%" >
                    <div className="contenedor-general-resumen">
                        <div className="parte-arriba">
                        {
                                (info[3]["amount"] === 0) ?
                                    (
                                        <div className="card-noInfo">
                                            <div className="cardHeader-noInfo">
                                                <h3>Nada que mostrar</h3>
                                            </div>
                                            <div className="cardBody-noInfo">
                                                <p>Al parece la previsualizacion de este perfil no es posible con los datos analizados.</p>
                                            </div>
                                        </div>
                                    ) :
                                    (
                                        (info[3]["bill amount"] === 0) ?
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[3]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            ) :
                                            (
                                                <>
                                                    <ShowAmount
                                                        Label={"Elementos en grupo actual"}
                                                        Amount={info[3]["amount"]}
                                                        descripcion={"Cantidad total de elementos clasificados en este subgrupo."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Total de Factura: "}
                                                        Amount={(info[3]["bill amount"]).toFixed(2)}
                                                        descripcion={"Cantidad total de de factura de los elementos analizados."}
                                                    ></ShowAmount>
                                                    <ShowAmount
                                                        Label={"Ingresos: "}
                                                        Amount={(info[3]["revenues"]).toFixed(2)}
                                                        descripcion={"Ingresos totales de este subgrupo."}
                                                    ></ShowAmount>
                                                </>
                                            )


                                    )
                            }
                        </div>
                        <div className="parte-abajo">
                            <Button colorScheme="green" onClick={goToPerfil} a-key={3}>
                                Ver más
                            </Button>
                        </div>
                    </div>
                </TabPanel>
            </TabPanels>
        </Tabs>
    );
};

export default TextSlider;
