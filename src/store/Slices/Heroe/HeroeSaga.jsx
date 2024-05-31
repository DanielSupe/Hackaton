import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { SwalAlert } from "../../../helpers/swals";
import { obtenerUser } from "../../../helpers/tools_helper";
import { urlBackend } from "../../../helpers/constant";
import { buyAwardSuccess } from "./HeroeSlice";


//Update para mentor------------------------------------------------------------------------------

const buyAwardAxios = async(premio)=>{

    const {Titulo,Descripcion,Coronas} = premio;

    const user = obtenerUser();

    const objt = {
        "heroid": user.id,
        "numCrowns": Number(Coronas),
        "message": `${Titulo}-${Descripcion}`

    }

        const rep = await axios.post(`${urlBackend}/hero/buyAwards`,objt)
        return rep.data
}   



function* buyAward(action) {
    try {
        const resp = yield call(buyAwardAxios,action.payload)
        console.log("nuevo USERRRR", resp)
         yield put(buyAwardSuccess())
         SwalAlert("Listo","Premio Reclamado! ve con tu mentor","success")
    } catch (error) {
        SwalAlert("Error",`${error.response.data.message}`,"error")
    }
    
}



function* HeroeSaga (){
    yield takeEvery('Heroe/buyAward', buyAward)
}

export default HeroeSaga;