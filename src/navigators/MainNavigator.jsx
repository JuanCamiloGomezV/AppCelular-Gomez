import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigator from "./TabsNavigator";

const MainNavigator = () => {
  const isAuth = false;
  return (
    <NavigationContainer>
      {
         isAuth ? <TabsNavigator /> : <AuthNavigator /> 
      }
    </NavigationContainer>
  );
};

export default MainNavigator;
