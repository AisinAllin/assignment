const initState = {
  authError: null,
};

const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR":
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    case "LOGIN_SUCCESS":
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNOUT_SUCCESS":
      console.log("signout success");
      return state;
    case "SIGNUP_SUCCESS":
      console.log("signup success");
      return {
        ...state,
        authError: null,
      };
    case "SIGNUP_ERROR":
      console.log("signup error");
      return {
        ...state,
        authError: action.err.message,
      };
    case "PASSWORD_CHANGE_SUCCESS":
      console.log("password change success");
      return {
        ...state,
        authError: null,
      };
    case "PASSWORD_CHANGE_ERROR":
      console.log("password change error");
      return {
        ...state,
        authError: "password change failed",
      };
    default:
      return state;
  }
};

export default authReducer;
