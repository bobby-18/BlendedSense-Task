const initialState = {
  user: null,
  token: null,
  sweep: [],
  equipment: [],
  projects: [],
};

export const BsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "LOGIN_USER_SUCCESS": {
      const newState = { ...state };
      newState.token = payload.token;
      return newState;
    }
    case "LOGIN_USER_FAILED": {
      const newState = { ...state };
      return newState;
    }
    case "DASHBOARD_SUCCESS": {
      const newState = { ...state };
      newState.user = payload.users;
      return newState;
    }
    case "LOGOUT_USER": {
      return (state = initialState);
    }
    case "REFRESH_SUCCESS": {
      const newState = { ...state };
      newState.token = payload.token;
      return newState;
    }
    case "SWEEP_SUCCESS": {
      const newState = { ...state };
      newState.token = payload.token;
      newState.sweep = payload.finalResponse;
      console.log(newState);
      return newState;
    }
    case "EQUIPMENT_SUCCESS": {
      const newState = { ...state };
      newState.token = payload.token;
      newState.equipment = payload.finalEquipmentData;
      console.log(newState);
      return newState;
    }
    case "BUSINESSES_SUCCESS": {
      const newState = { ...state };
      newState.token = payload.token;
      newState.projects = payload.finalProjectsListData;
      return newState;
    }
    default:
      const newState = { ...state };
      return (state = newState);
  }
};
