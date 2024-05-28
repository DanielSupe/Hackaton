export const obtenerUser = ()=>{
    const user = JSON.parse(localStorage.getItem("USER"));
    return user;
}