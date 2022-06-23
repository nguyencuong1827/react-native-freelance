import Animated, {
  runOnJS,
  withTiming,
  interpolate,
} from 'react-native-reanimated';
import {MotionLayerAnimatedLayout} from '@types';
import {ViewStyle} from 'react-native';

declare type SharedValue = number | string | boolean | object;
interface MotionLayerAnimation<T extends SharedValue = any> {
  animatedStyles: (
    animatedProgress: Animated.SharedValue<number>,
    extraInfo: {
      layout: Animated.SharedValue<MotionLayerAnimatedLayout>;
      metaData: Animated.SharedValue<T>;
    },
  ) => ViewStyle;
  presentAnimation: (
    animatedProgress: Animated.SharedValue<number>,
    animationFinished: () => void,
  ) => void;
  dismissAnimation: (
    animatedProgress: Animated.SharedValue<number>,
    animationFinished: () => void,
  ) => void;
}

export const slideUpMotionLayerAnimation: MotionLayerAnimation = {
  animatedStyles: (animatedProgress, extraInfo) => {
    'worklet';
    const {height, offsetY} = extraInfo.layout.value;
    return {
      opacity: interpolate(animatedProgress.value, [0, 1], [0, 1]),
      transform: [
        {
          translateY: interpolate(
            animatedProgress.value,
            [0, 1],
            [height, offsetY],
          ),
        },
      ],
    };
  },
  presentAnimation: (animatedProgress, animationFinished) => {
    animatedProgress.value = withTiming(1, {duration: 500}, isFinished => {
      if (isFinished) {
        runOnJS(animationFinished)();
      }
    });
  },
  dismissAnimation: (animatedProgress, animationFinished) => {
    animatedProgress.value = withTiming(0, {duration: 500}, isFinished => {
      if (isFinished) {
        runOnJS(animationFinished)();
      }
    });
  },
};
