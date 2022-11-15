const initialState = {
  user:null,
  token: null,
};

export const BsReducer = (state = initialState, action) => {
     const { type, payload } = action;
    
  switch (type) {
    
    case "LOGIN_USER_SUCCESS":
      {
     
        const newState = { ...state };
        newState.user=payload.users
      
        newState.token = payload.token; 
      console.log(newState);
      
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
