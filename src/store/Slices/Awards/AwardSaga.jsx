import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { SwalAlert } from "../../../helpers/swals";
import { obtenerUser } from "../../../helpers/tools_helper";
import { urlBackend } from "../../../helpers/constant";
import { getAwards, getAwardsSuccess } from "./AwardSlice";

const getAwardsUserAxios = async()=>{
    const user = obtenerUser();
    if (user.heroes) {
        const rep = await axios.get(`${urlBackend}/mentor/${user.id}`)
        return rep.data.awards;
    } else if (user.mentor) {
        console.log("")
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



function* AwardSaga (){
    yield takeEvery('Award/getAwards', getAwardsUser)
    yield takeEvery('Award/UpdateAwards', UpdateAwardsUser)
}

export default AwardSaga;