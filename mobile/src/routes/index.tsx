import React from "react";

// navigators
import StackNavigator from "./StackNavigator";

// navigation
import { NavigationContainer } from "@react-navigation/native";

function Routes() {
  return (
    <NavigationContainer>
      <StackNavigator />
    </NavigationContainer>
  );
}

export default Routes;
