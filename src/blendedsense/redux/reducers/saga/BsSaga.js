import { all, call,  put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";
function* login({payload}) {
  try {
    let {data: {token}}= yield call(
    
      axios.post,
      "https://stage.blendedsense.com/api/login",payload.data
    );
        
    yield put({type: "LOGIN_USER_SUCCESS", payload:{token}});
     swal(
       "GoodJob ",
       " login success",
       "success"
     ); 
} catch (error) {
    yield put({ type: "LOGIN_USER_FAILED", message: error.response.data.message });
    swal(
      "Invalid email address or password. ",
      " please try again later",
      "error"
    );
  }
   
}
export function* watchUser() {
  yield all([
    
    takeEvery("LOGIN_USER",login),
  ]);
}