import React from 'react'
import PropTypes from 'prop-types';
import { Avatar } from '@mui/material';
import InfoIcon from '@mui/icons-material/Info';
import { SwalAlert } from '../../helpers/swals';
import { Button } from 'reactstrap';
const AwardsList = ({ listado, buyAward }) => {
  return (
    <div className='w-full h-auto grid grid-cols-1 md:grid-cols-autoFit gap-2 mt-5 justify-center '>
      {listado.map((item) => {
        return (
          <div key={`${item.Titulo}-AwardsList`}>
              <div className=' h-[200px] bg-white p-2 box-border shadow-xl flex flex-col items-center justify-start rounded-xl overflow-hidden'>
                <div className='h-[150px] flex justify-center items-center overflow-hidden'>
                  <img className='max-h-[150px]' src={item.UrlImage} />
                </div>
                <div className='w-full text-start font-medium flex '>
                  <p>{item.Coronas}👑</p>
                  <p onClick={() => {
                    SwalAlert('Descripción', `${item.Descripcion}`, 'info')
                  }} className='ml-auto cursor-pointer'><InfoIcon fontSize='10px' /></p>
                </div>
                <div className='w-full text-center font-medium uppercase'>{item.Titulo}</div>
              </div>
              {buyAward ? (<Button onClick={()=>{buyAward(item.Titulo,item.Descripcion,item.Coronas)}} className='w-full h-[30px] rounded-md text-white transition-all bg-red-500 hover:bg-white hover:text-red-500'>Comprar</Button>):null}
          </div>
        )
      })}

    </div>
  )
}

AwardsList.propTypes = {
  listado: PropTypes.any.isRequired,
  buyAward: PropTypes.func

};

export default AwardsList