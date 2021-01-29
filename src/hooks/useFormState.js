import { useState } from "react";

import initialState from "../context/AppContext";

const useFormState = () => {
  const [state, setState] = useState(initialState);

  //   Guardar nombre
  const setName = (payload) => {
    setState({
      ...state,
      name: payload
    });
  };

  //   Guardar edad
  const setAge = (payload) => {
    setState({
      ...state,
      age: payload
    });
  };

  //    Guardar email
  const setEmail = (payload) => {
    setState({
      ...state,
      email: payload
    });
  };

  return {
    setName,
    setAge,
    setEmail,
    state
  };
};

export default useFormState;
