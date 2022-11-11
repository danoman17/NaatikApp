import React from 'react'
import './ResultadosTabla.css'
const ResultadosTabla = () => {
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
                            <th> Dato1 </th>
                            <th> Dato2 </th>
                            <th> Dato3 </th>
                            <th> Dato4 </th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                                    
                            <td className='show-results-table-body-td'> cantidad </td>
                            <td className='show-results-table-body-td'> cantidad </td>
                            <td className='show-results-table-body-td'> cantidad </td>
                            <td className='show-results-table-body-td'> cantidad </td>
                            
                        </tr>
                        <tr>
                                    
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    
                                </tr>
                                <tr>
                                    
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    
                                </tr>
                                <tr>
                                    
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    <td className='show-results-table-body-td'> cantidad </td>
                                    
                                </tr>
                    </tbody>
                </table>
            </div>

        </div>
    </>
  )
}

export default ResultadosTabla;