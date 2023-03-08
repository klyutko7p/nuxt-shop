import { defineStore } from "pinia";
import { useToast } from "vue-toastification";

const toast = useToast();

export const useCartStore = defineStore("cart", () => {
  let cart = ref<Array<CartProduct>>([]);
  let sum = ref(0);

  function addProductToCart(product: any) {
    if (cart.value.includes(product)) {
      product.quantity += 1;
      toast.success("Quantity of product will change to +1")
    } else {
      product.quantity = 1;
      cart.value.push(product);
      toast.success("You add product to cart")
    }
  }

  function changeQuantity(sign: string, product: CartProduct) {
    if (cart.value.includes(product)) {
      switch (sign) {
        case "+":
          product.quantity += 1;
          break;

        case "-":
          product.quantity -= 1;
          break;
      }
    }
    actionSum();
  }

  function clearCart() {
    cart.value.length = 0;
    toast.success("Cart is empty now!")
    actionSum();
  }

  function actionSum() {
    sum.value = cart.value.reduce(
      (sum, product) => sum + product.price * product.quantity,
      0
    );
  }

  function deleteProduct(id: any) {
    cart.value.forEach((product, index) => {
      if (product.id === id) {
        cart.value.splice(index, 1);
      }
    });
    toast.warning("Product was deleted from cart")
  }

  const getProductsByCart = computed(() => cart.value);
  const getSumOfProducts = computed(() => sum.value);

  return {
    cart,
    getProductsByCart,
    addProductToCart,
    changeQuantity,
    getSumOfProducts,
    actionSum,
    deleteProduct,
    clearCart,
  };
});
