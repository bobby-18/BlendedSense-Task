import { all, call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";

function* login({ payload }) {
  console.log(payload.data);
  try {
    let {
      data: { token },
    } = yield call(
      axios.post,
      "https://stage.blendedsense.com/api/login",
      payload.data
    );
    localStorage.setItem("token", token);

    yield put({ type: "LOGIN_USER_SUCCESS", payload: { token } });
    payload.navigate("/Dashboard");
  } catch (error) {
    yield put({
      type: "LOGIN_USER_FAILED",
      payload: { error: error.response.data.message },
    });

    swal(
      "Invalid email address or password. ",
      " please try again later",
      "error"
    );
  }
}
function* dashboard({ payload }) {
  console.log(payload);
  let {
    data: { user },
  } = yield call(axios.get, "https://stage.blendedsense.com/api/users/me", {
    headers: { Authorization: `Bearer ${payload.token}` },
  });
  let users = user.role.name;
  console.log(users);
  yield put({ type: "DASHBOARD_SUCCESS", payload: { users } });
}
function* logout() {
  yield put({ type: "LOGOUT_USER" });
}

function* refresh({ payload }) {
  console.log(payload);
  yield put({ type: "REFRESH_SUCCESS", payload });
}
function* sweep({ payload }) {
  console.log(payload);
  let responsee = yield call(
    axios.get,
    "https://stage.blendedsense.com/api/sweepblocks/list",
    {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    }
  );
  let finalResponse = responsee.data.data;
  console.log(finalResponse)
  yield put({ type: "SWEEP_SUCCESS", payload: {finalResponse: finalResponse,token:payload.token } });
}

function* equipment({payload}) {
  console.log(payload)
  let listData = yield call(
    axios.get,
    "https://stage.blendedsense.com/api/sweepblocks/equipment",
    {
      headers: {
        Authorization: `Bearer ${ payload.token }`,
      },
    }
  );
  let finalEquipmentData = listData.data.data;
  console.log(finalEquipmentData);
  yield put({ type: "EQUIPMENT_SUCCESS", payload: {finalEquipmentData: finalEquipmentData,token:payload.token} });
}
export function* WatchUser() {
  yield all([takeEvery("LOGIN_USER", login)]);
  yield all([takeEvery("DASHBOARD_REFRESH", dashboard)]);
  yield all([takeEvery("LOGOUT", logout)]);
  yield all([takeEvery("REFRESH_DATA", refresh)]);
  yield all([takeEvery("SWEEP_DETAILS", sweep)]);
  yield all([takeEvery("SWEEP_EQUIPMENT", equipment)]);
}
