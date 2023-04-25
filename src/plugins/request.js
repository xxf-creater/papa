import axios from "axios";
axios.defaults.baseURL = '';
axios.defaults.withCredentials = true;
axios.defaults.headers.common["Content-Type"] = "application/json;";
var request = axios.create();
request.interceptors.request.use(config => {
  config.data = { ...config.data };
  return config;
});
request.interceptors.response.use(
  response => {
    return Promise.resolve({ err: false, data: response.data });
  },
  error => {
    if (!error.response) {
      return Promise.resolve({ err: true, data: error });
    } else if (error.response.status === 401) {
      return Promise.resolve({ err: true, data: { message: "登录失效" } });
    } else {
      return Promise.resolve({ err: true, data: error.response.data });
    }
  }
);

export default request;