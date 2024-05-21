import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { NavigationRoutes, RootStackParamList } from "./types";
import { BottomTabsNavigator } from "./bottom-tab-navigator";

import HomeScreen from "../screens/home";
const Stack = createNativeStackNavigator<RootStackParamList>();
const { Navigator, Screen } = Stack;

const RootStackNavigator = () => {
  const navigationOptions = () => {
    return { headerShown: false };
  };

  return (
    <Navigator
      initialRouteName={NavigationRoutes.Root}
      screenOptions={navigationOptions}
    >
      <Screen component={BottomTabsNavigator} name={NavigationRoutes.Root} />
      <Screen component={HomeScreen} name={NavigationRoutes.HomeScreen} />
    </Navigator>
  );
};

export { RootStackNavigator };
