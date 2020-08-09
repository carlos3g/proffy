import React from "react";

// packages
import { createStackNavigator } from "@react-navigation/stack";

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
    </Navigator>
  );
}

export default StackNavigator;
