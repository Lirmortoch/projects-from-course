import { createContext } from "react";
import useResources from "../hooks/useResources";

export const MealsContext = createContext({
  meals: [],
  getMeals: () => {},
});

export function MealsContextProvider({ children }) {
  const [meals, mealsService] = useResources('http://localhost:3000/meals');

  const mealsCtxValue = {
    meals,
    getMeals: mealsService.get,
  }

  return (
    <MealsContext.Provider value={mealsCtxValue}>
      {children}
    </MealsContext.Provider>
  )
}