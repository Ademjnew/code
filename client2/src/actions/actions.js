import axios from "axios";
import {LOGOUT, SET_USER} from "./actionConstants";

export function SignInUser(user_data) {
  return (dispatch) => {
    axios.post(`api/login`, user_data).then((res) => {
      let user = res.data;
      localStorage.setItem("Auth", JSON.stringify(user));
      window.location.href = '/layer';
      dispatch({ type: SET_USER, user });
    }).catch((err) => console.log(err));
  };
}

export function logout() {
  // remove user from local storage to log user out
  return (dispatch) => {
    localStorage.removeItem("Auth");
    dispatch({ type: LOGOUT });
  };
}
