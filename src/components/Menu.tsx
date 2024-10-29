import { menuEng, MenuEng } from "../API/menuEng";
import { useReducer, useState } from "react";

type State = {
  selectedCategory?: string | null;
  filteredItems?: MenuEng[] | undefined;
};

type Action = {
  type: "SET_CATEGORY" | "CLEAR_CATEGORY";
  category?: string;
};

const initialState: State = {
  selectedCategory: null,
  filteredItems: [],
};

function reducer(state: State, action: Action): State {
  switch (action.type) {
    case "SET_CATEGORY":
      return {
        selectedCategory: action.category ?? null,
        filteredItems: menuEng.filter(
          (item) => item.category === action.category
        ),
      };
    case "CLEAR_CATEGORY":
      return initialState;
    default:
      return state;
  }
}

export function Menu() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [removeFirstImg, setRemoveFirstImg] = useState(true);
  const [firstImg, setFirstImg] = useState(true);

  function handleCategoryClick(category: string) {
    setRemoveFirstImg((prev) => !prev);
    setFirstImg((prev) => !prev);
    if (state.selectedCategory === category) {
      dispatch({ type: "CLEAR_CATEGORY" });
    } else {
      dispatch({ type: "SET_CATEGORY", category });
    }
  }

  const categories = Array.from(new Set(menuEng.map((item) => item.category)));

  return (
    <>
      <ul>
        {categories.map((category) => (
          <div key={category}>
            <h1 onClick={() => handleCategoryClick(category)}>{category}</h1>
            {firstImg && (
              <img
                onClick={() => handleCategoryClick(category)}
                src={
                  (removeFirstImg &&
                    menuEng.find((item) => item.category === category)?.img) ||
                  ""
                }
                alt={`Show ${category}`}
              />
            )}
            {state.selectedCategory === category &&
              state.filteredItems?.map((item) => (
                <>
                  <li key={item.id}>{item.name}</li>
                  <img src={item.img} alt={item.name} />
                </>
              ))}
          </div>
        ))}
      </ul>
    </>
  );
}
