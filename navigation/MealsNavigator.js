import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";

import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import Color from "../constants/Color";

const MealNavigator = createStackNavigator(
  {
    Categories: {
      screen: CategoriesScreen
    },
    CategoryMeals: {
      screen: CategoryMealsScreen
    },
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: "MealDetail",
    mode: "modal",
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: Color.primaryColor
      },
      headerTintColor: "white",
      headerTitle: "A Screen"
    }
  }
);

export default createAppContainer(MealNavigator);
