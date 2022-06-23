import React from 'react';
import {Pressable, PressableProps, StyleProp, ViewStyle} from 'react-native';

interface PrimaryButtonProps {
  styleFunc: (pressed: boolean) => StyleProp<ViewStyle>;
  children?: React.ReactNode;
  disabled?: boolean;
  onPress?: (() => void) | null;
  pressableProps?: StyleProp<PressableProps>;
}

const PrimaryButton: React.FC<PrimaryButtonProps> = ({
  children,
  styleFunc,
  onPress,
  disabled,
  pressableProps,
}) => {
  const _onPress = () => {
    onPress && onPress();
  };
  return (
    <Pressable
      disabled={disabled}
      onPress={_onPress}
      style={({pressed}) => styleFunc(pressed)}
      {...(pressableProps as object)}>
      {children}
    </Pressable>
  );
};

PrimaryButton.defaultProps = {
  children: null,
  styleFunc: () => {
    return {};
  },
  pressableProps: {},
  disabled: false,
  onPress: null,
};

export {PrimaryButton};
