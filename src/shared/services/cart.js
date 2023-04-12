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
  deleteOrder: (params) => {
    return callAPI("delete", `orders/${params.id}`)
      .then((res) => res)
      .catch((error) => error);
  },
  payment: (payload) => {
    return callAPI("post", `payments`, payload)
      .then((res) => res)
      .catch((error) => error);
  },
};
