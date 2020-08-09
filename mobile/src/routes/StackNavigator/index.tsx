import React from "react";

// packages
import { createStackNavigator } from "@react-navigation/stack";

// screens
import LandingScreen from "../../screens/Landing";

const { Navigator, Screen } = createStackNavigator();

function StackNavigator() {
  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Screen name="Landing" component={LandingScreen} />
    </Navigator>
  );
}

export default StackNavigator;
