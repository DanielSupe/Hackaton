import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { getDataDashSuccest } from "./DashboardSlice";

const getDashboardAxios = async(data)=>{
    const rep = await axios.get(`${urlBackend}/auth/login`)//Pendiente definir ruta
    return rep.data
}   

function* getDashboard(action) {
    try {
        const resp = yield call(getDashboardAxios,action.payload)
        yield put(getDataDashSuccest(resp))
    } catch (error) {
        SwalAlert("Error",`${error.message}`,"error")
    }
    
}

function* DashboardSaga (){
    yield takeEvery('Dashboard/getDataDash', getDashboard)
}

export default DashboardSaga;