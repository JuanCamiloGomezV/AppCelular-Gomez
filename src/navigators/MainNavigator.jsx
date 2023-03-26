import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigator from "./TabsNavigator";

const MainNavigator = () => {
  return (
    <NavigationContainer>
      <TabsNavigator />
    </NavigationContainer>
  );
};

export default MainNavigator;
