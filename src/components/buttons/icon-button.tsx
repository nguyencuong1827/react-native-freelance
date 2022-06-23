import React from 'react';
import {StyleProp, ViewStyle} from 'react-native';
import {PrimaryButton} from './primary-button';

interface IconButtonProps {
  style?: StyleProp<ViewStyle>;
  children?: React.ReactNode;
  onPress?: (() => void) | null;
}

const IconButton: React.FC<IconButtonProps> = ({children, style, onPress}) => {
  return (
    <PrimaryButton
      onPress={onPress}
      styleFunc={pressed => [
        {
          justifyContent: 'center',
          alignItems: 'center',
          opacity: pressed ? 0.8 : 1,
        },
        style,
      ]}
      pressableProps={{hitSlop: 24}}>
      {children}
    </PrimaryButton>
  );
};

IconButton.defaultProps = {
  children: null,
  style: {},
  onPress: null,
};

export {IconButton};
