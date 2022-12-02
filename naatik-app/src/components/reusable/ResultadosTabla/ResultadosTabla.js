import React from 'react'
import './ResultadosTabla.css'
const ResultadosTabla = ({ info }) => {



    return (
        <>
            <div className='contenedor-general-resultados-tabla'>


                <div className='contenedor-titulo-contenedor'>
                    <p> Lines </p>
                </div>

                <div className='show-results-summary-table'>
                    <table className='show-results-table'>
                        <thead className='show-results-table-head'>
                            <tr>
                                <th> {info[0].type} </th>
                                <th> {info[1].type} </th>
                                <th> {info[2].type} </th>
                                <th> SUM_LINES </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>

                                <td className='show-results-table-body-td'> {(info[0].amount).toFixed(2)} </td>
                                <td className='show-results-table-body-td'> {(info[1].amount).toFixed(2)} </td>
                                <td className='show-results-table-body-td'> {(info[2].amount).toFixed(2)} </td>
                                <td className='show-results-table-body-td'> { (info[0].amount + info[1].amount +info[2].amount).toFixed(2) } </td>

                            </tr>
                            
                        </tbody>
                    </table>
                </div>

            </div>
        </>
    )
}

export default ResultadosTabla;