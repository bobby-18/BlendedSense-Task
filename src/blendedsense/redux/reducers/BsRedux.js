const initialState = {
  token: null,
};

export const BsReducer = (state = initialState, action) => {
     const { type, payload } = action;
    
  switch (type) {
    
    case "LOGIN_USER_SUCCESS":
      {
        const newState = { ...state };
      newState.token = payload.token;
  
        return newState;
      }
    case "LOGIN_USER_FAILED":
       {
         const newState = { ...state };
         return newState;
       }
    
    default:
   const newState = { ...state };
            return state=newState;
  }
};
