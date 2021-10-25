import axios from "axios";
import { GET_DATA, SET_ERROR, URL } from "../type";

export const getData = () => {
  return async (dispath, getState) => {
    try {
      await axios({ url: URL })
        .then((res) => {
          dispath({ type: GET_DATA, payload: res.data });
        })
        .catch((error) => {
          dispath({ type: SET_ERROR, payload: error.message });
        });
    } catch (error) {
      dispath({ type: SET_ERROR, payload: "error" });
    }
  };
};
