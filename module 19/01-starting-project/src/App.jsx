import { useState, useEffect } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";

import { getAll } from "./services/meals";

export default function App({}) {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    async function fetchMeals() {
      const meals = await getAll();
      
      setMeals(meals);
    }

    fetchMeals();
  }, []);

  return (
    <div>
      <Header />

      <Meals meals={meals} />
    </div>
  );
}