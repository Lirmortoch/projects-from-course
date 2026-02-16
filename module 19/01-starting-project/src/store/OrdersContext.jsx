import { createContext } from "react";
import useResources from "../hooks/useResources";

export const OrdersContext = createContext({
  orders: [],
  getOrders: () => {},
  setOrders: () => {},
});

export function OrdersContextProvider({ children }) {
  const [orders, ordersService] = useResources("http://localhost:3000/orders");

  const ordersCtxValue = {
    orders,
    getOrders: ordersService.get,
    createNewOrder: ordersService.create,
  };

  return (
    <OrdersContext.Provider value={ordersCtxValue}>
      {children}
    </OrdersContext.Provider>
  );
}
