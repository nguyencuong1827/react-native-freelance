import React from 'react';
import {StyleSheet} from 'react-native';
import Animated, {
  Extrapolation,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';

interface OverlayViewProps {
  backgroundColor: string;
  opacity: number;
  animatedProgress: any;
}
const OverlayView: React.FC<OverlayViewProps> = props => {
  const {backgroundColor, opacity, animatedProgress} = props;

  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        animatedProgress.value,
        [0, 1],
        [0, opacity],
        Extrapolation.CLAMP,
      ),
    };
  });
  const viewStyle = {
    ...StyleSheet.absoluteFillObject,
    backgroundColor,
  };

  return <Animated.View style={[viewStyle, animatedStyle]} />;
};

export {OverlayView};
