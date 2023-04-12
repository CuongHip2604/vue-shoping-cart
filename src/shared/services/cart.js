import { callAPI } from "./http-client";

export default {
  getOrders: (params) => {
    return callAPI("get", "orders", { params })
      .then((res) => res)
      .catch((error) => error);
  },
  createOrder: (payload) => {
    return callAPI("post", "orders", payload)
      .then((res) => res)
      .catch((error) => error);
  },
  updateOrder: (payload) => {
    return callAPI("put", `orders/${payload.id}`, payload)
      .then((res) => res)
      .catch((error) => error);
  },
};
