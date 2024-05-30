import React, { useEffect } from 'react'
import { obtenerUser } from '../../helpers/tools_helper'
import { useNavigate } from 'react-router-dom'
import { Outlet } from 'react-router-dom';
const LayautHero = () => {

    const history = useNavigate();

    {/**useEffect(()=>{
        const user = obtenerUser()
        if(!user?.heroes){
            history("/")
        }
    },[])**/}

  return (
    <><Outlet/></>
  )
}

export default LayautHero;