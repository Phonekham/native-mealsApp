import { MEALS } from "../../data/models/meal";

const initialState = {
  meals: MEALS,
  filteredMeals: MEALS,
  favoriteMeals: []
};

const mealsReducer = (state = initialState, action) => {
  return state;
};

export default mealsReducer;
