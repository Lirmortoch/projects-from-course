import { MealsContextProvider } from "./MealsContext";
import { OrdersContextProvider } from "./OrdersContext";
import { CartContextProvider } from "./CartContext";

export default function AppProvider({ children }) {
  return (
    <MealsContextProvider>
      <OrdersContextProvider>
        <CartContextProvider>{children}</CartContextProvider>
      </OrdersContextProvider>
    </MealsContextProvider>
  );
}
