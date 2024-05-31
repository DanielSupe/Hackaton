import React from 'react';
import PropTypes from 'prop-types';
import DeleteIcon from '@mui/icons-material/Delete';
import ClearIcon from '@mui/icons-material/Clear';
const TableH = ({ headers,data,deleteFile }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full bg-[#f4f4f4] border-collapse border border-gray-300">
        <thead>
          <tr className='hover:bg-gray-100'>
            {headers.map((key) => {
                return(
                  <th key={`${key}-encabezadoo`} className="px-4 py-2 border border-gray-300 bg-gray-800 text-left text-white font-medium">
                  {key}
                </th>
                )

            })}
            <th className="px-4 py-2 border border-gray-300 bg-red-500 text-left text-white font-medium flex">
                  Eliminar
                  <ClearIcon/>
                </th>
          </tr>
        </thead>
        <tbody>
            {data.map((item)=>{
                return(
                    <tr key={item.Titulo}>
                        {headers.map((header)=>{
                            return(
                                <td className="px-4 py-2 border border-gray-300  text-gray-600 max-w-72 overflow-hidden" key={`${item.Titulo}-${item[header]}`}>{item[header]}</td>
                            )
                        })}
                        <td onClick={()=>{deleteFile(item.Titulo)}} className="px-4 py-2 border border-gray-300  text-gray-600 cursor-pointer"><DeleteIcon/></td>
                    </tr>
                )
            })}
        </tbody>
      </table>
    </div>
  );
};


TableH.propTypes = {
    headers: PropTypes.any.isRequired,
    data:PropTypes.any.isRequired,
    deleteFile: PropTypes.func
  };

export default TableH;