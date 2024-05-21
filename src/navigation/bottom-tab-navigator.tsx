/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes } from "./types";
import { HomeTab } from "../tabs/home";
import { Colors } from "../constants/colors";
import { StyleSheet } from "react-native";

const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName={NavigationRoutes.HomeTab}
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tab.Screen component={HomeTab} name={NavigationRoutes.HomeTab} />
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };

const styles = StyleSheet.create({
  badge: {
    fontFamily: "Monrope700",
    backgroundColor: Colors.primary,
    width: 20,
    height: 20,
    fontSize: 9,
    color: Colors.white,
    left: 9,
  },
});
