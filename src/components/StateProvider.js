import { createContext, useReducer, useContext } from "react";

//DATA LAYER
export const StateContext = createContext();

//BUILD THE PROVIDER
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

export const useStateValue = () => useContext(StateContext);
