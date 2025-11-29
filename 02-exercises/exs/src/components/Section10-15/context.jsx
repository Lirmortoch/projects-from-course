import { createContext, useReducer } from "react";

export const exContext = createContext({
  val: 0,
  increaseValue: () => {},
});

function exReducer(state, action) {
  if (action.type === 'INCREASE_VAL') {
    const updatedVal = state.val + 1;
    console.log(updatedVal)

    return {
      ...state,
      val: updatedVal,
    }
  }

  return state;
}

export default function ReducerExProvider({ children }) {
  const [exState, exDispatch] = useReducer(
    exReducer,
    {
      val: 0,
    }
  );

  function handleIncreaseVal() {
    exDispatch({
      type: 'INCREASE_VAL',
    });
  }

  const ctxValue = {
    val: exState.val,
    increaseValue: handleIncreaseVal,
  }

  return <exContext.Provider value={ctxValue}>{children}</exContext.Provider>
}