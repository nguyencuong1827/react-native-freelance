import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle, View} from 'react-native';
import {ColorPalates, fontStyles} from '@themes';
import {PrimaryButton} from './primary-button';
import {Icons} from '@assets';

interface AdditionCardButtonProps {
  disabled?: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (() => void) | null;
}

const AdditionCardButton: React.FC<AdditionCardButtonProps> = ({
  disabled,
  title,
  onPress,
  style,
}) => {
  const getButtonStyle = (pressed: boolean): StyleProp<ViewStyle> => {
    if (disabled) {
      return {
        height: 43,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: ColorPalates.dark_blue,
        opacity: 0.2,
      };
    }
    return {
      height: 43,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: ColorPalates.dark_blue,
      opacity: pressed ? 0.8 : 1,
    };
  };
  return (
    <PrimaryButton
      disabled={disabled}
      onPress={onPress}
      styleFunc={pressed => [getButtonStyle(pressed), style]}>
      <View style={styles.iconContainer}>
        <Icons.LeftCornerIcon />
        <Icons.RightCornerIcon />
      </View>
      <Text style={styles.title}>{title}</Text>
    </PrimaryButton>
  );
};

const styles = StyleSheet.create({
  title: {
    ...fontStyles.Title,
    color: ColorPalates.white,
  },
  iconContainer: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});

AdditionCardButton.defaultProps = {
  disabled: false,
  style: {},
  onPress: null,
};

export {AdditionCardButton};
