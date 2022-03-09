import Cookies from "js-cookie";
import { createContext, useReducer } from "react";

export const Store = createContext();
const initialState = {
  exampleInfo: Cookies.get("exampleInfo")
    ? JSON.parse(Cookies.get("exampleInfo"))
    : null,
};

function reducer(state, action) {
  switch (action.type) {
    case "EXAMPLE_ACTION":
      Cookies.set("exampleInfo", JSON.stringify(action.payload));
      return { ...state, exampleInfo: action.payload };
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children}</Store.Provider>;
}
