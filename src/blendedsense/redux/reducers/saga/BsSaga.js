import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";
function* login({ payload }) {
    console.log(payload.data)
  try {
    let {
      data: { token},
    } = yield call( axios.post, "https://stage.blendedsense.com/api/login", payload.data
      
    );
  
    localStorage.setItem("token", token);
       const token1 = localStorage.getItem("token");
        let { data: { user  } } = yield call(axios.get, 'https://stage.blendedsense.com/api/users/me', {headers : { Authorization: `Bearer ${token1}` }});
      let users=user.role.name;
      console.log(users)
      localStorage.setItem("name",users)
       console.log("login", payload);
    yield put({ type: "LOGIN_USER_SUCCESS", payload: { token,users} });
     payload.navigate("/Dashboard");
  } catch (error) {
    yield put({ type: "LOGIN_USER_FAILED",payload: { error: error.response.data.message }});

    swal(
      "Invalid email address or password. ",
      " please try again later",
      "error"
    );
  }
}
export function* WatchUser() {
  yield all([takeEvery("LOGIN_USER", login)]);
}
