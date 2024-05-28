import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import { SwalAlert } from "../../../helpers/swals";
import { LoginUserSuccest } from "./LoginSlice";
import Swal from "sweetalert2";



const LoginUserAxios = async(data)=>{
    const {email,password,tipo} = data;
    const body = {
        "email": email,
        "password": password,
        "userType": tipo 
    }
    const rep = await axios.post(`${urlBackend}/auth/login`,body)
    return rep.data
}   



function* LoginUser(action) {
    try {
        const resp = yield call(LoginUserAxios,action.payload)
        Swal.close()
         yield put(LoginUserSuccest(resp))
    } catch (error) {
        SwalAlert("Error",`${error.message}`,"error")
    }
    
}



function* LoginSaga (){
    yield takeEvery('Login/LoginUserProfile', LoginUser)
}

export default LoginSaga;