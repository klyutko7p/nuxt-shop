import { defineStore } from "pinia";

export const useOrdersStore = defineStore("orders", () => {
  let orders = ref<Array<Order>>([]);
  let order = ref(<Order>{});

  function getRandomInt(max: number) {
    return Math.floor(Math.random() * max);
  }

  function addOrder(products: Array<CartProduct>, orderId: number) {
    let order = {
      orderId: orderId,
      products: products,
    };
    orders.value.push(order);
  }

  async function findOrder(orderId: number) {
    orders.value.forEach((cycleOrder) => {
      if (cycleOrder.orderId === orderId) {
        order.value = cycleOrder;
      }
    });
  }

  const getOrders = computed(() => orders.value);
  const getOrder = computed(() => order.value);

  return { addOrder, getOrders, getOrder, getRandomInt, findOrder };
});
