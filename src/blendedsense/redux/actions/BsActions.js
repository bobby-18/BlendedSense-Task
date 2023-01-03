export const login = (data) => {
  return {
    type: "LOGIN_USER",
    payload: data,
  };
};
export const logout = () => {
  return { type: "LOGOUT" };
};

export const dashboard = (data) => {
  return {
    type: "DASHBOARD_REFRESH",
    payload: data,
  };
};
export const refresh = (data) => {
  return {
    type: "REFRESH_DATA",
    payload: data,
  };
};

export const sweep = (data) => {
  return {
    type: "SWEEP_DETAILS",
    payload: data,
  };
};

export const equipment = (data) => {
  return {
    type: "SWEEP_EQUIPMENT",
    payload: data,
  };
};

export const businesses = (data) => {
  return {
    type: "BUSINESSES_PROJECTS",
    payload: data,
  };
};
