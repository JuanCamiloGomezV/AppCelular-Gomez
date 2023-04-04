import AuthNavigator from "./AuthNavigator";
import { NavigationContainer } from "@react-navigation/native";
import React from "react";
import TabsNavigator from "./TabsNavigator";
import { useSelector } from "react-redux";

const MainNavigator = () => {
  const isAuth = useSelector((state) => !!state.auth.token);
  return (
    <NavigationContainer>
      {
         isAuth ? <TabsNavigator /> : <AuthNavigator /> 
      }
    </NavigationContainer>
  );
};

export default MainNavigator;
