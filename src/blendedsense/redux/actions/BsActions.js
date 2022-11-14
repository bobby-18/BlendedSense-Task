
export const login = (data) => {
  return {
    type: "LOGIN_USER",
    payload:data
  };
};
export const logout=()=>{
  return {type:"LOGOUT_USER"}
}