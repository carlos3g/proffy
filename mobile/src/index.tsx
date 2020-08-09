import "react-native-gesture-handler";
import React from "react";

// packages
import { StatusBar } from "expo-status-bar";

import Routes from "./routes";

function Main() {
  return (
    <>
      <Routes />
      <StatusBar style="light" />
    </>
  );
}

export default Main;
