import { callAPI } from "./http-client";

export default {
  register: (params) => {
    return callAPI("post", "auth/local/register", params)
      .then((res) => res)
      .catch((error) => error);
  },
  login: (params) => {
    return callAPI("post", "auth/local", params)
      .then((res) => res)
      .catch((error) => error);
  },
  updateProfile: (id, params) => {
    return callAPI("put", `users/${id}`, params)
      .then((res) => res)
      .catch((error) => error);
  },
  changePassword: (params) => {
    return callAPI("post", "auth/change-password", params)
      .then((res) => res)
      .catch((error) => error);
  },
};
