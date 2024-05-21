import { createBottomSheetNavigator } from "@th3rdwave/react-navigation-bottom-sheet";
import { BottomSheetParamList, NavigationRoutes } from "./types";
import React from "react";

import { useSafeAreaInsets } from "react-native-safe-area-context";
import { RootStackNavigator } from "./root-stack-navigator";

import { LoginCheckSheet } from "../sheets/login-check";

const BottomSheet = createBottomSheetNavigator<BottomSheetParamList>();

const { Navigator, Screen } = BottomSheet;

const BottomSheetNavigator = () => {
  const insets = useSafeAreaInsets();
  return (
    <Navigator>
      <Screen
        component={RootStackNavigator}
        name={NavigationRoutes.RootStackParamList}
      />
      <Screen
        component={LoginCheckSheet}
        name={NavigationRoutes.LoginCheckSheet}
        options={{
          // backdropComponent: SheetBackdrop,
          snapPoints: ["90%"],
          index: 1,
          topInset: insets.top,
        }}
      />
    </Navigator>
  );
};

export { BottomSheetNavigator };
