import * as Font from "expo-font";
import { useEffect, useState } from "react";
export default function useCachedResources() {
  const [appIsReady, setAppIsReady] = useState(false);

  useEffect(() => {
    async function prepare() {
      try {
        // Pre-load fonts, make any API calls you need to do here
        await Font.loadAsync({
          Monrope400: require("../assets/font/Manrope-Regular.ttf"),
          Monrope500: require("../assets/font/Manrope-Medium.ttf"),
          Monrope600: require("../assets/font/Manrope-SemiBold.ttf"),
          Monrope700: require("../assets/font/Manrope-Bold.ttf"),
          Monrope800: require("../assets/font/Manrope-ExtraBold.ttf"),
        });
      } catch (e) {
        console.warn(e);
      } finally {
        // Tell the application to render
        setAppIsReady(true);
      }
    }

    prepare();
  }, []);

  return appIsReady;
}
