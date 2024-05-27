import axios from "axios";
import {put, call, takeEvery, takeLatest} from "redux-saga/effects"
import { urlBackend } from "../../../helpers/constant";
import {RegisterUserHeroeSuccess, RegisterUserMentorFail,RegisterUserMentorSuccess} from "./RegisterSlice";
import { SwalAlert } from "../../../helpers/swals";


const RegisterUserMentorAxios = async(data)=>{
    const {usernameMentor,emailMentor,passwordMentor} = data;
    const body = {
        "username": usernameMentor,
        "password": passwordMentor,
        "email": emailMentor
    }
    const rep = await axios.post(`${urlBackend}/auth/register/mentor`,body)
    return rep.data.id
}   



function* RegisterUserMentorProfile(action) {
    try {
        const resp = yield call(RegisterUserMentorAxios,action.payload)
         yield put(RegisterUserMentorSuccess(resp))
         SwalAlert("Success","Created Mentor","success")
    } catch (error) {
        SwalAlert("Error","Mentor was not created","error")
    }
    
}

//Heroe---------------------------------------------------------------

const RegisterUserHeroeAxios = async(data)=>{
    const {usernameHero,emailHero,passwordHero,role,idpadre} = data;
    const body = {
            "username":usernameHero,
            "password": passwordHero,
            "email": emailHero,
            "rol": role,
            "mentorId": Number(idpadre)
    }
    const rep = await axios.post(`${urlBackend}/auth/register/hero`,body)
    return rep.data
}   



function* RegisterUserHeroeProfile(action) {
    try {
        const resp = yield call(RegisterUserHeroeAxios,action.payload)
         yield put(RegisterUserHeroeSuccess(resp))
         SwalAlert("Success","Created Heroe","success")
    } catch (error) {
        SwalAlert("Error","Heroe was not created","error")
    }
    
}



function* RegisterSaga (){
    yield takeEvery('Register/RegisterUserMentor', RegisterUserMentorProfile)
    yield takeEvery('Register/RegisterUserHeroe', RegisterUserHeroeProfile)
}

export default RegisterSaga;