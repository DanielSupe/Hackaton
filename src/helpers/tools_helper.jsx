export const obtenerUser = ()=>{
    const user = JSON.parse(localStorage.getItem("USER"));
    return user;
}

export const obtenerUrlImageRol = ()=>{
    const {rol} = JSON.parse(localStorage.getItem("USER"));
    switch(rol){
        case "mago":
            return "/Images/HomeHeroe/magoF.png"
        case "guerrero":
            return "/Images/HomeHeroe/guerreroF.png"
        case "caballero":
            return "/Images/HomeHeroe/caballeroF.png"
        case "arquero":
            return "/Images/HomeHeroe/arqueroF.png"
    }
}   
