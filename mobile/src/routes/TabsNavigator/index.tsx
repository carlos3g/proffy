import React from "react";

// navigation
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

// packages
import { Ionicons } from "@expo/vector-icons";

// screens
import TeacherListScreen from "../../screens/TeacherList";
import FavoritesScreen from "../../screens/Favorites";

const { Navigator, Screen } = createBottomTabNavigator();

function TabsNavigator() {
  return (
    <Navigator
      tabBarOptions={{
        style: {
          elevation: 0,
          shadowOpacity: 0,
          height: 64,
        },
        tabStyle: {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        },
        iconStyle: {
          flex: 0,
          width: 20,
          height: 20,
        },
        labelStyle: {
          fontFamily: "Archivo_700Bold",
          fontSize: 13,
          marginLeft: 16,
        },
        inactiveBackgroundColor: "#fafafc",
        activeBackgroundColor: "#ebebf5",
        inactiveTintColor: "#c1bccc",
        activeTintColor: "#32264d",
      }}
    >
      <Screen
        name="TeacherList"
        component={TeacherListScreen}
        options={{
          tabBarLabel: "Proffys",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-easel" size={size} color={color} />
          ),
        }}
      />
      <Screen
        name="Favorites"
        component={FavoritesScreen}
        options={{
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="ios-heart" size={size} color={color} />
          ),
        }}
      />
    </Navigator>
  );
}

export default TabsNavigator;
