import React, { useCallback } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { SWRConfig } from "swr";
import {
  AppState,
  AppStateStatus,
  StatusBar,
  StyleSheet,
  View,
} from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "./src/navigation/navigation-container";
import useCachedResources from "./src/hooks/use-cached-resources";
import { persistor, store } from "./src/store";
import { BottomSheetModalProvider } from "@gorhom/bottom-sheet";
import Toast from "react-native-toast-message";
import * as SplashScreen from "expo-splash-screen";
import { RootSiblingParent } from "react-native-root-siblings";
import { useUpdates } from "./src/hooks/use-update";

SplashScreen.preventAutoHideAsync();

const App = () => {
  const appIsReady = useCachedResources();

  const onLayoutRootView = useCallback(async () => {
    if (appIsReady) {
      await SplashScreen.hideAsync();
    }
  }, [appIsReady]);

  useUpdates();

  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <SWRConfig
          value={{
            provider: () => new Map(),
            initFocus(callback) {
              let appState = AppState.currentState;

              const handleAppStateChange = (nextAppState: AppStateStatus) => {
                if (
                  appState.match(/inactive|background/) &&
                  nextAppState === "active"
                ) {
                  callback();
                }
                appState = nextAppState;
              };

              const subscription = AppState.addEventListener(
                "change",
                handleAppStateChange
              );

              return () => {
                subscription.remove();
              };
            },
          }}
        >
          <SafeAreaProvider>
              <GestureHandlerRootView style={styles.container}>
                <View onLayout={onLayoutRootView} style={styles.container}>
                  <RootSiblingParent>
                    <BottomSheetModalProvider>
                      <NavigationContainer />
                      <Toast />
                      <StatusBar barStyle="dark-content" />
                    </BottomSheetModalProvider>
                  </RootSiblingParent>
                </View>
              </GestureHandlerRootView>
          </SafeAreaProvider>
        </SWRConfig>
      </PersistGate>
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
