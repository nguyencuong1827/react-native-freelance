import React, {useRef, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
} from 'react-native-reanimated';

import {SlideUpManager} from './slide-up-manager';
import {useExposeHandler} from '@hooks';
import {OverlayView} from './overlay-view';
import {slideUpMotionLayerAnimation} from './motion';

const SlideUpController = () => {
  const handler = useRef({});
  const [isPresenting, setIsPresenting] = useState(false);
  const rerenderIfAny = (value: boolean) => {
    setIsPresenting(value);
  };

  SlideUpManager.setContainerHandler(handler);
  const childComponentFunc = SlideUpManager.childComponentFunc;
  const {
    layoutConfig,
    animation = slideUpMotionLayerAnimation,
    animationMetaData = {},
    animationContainerStyle = {alignItems: 'stretch'},
    style,
  } = SlideUpManager.config;

  //Motion layer
  const presentationStarted = useRef(false);
  const animatedProgress = useSharedValue(0);
  const animatedLayoutValue = useSharedValue({
    width: 0,
    height: 0,
    x: 0,
    y: 0,
    offsetX: layoutConfig?.contentOffsetX | 0,
    offsetY: layoutConfig?.contentOffsetY | 0,
  });
  const dismissAnimation = () => {
    animation.dismissAnimation(animatedProgress, () => {
      presentationStarted.current = false;
      SlideUpManager.resetChildComponentFunc();
    });
  };

  useExposeHandler(handler, {rerenderIfAny, dismissAnimation}, [handler]);

  const animatedMetaDataValue = useSharedValue(animationMetaData);

  const animatedStyles = useAnimatedStyle(() => {
    return animation.animatedStyles(animatedProgress, {
      layout: animatedLayoutValue,
      metaData: animatedMetaDataValue,
    });
  });
  const presentAnimation = () => {
    animation.presentAnimation(animatedProgress, () => {}); //tinh tien
  };

  const onAnimationContainerLayout = (e: any) => {
    if (isPresenting && !presentationStarted.current) {
      presentationStarted.current = true;
      const {layout} = e.nativeEvent;
      animatedLayoutValue.value = Object.assign(Object.assign({}, layout), {
        offsetX: layoutConfig?.contentOffsetX | 0,
        offsetY: layoutConfig?.contentOffsetY | 0,
      });

      presentAnimation();
    }
  };
  if (childComponentFunc) {
    const containerStyle = {
      ...StyleSheet.absoluteFillObject,
      ...style,
    };
    return (
      <View style={containerStyle}>
        {layoutConfig?.hasOverView && (
          <OverlayView
            backgroundColor={layoutConfig.overViewColor}
            animatedProgress={animatedProgress}
            opacity={layoutConfig?.overViewOpacity}
          />
        )}
        <Animated.View
          pointerEvents="box-none"
          style={[animationContainerStyle, animatedStyles]}
          onLayout={onAnimationContainerLayout}>
          {/*@ts-ignore*/}
          {childComponentFunc()}
        </Animated.View>
      </View>
    );
  }

  return <></>;
};

export {SlideUpController};
