import React from 'react'
import { ListaDesplegable, BoxChurns } from '../../../routeIndex';
import './BarraLateral.css'


const BarraLateral = ({ arrayInfo, clickBtn, Bajo, Medio, Alto, btnActive, warningMessage }) => {
    return (
        <>
            <div className='contenedor-general-barra-lateral'>

                <ListaDesplegable
                    arrContenido={arrayInfo}
                    funcion={clickBtn}
                    buttonAction={btnActive}
                    warMess={warningMessage}
                >
                </ListaDesplegable>


                <BoxChurns
                    BajoEnd={Bajo}
                    MedEnd={Medio}
                    AltoEnd={Alto}
                >
                </BoxChurns>

            </div>
        </>
    )
}

export default BarraLateral;