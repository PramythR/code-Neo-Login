import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const intialState = {
  users: [],
  regUsers: [],
};

export const GlobalContext = createContext(intialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, intialState);

  const LoginUser = (user) => {
    dispatch({
      type: "LOGIN_USER",
      payload: user,
    });
  };
  const RegisterUser = (user) => {
    dispatch({
      type: "REGISTER_USER",
      payload: user,
    });
  };

  return (
    <GlobalContext.Provider
      value={{
        users: state.users,
        RegisterUser,
        LoginUser,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
