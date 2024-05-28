import React, { useEffect } from 'react';
import { obtenerUser } from '../helpers/tools_helper';
import { useNavigate } from 'react-router-dom';

const Inicio = () => {
    const navigate = useNavigate();
    const user = obtenerUser();

    useEffect(() => {
        if (user.heroes) {
            navigate('/Inicio/Mentor');
        } else if (user.mentor) {
            navigate('/Inicio/Heroe');
        } else {
            navigate('/');
        }
    }, [navigate, user]);

    return null;
}

export default Inicio;
