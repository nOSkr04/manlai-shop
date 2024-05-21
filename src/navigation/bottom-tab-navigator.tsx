/* eslint-disable react/no-unstable-nested-components */
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationRoutes } from "./types";

import { HomeTab } from "../tabs/home";
import { ReelTab } from "../tabs/reel";
// import { ChatTab } from "../tabs/chat";
import { BasketTab } from "../tabs/basket";
import { HomeIcon } from "../components/icons/home";
import { TabBarLabel } from "../components/tab-bar/label";
import { PlayIcon } from "../components/icons/play";
import { Colors } from "../constants/colors";
// import { ChatIcon } from "../components/icons/chat";
import { BasketIcon } from "../components/icons/basket";
import { UserIcon } from "../components/icons/user";
import { AuthTab } from "../tabs/auth";
import { UserApi } from "../api";
import { ProfileTab } from "../tabs/profile";
import { useSelector } from "react-redux";
import { IAuth } from "../interfaces/auth";
import useSWR from "swr";
import { StyleSheet } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { OrderProductTab } from "../tabs/order-product";
import { PrIcon } from "../components/icons/pr-icon";
const Tab = createBottomTabNavigator();

const BottomTabsNavigator = () => {
  const navigate = useNavigation();
  const { accessToken } = useSelector((state: { auth: IAuth }) => state.auth);
  const { data: user } = useSWR(
    ["swr.user.me", accessToken],
    async () => await UserApi.me(),
    {
      shouldRetryOnError: false,
      errorRetryCount   : 0,
    }
  );

  const { data } =useSWR("swr.user.me");

  if(user?.sessionScope === "FORGOT"){
    return navigate.navigate(NavigationRoutes.OtpScreen);
  }

  return (
    <Tab.Navigator
      // initialRouteName={
      //   !user
      //     ? NavigationRoutes.AuthTab
      //     : user?.sessionScope === "FORGOT"
      //       ? NavigationRoutes.OtpTab
      //       : user?.sessionScope === "AUTHORIZED"
      //         ? NavigationRoutes.ProfileTab
      //         : NavigationRoutes.HomeTab
      // }
      initialRouteName={NavigationRoutes.HomeTab}
      screenOptions={{
        headerShown: false,
      }}

    >
      <Tab.Screen
        component={HomeTab}
        name={NavigationRoutes.HomeTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return <HomeIcon focused={focused} />;
          },
          tabBarLabel: ({ focused }) => {
            return <TabBarLabel focused={focused} label="НҮҮР" />;
          },
          // tabBarBadge     : "99",
          tabBarBadgeStyle: styles.badge,
        }}
      />
      <Tab.Screen
        component={ReelTab}
        name={NavigationRoutes.ReelTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <PlayIcon
                color={focused ? Colors.primary : Colors.dark}
                focused={focused}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return <TabBarLabel focused={focused} label="РИЙЛ" />;
          },
          tabBarBadgeStyle: styles.badge,
        }}
      />
      {/* <Tab.Screen
        component={ChatTab}
        name={NavigationRoutes.ChatTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <ChatIcon
                color={focused ? Colors.primary : Colors.dark}
                focused={focused}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return <TabBarLabel focused={focused} label="ЧАТ" />;
          },
          tabBarBadgeStyle: styles.badge,
        }}
      /> */}
      <Tab.Screen
        component={OrderProductTab}
        name={NavigationRoutes.OrderProductTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <PrIcon  color={focused ? Colors.primary : Colors.dark} />
            );
          },
          tabBarLabel: () => {
            return "";
          },
          tabBarBadgeStyle: styles.badge,
        }}
      />
      <Tab.Screen
        component={BasketTab}
        name={NavigationRoutes.BasketTab}
        options={{
          tabBarIcon: ({ focused }) => {
            return (
              <BasketIcon
                color={focused ? Colors.primary : Colors.dark}
                focused={focused}
              />
            );
          },
          tabBarLabel: ({ focused }) => {
            return <TabBarLabel focused={focused} label="САГС" />;
          },
          tabBarBadgeStyle: styles.badge,
          tabBarBadge     : data?.cartProductCount || undefined,
        }}
      />
      {!user && (
        <Tab.Screen
          component={AuthTab}
          name={NavigationRoutes.AuthTab}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <UserIcon
                  color={focused ? Colors.primary : Colors.dark}
                  focused={focused}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return <TabBarLabel focused={focused} label="МИНИЙ" />;
            },
          }}
        />
      )}
      {user?.sessionScope === "AUTHORIZED" && (
        <Tab.Screen
          component={ProfileTab}
          name={NavigationRoutes.ProfileTab}
          options={{
            tabBarIcon: ({ focused }) => {
              return (
                <UserIcon
                  color={focused ? Colors.primary : Colors.dark}
                  focused={focused}
                />
              );
            },
            tabBarLabel: ({ focused }) => {
              return <TabBarLabel focused={focused} label="МИНИЙ" />;
            },
            tabBarBadgeStyle: styles.badge,
          }}
        />
      )}
    </Tab.Navigator>
  );
};

export { BottomTabsNavigator };

const styles = StyleSheet.create({
  badge: {
    fontFamily     : "Monrope700",
    backgroundColor: Colors.primary,
    width          : 20,
    height         : 20,
    fontSize       : 9,
    color          : Colors.white,
    left           : 9,
  },
});
