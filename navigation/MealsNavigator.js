import React from "react";
import { Platform } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "react-navigation-material-bottom-tabs";

import CategoriesScreen from "../screen/CategoriesScreen";
import CategoryMealsScreen from "../screen/CategoryMealsScreen";
import MealDetailScreen from "../screen/MealDetailScreen";
import FavoritesScreen from "../screen/FavoritesScreen";
import FiltersSreen from "../screen/FiltersScreen";
import Color from "../constants/Color";

const defaultStackNavOptions = {
  headerStyle: {
    backgroundColor: Color.primaryColor
  },
  headerTintColor: "white",
  headerTitle: "A Screen"
};

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
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const FavNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetail: MealDetailScreen
  },
  {
    // initialRouteName: "MealDetail",
    mode: "modal",
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const tabScreenConfig = {
  Meals: {
    screen: MealNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-restaurant"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Color.primaryColor
    }
  },
  Favorite: {
    screen: FavNavigator,
    navigationOptions: {
      tabBarIcon: tabInfo => {
        return (
          <Ionicons
            name="ios-star"
            size={25}
            color={tabInfo.tintColor}
          ></Ionicons>
        );
      },
      tabBarColor: Color.accentColor
    }
  }
};

const MealsFavTabNavigator =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator(tabScreenConfig, {
        activeTintColor: "white",
        shifting: true
      })
    : createBottomTabNavigator(tabScreenConfig, {
        tabBarOptions: {
          activeTintColor: Color.accentColor
        }
      });

const FilterNavigator = createStackNavigator(
  {
    Filters: FiltersSreen
  },
  {
    // navigationOptions: {
    //   drawerLabel: "Filters"
    // },
    defaultNavigationOptions: defaultStackNavOptions
  }
);

const MainNavigator = createDrawerNavigator(
  {
    MealsFav: {
      screen: MealsFavTabNavigator,
      navigationOptions: {
        drawerLabel: "Meals"
      }
    },
    Filters: FilterNavigator
  },
  {
    contentOptions: {
      activeTintColor: Color.accentColor,
      labelStyle: {
        fontFamily: "open-sans-bold"
      }
    }
  }
);

export default createAppContainer(MainNavigator);
