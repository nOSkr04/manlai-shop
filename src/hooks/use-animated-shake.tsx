import  {  useCallback } from "react";
import { Easing, useAnimatedStyle,  useSharedValue, withRepeat, withSequence, withSpring, withTiming } from "react-native-reanimated";

const UseAnimatedShake = () => {
    const shakeTranslateX = useSharedValue(0);

  const shake = useCallback(() => {
    const TranslationAmount = 10;
    const timingConfig = {
      duration: 80,
      easing  : Easing.bezier(0.35, 0.7, 0.5, 0.7),
    };
    shakeTranslateX.value = withSequence(
      withTiming(TranslationAmount, {
        duration: 80,
        easing  : Easing.bezier(0.36, 0.66, 0.04, 1),
      }),
      withRepeat(withTiming(-TranslationAmount, timingConfig), 3, true),
      withSpring(0, {
        mass: 0.5,
      })
    );
  }, [shakeTranslateX]);

  const rShakeStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: shakeTranslateX.value,
        },
      ],
    };
  }, []);

  return { shake,rShakeStyle };
};

export { UseAnimatedShake };
