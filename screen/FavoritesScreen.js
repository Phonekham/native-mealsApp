import React from "react";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import MealList from "../components/MealList";
import { MEALS } from "../data/dummy-data";
import HeaderButton from "../components/HeaderButton";

const FavoritesScreen = props => {
  const favMeal = MEALS.filter(meal => meal.id === "m1" || meal.id === "m2");
  return <MealList listData={favMeal} navigation={props.navigation}></MealList>;
};

FavoritesScreen.navigationOptions = navDate => {
  return {
    headerTitle: "Your Favorites",
    headerLeft: (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item
          title="Menu"
          iconName="ios-menu"
          onPress={() => {
            navDate.navigation.toggleDrawer();
          }}
        ></Item>
      </HeaderButtons>
    )
  };
};

export default FavoritesScreen;
