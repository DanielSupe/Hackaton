import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { getLogsHeroSuccest } from "./LogsHeroSlice";
import { obtenerUser } from "../../../helpers/tools_helper";

const getLogsHeroAxios = async()=>{
    let user = obtenerUser();
    const heroId = user?.heroes?.[0]?.id;
    
    const rep = await axios.get(`${urlBackend}/logs-transaction/hero/${heroId}`);
    return rep.data
}   

function* getLogsHeroFunction() {
    try {
        const resp = yield call(getLogsHeroAxios)
        yield put(getLogsHeroSuccest(resp))
    } catch (error) {
        SwalAlert("Error",`${error.message}`,"error")
    }
}

function* LogsHeroSaga (){
    yield takeEvery('LogsHero/getLogsHero', getLogsHeroFunction)
}

export default LogsHeroSaga;