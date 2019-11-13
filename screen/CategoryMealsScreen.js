import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

import { CATEGORIES } from "../data/dummy-data";

const CategoryMealsScreen = props => {
  const catId = props.navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find(cat => cat.id === catId);
  return (
    <View style={styles.screen}>
      <Text>The categories meals screen</Text>
      <Text>{selectedCategory.title}</Text>
      <Button
        title="Go to Details"
        onPress={() => {
          props.navigation.navigate({
            routeName: "MealDetail"
          });
        }}
      ></Button>
      <Button
        title="Go back"
        onPress={() => {
          props.navigation.goBack();
        }}
      ></Button>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CategoryMealsScreen;
