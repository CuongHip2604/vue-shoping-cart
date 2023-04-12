import { computed } from "vue";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";

export default function useAddToCart() {
  const authStore = useAuthStore();
  const cartStore = useCartStore();

  const orders = computed(() => cartStore.orders);

  const addToCart = async (product) => {
    const payload = {
      data: {
        quantity: 1,
        total: product.attributes.price,
      },
    };

    const existedOrders = orders.value.filter(
      (order) => order?.attributes?.product?.data.id === product.id
    );

    if (existedOrders.length) {
      payload.data.quantity = ++existedOrders.length;
      payload.data.total = product.attributes.price * payload.data.quantity;
      payload.id = existedOrders[0].id;

      return await cartStore.updateOrder(payload);
    }

    payload.data.product = product.id;
    payload.data.user = authStore.userProfile.id;

    return await cartStore.createOrder(payload);
  };

  return { addToCart };
}
