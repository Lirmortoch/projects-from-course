function Meal({ meal, addToCart }) {
  return (
    <div className="meals__meal meal-item">
      <article>
        <img src={`http://localhost:3000/${meal.image}`} alt={meal.name} />
        <div>
          <h3>{meal.name}</h3>
          <p className="meal-item-price">{meal.price}</p>
          <p className="meal-item-description">{meal.description}</p>
        </div>
        <p class="meal-item-actions">
          <button className="button">Add to Cart</button>
        </p>
      </article>
    </div>
  );
}

export default function Meals({ meals }) {
  return (
    <main id="meals" className="meals">
      {
        meals.map(meal => <Meal key={meal.id} meal={meal} />)
      }
    </main>
  )
}