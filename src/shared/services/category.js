import { callAPI } from "./http-client";

export default {
  getCategories: () => {
    return callAPI("get", "categories?populate=products")
      .then((res) => res)
      .catch((error) => error);
  },
};
