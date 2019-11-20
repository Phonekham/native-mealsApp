import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";

import HeaderButton from "../components/HeaderButton";

const FiltersScreen = props => {
  return (
    <View style={styles.screen}>
      <Text>The FiltersScreen meals screen</Text>
    </View>
  );
};

FiltersScreen.navigationOptions = {
  headerTitle: "Filter Meals"
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

FiltersScreen.navigationOptions = navDate => {
  return {
    headerTitle: "Filter Meal",
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

export default FiltersScreen;
