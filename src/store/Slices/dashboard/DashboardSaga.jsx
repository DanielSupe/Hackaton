import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { getDataDashSuccest } from "./DashboardSlice";
import { obtenerUser } from "../../../helpers/tools_helper";

const getDashboardAxios = async()=>{
    let user = obtenerUser();
    const heroId = user?.heroes?.[0]?.id;
    
    const rep = await axios.get(`${urlBackend}/hero/statistics/${heroId}`);
    return rep.data
}   

function* getDashboard() {
    try {
        const resp = yield call(getDashboardAxios)
        yield put(getDataDashSuccest(resp))
    } catch (error) {
        SwalAlert("Error",`${error.message}`,"error")
    }
    
}

function* DashboardSaga (){
    yield takeEvery('Dashboard/getDataDash', getDashboard)
}

export default DashboardSaga;