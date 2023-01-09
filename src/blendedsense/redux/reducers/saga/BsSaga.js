import { all, call, put, takeLatest, delay } from "redux-saga/effects";
import axios from "axios";
import swal from "sweetalert";

function* login({ payload }) {
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
  console.log(finalResponse);
  yield put({
    type: "SWEEP_SUCCESS",
    payload: { finalResponse: finalResponse, token: payload.token },
  });
}

function* equipment({ payload }) {
  let listData = yield call(
    axios.get,
    "https://stage.blendedsense.com/api/sweepblocks/equipment",
    {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    }
  );
  let finalEquipmentData = listData.data.data;
  console.log(finalEquipmentData);
  yield put({
    type: "EQUIPMENT_SUCCESS",
    payload: { finalEquipmentData: finalEquipmentData, token: payload.token },
  });
}
function* businesses({ payload }) {
  let projectsListData = yield call(
    axios.get,
    "https://stage.blendedsense.com/api/projects/businesses/list?status=1",
    {
      headers: {
        Authorization: `Bearer ${payload.token}`,
      },
    }
  );
  console.log("project data", projectsListData);

  let finalProjectsListData = projectsListData.data.businesses;
  console.log(finalProjectsListData);
  yield put({
    type: "BUSINESSES_SUCCESS",
    payload: {
      finalProjectsListData: finalProjectsListData,
      token: payload.token,
    },
  });
}

export function* WatchUser() {
  yield all([takeLatest("LOGIN_USER", login)]);
  yield all([takeLatest("DASHBOARD_REFRESH", dashboard)]);
  yield all([takeLatest("SWEEP_DETAILS", sweep)]);
  yield all([takeLatest("SWEEP_EQUIPMENT", equipment)]);
  yield all([takeLatest("BUSINESSES_PROJECTS", businesses)]);
  yield all([takeLatest("REFRESH_DATA", refresh)]);
  yield all([takeLatest("LOGOUT", logout)]);
}
