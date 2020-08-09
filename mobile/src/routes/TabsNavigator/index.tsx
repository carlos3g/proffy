import React from "react";

// packages
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// screens
import TeacherListScreen from "../../screens/TeacherList";
import FavoritesScreen from "../../screens/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Navigator>
      <Screen name="TeacherList" component={TeacherListScreen} />
      <Screen name="Favorites" component={FavoritesScreen} />
    </Navigator>
  );
}

export default TabsNavigator;
