import React from "react";

// navigation
import { createStackNavigator } from "@react-navigation/stack";
import TabsNavigator from "../TabsNavigator";

// screens
import LandingScreen from "../../screens/Landing";
import GiveClassesScreen from "../../screens/GiveClasses";

const { Navigator, Screen } = createStackNavigator();

function StackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Landing" component={LandingScreen} />
      <Screen name="GiveClasses" component={GiveClassesScreen} />
      <Screen name="Study" component={TabsNavigator} />
    </Navigator>
  );
}

export default StackNavigator;
