import axios from "axios";
import { useAuthStore } from "../../store/auth";

const axiosInstance = axios.create({
  headers: {
    Accept: "applications/json",
    "Content-Type": "application/json",
  },
  baseURL: "https://edison-shipping-api.savvycom.xyz/api/",
});

axiosInstance.interceptors.request.use(
  async (config) => {
    // Do something before request is sent
    const authStore = useAuthStore();
    const token = authStore.jwt || "";

    if (token) {
      config.headers["Authorization"] = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const callAPI = (method, path, body, config = {}) => {
  let res = null;
  switch (method) {
    case "get":
      // in case GET method: body is config
      res = axiosInstance[method](path, body || config);
      break;
    default:
      res = axiosInstance[method](path, body, config);
  }

  return res
    .then((resp) => {
      return resp;
    })
    .catch(async (error) => {
      switch (error.response?.status) {
        case 400: // Wrong url or params
        case 404: // Nor found
        case 500: // Server error
        case 409: // Conflict
          break;
        case 403: // Forbidden
          break;
        case 401: // Unauthorize
          break;
        default:
          throw error;
      }

      throw error.response.data;
    });
};
