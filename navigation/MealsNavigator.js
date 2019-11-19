import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";

import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
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

const MealsFavTabNavigator = createBottomTabNavigator({
  Meals: MealNavigator,
  Favorite: FavoritesScreen
});

export default createAppContainer(MealsFavTabNavigator);
