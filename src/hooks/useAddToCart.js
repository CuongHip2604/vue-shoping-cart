import { computed } from "vue";
import { useAuthStore } from "../store/auth";
import { useCartStore } from "../store/cart";
import useToaster from "./useToast";

export default function useAddToCart() {
  const authStore = useAuthStore();
  const cartStore = useCartStore();
  const $toastr = useToaster();

  const orders = computed(() => cartStore.orders);

  const addToCart = async (product, quantity = 1) => {
    const payload = {
      data: {
        quantity,
        total: product.attributes.price * quantity,
      },
    };

    const existedOrders = orders.value.filter(
      (order) => order?.attributes?.product?.data.id === product.id
    );

    if (existedOrders.length) {
      payload.data.quantity = existedOrders.length + quantity;
      payload.data.total = product.attributes.price * payload.data.quantity;
      payload.id = existedOrders[0].id;

      await cartStore.updateOrder(payload);
    } else {
      payload.data.product = product.id;
      payload.data.user = authStore.userProfile.id;

      await cartStore.createOrder(payload);
    }
    $toastr.showSuccess("Add to cart is successfull !");
  };

  return { addToCart };
}
