import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { LogoutUser } from '../../store/Slices/login/LoginSlice';


const Logout = () => {

    const dispatch = useDispatch();
    const history = useNavigate();
    useEffect(()=>{
        dispatch(LogoutUser())
        history('/')
    },[])



  return null;
  
}

export default Logout