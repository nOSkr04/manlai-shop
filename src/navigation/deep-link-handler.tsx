import { useCallback, useEffect } from "react";
import { Linking } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { NavigationRoutes } from "./types";
import CryptoJS from "crypto-js";

const config = {
    secretKey: "06fb9dfc158867ba4bf5f43b1f9d1f3283df56df48ea7d331a94f95ac9510df1",
    iv       : "XgB64LoTgY9R+QKxR8Ph5w==",
};

export const decryptString = async (value: string) => {
    const decryptedBytes = CryptoJS.AES.decrypt(
      value,
      CryptoJS.enc.Hex.parse(config.secretKey),
      {
        iv: CryptoJS.enc.Base64.parse(config.iv),
      },
    );
    const decryptedJsonStr = decryptedBytes.toString(CryptoJS.enc.Utf8);
    const res = JSON.parse(decryptedJsonStr);
    return res;
  };

const DeepLinkHandler = () => {
  const navigation = useNavigation();
  const handleDeepLink = useCallback(
    async (url: string) => {
      // 661bc9340df7705de0d5e24f
      if (url.startsWith("emall://product")) {
        const match = url.match(/id=([^&]+)/);
        const res = match ? decodeURIComponent(match[1]) : null;
        const decryptId = await decryptString(decodeURIComponent(res + ""));
        navigation.navigate(NavigationRoutes.ProductDetailScreen, {
          id: decryptId._id,
        });
      }
      if (url.startsWith("emall://reel")) {
        const match = url.match(/id=([^&]+)/);
        const res = match ? decodeURIComponent(match[1]) : null;
        const decryptId = await decryptString(decodeURIComponent(res + ""));
        navigation.navigate(NavigationRoutes.ReelDetail, {
          id: decryptId._id,
        });
      }

    },
    [navigation],
  );

  useEffect(() => {
    const handleUrl = ({ url }: { url: string }) => {
      handleDeepLink(url);
    };

    const setupDeepLinkListener = async () => {
      const initialUrl = await Linking.getInitialURL();
      if (initialUrl) {
        handleDeepLink(initialUrl);
      }
      Linking.addEventListener("url", handleUrl);
    };
    setupDeepLinkListener();
    return () => {
      Linking.removeAllListeners("url");
    };
  }, [handleDeepLink]);

  return null;
};

export { DeepLinkHandler };