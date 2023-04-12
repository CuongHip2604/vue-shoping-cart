import { callAPI } from "./http-client";

export default {
  getProducts: (params) => {
    return callAPI("get", "products", { params })
      .then((res) => res)
      .catch((error) => error);
  },
};
