import { useState, useEffect } from "react";

import Header from "./components/Header";
import Meals from "./components/Meals";

import useResources from './hooks/useResources'

export default function App({}) {
  const [meals, mealsService] = useResources('http://localhost:3000/meals');
  const [orders, ordersService] = useResources('http://localhost:3000/orders')

  return (
    <div>
      <Header />

      <Meals meals={meals} />
    </div>
  );
}