/* eslint-disable no-unused-vars */
import { NavigatorScreenParams } from "@react-navigation/native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Dispatch, SetStateAction } from "react";
export enum NavigationRoutes {
  RootStackParamList = "RootStackParamList",
  Root = "Root",

  // Tabs
  HomeTab = "HomeTab",

  HomeScreen = "HomeScreen",
  LoginCheckSheet = "LoginCheckSheet",
}

export type RootStackParamList = {
  Root: NavigatorScreenParams<BottomTabParamList> | undefined;
  HomeScreen: undefined;
};

export type BottomTabParamList = {
  HomeTab: undefined;
};

export type BottomSheetParamList = {
  RootStackParamList: undefined;
  LoginCheckSheet: undefined;
};

export type RootStackScreenProps<T extends keyof RootStackParamList> =
  NativeStackScreenProps<RootStackParamList, T>;
export type BottomTabScreenProps<T extends keyof BottomTabParamList> =
  NativeStackScreenProps<BottomTabParamList, T>;
export type BottomSheetScreenProps<T extends keyof BottomSheetParamList> =
  NativeStackScreenProps<BottomSheetParamList, T>;

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
    interface RootParamList extends BottomSheetParamList {}
  }
}
