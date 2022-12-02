import React from 'react'
import { ListaDesplegable, BoxChurns } from '../../../routeIndex';
import './BarraLateral.css'


const BarraLateral = ({ arrayInfo, clickBtn, Bajo, Medio, Alto, btnActive, warningMessage, activeBtn=0 }) => {
    return (
        <>
            <div className='contenedor-general-barra-lateral'>

                <ListaDesplegable
                    arrContenido={arrayInfo}
                    funcion={clickBtn}
                    buttonAction={btnActive}
                    warMess={warningMessage}
                    currentActive={activeBtn}
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