import axios from 'axios';

import {actionCreator} from "./reducer/user/user";

const createAPI = (dispatch) => {
  const api = axios.create({
    baseURL: `https://es31-server.appspot.com/six-cities`,
    timeout: 5000,
    withCredentials: true,
  });

  const onSuccess = (response) => response;
  const onFail = (err) => {
    if (err.response.status === 403) {
      dispatch(actionCreator.requireAuthorization(true));
    }
    return err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};

export default createAPI;