import { useToast } from "vue-toast-notification";

export default function useToaster() {
  const $toast = useToast({
    position: "top-right",
    dismissible: true,
  });

  const showError = (message) => {
    return $toast.error(message);
  };

  const showSuccess = (message) => {
    return $toast.success(message);
  };

  return { showError, showSuccess };
}
