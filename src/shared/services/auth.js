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
};
