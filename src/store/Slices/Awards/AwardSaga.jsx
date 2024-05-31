import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { SwalAlert } from "../../../helpers/swals";
import { obtenerUser } from "../../../helpers/tools_helper";
import { urlBackend } from "../../../helpers/constant";
import { GetHeroeSuccess, getAwards, getAwardsSuccess } from "./AwardSlice";

const getAwardsUserAxios = async()=>{
    const user = obtenerUser();
    if (user.heroes) {
        const rep = await axios.get(`${urlBackend}/mentor/${user.id}`)
        return rep.data.awards;
    } else if (user.mentor) {
        const rep = await axios.get(`${urlBackend}/mentor/${user.mentor.id}`)
        return rep.data.awards;
    }
}   



function* getAwardsUser() {
    try {
        const resp = yield call(getAwardsUserAxios)
         yield put(getAwardsSuccess(resp))
    } catch (error) {
        console.log(error,"error")
        SwalAlert("Error",`${error.response.data.message[0]}`,"error")
    }
    
}

//Update para mentor------------------------------------------------------------------------------

const UpdateAwardsUserAxios = async(award)=>{
    const user = obtenerUser();
    if (user.heroes) {
        const rep = await axios.patch(`${urlBackend}/mentor/${user.id}`,{
            "awards": JSON.stringify(award)
        })
    }
}   



function* UpdateAwardsUser(action) {
    try {
        const resp = yield call(UpdateAwardsUserAxios,action.payload)
         yield put(getAwardsSuccess())
         SwalAlert("Listo","Premios actualizados","success")
         yield put(getAwards())
    } catch (error) {
        console.log(error,"error")
        SwalAlert("Error",`${error.response.data.message[0]}`,"error")
    }
    
}


//-------------------------------


const getHeroUserAxios = async()=>{
    const user = obtenerUser();
     if (user.mentor) {
        const rep = await axios.get(`${urlBackend}/hero/${user.id}`)
        return rep.data;
    }
}   



function* getHeroUser() {
    try {
        const resp = yield call(getHeroUserAxios)
         yield put(GetHeroeSuccess(resp))
    } catch (error) {
        console.log(error,"error")
        SwalAlert("Error",`${error.response.data.message[0]}`,"error")
    }
    
}


function* AwardSaga (){
    yield takeEvery('Award/getAwards', getAwardsUser)
    yield takeEvery('Award/UpdateAwards', UpdateAwardsUser)
    yield takeEvery('Award/GetHeroe', getHeroUser)
}

export default AwardSaga;