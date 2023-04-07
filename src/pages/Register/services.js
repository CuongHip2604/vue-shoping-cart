import { callAPI } from "../../shared/services/http-client";

export default {
  register: (params) => {
    return callAPI("post", "auth/local/register", params)
      .then((res) => res)
      .catch((error) => error);
  },
};
