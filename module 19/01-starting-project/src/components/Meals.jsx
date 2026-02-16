import { useContext } from "react";
import { MealsContext } from "../store/MealsContext";

function Meal({ meal, addToCart }) {
  return (
    <div className="meals__meal meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">${meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p className="meal-item-actions">
          <button
            className="button"
            onClick={() =>
              addToCart({
                meal,
                amount: 1,
              })
            }
          >
            Add to Cart
          </button>
        </p>
      </article>
    </div>
  );
}

export default function Meals({ addToCart }) {
  const { meals } = useContext(MealsContext);

  return (
    <main id="meals" className="meals">
      {meals.map((meal) => (
        <Meal key={meal.id} meal={meal} addToCart={addToCart} />
      ))}
    </main>
  );
}
