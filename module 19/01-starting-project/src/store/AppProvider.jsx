import { MealsContextProvider } from "./MealsContext";
import { OrdersContextProvider } from "./OrdersContext";

export default function AppProvider({ children }) {
  return (
    <MealsContextProvider>
      <OrdersContextProvider>{children}</OrdersContextProvider>
    </MealsContextProvider>
  );
}
