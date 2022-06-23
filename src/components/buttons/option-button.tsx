import React from 'react';
import {StyleProp, StyleSheet, Text, ViewStyle} from 'react-native';
import {Buttons} from '@components';
import {ColorPalates, fontStyles} from '@themes';

interface OptionButtonProps {
  disabled: boolean;
  picked: boolean;
  title: string;
  style?: StyleProp<ViewStyle>;
  onPress?: (() => void) | null;
}

const OptionButton: React.FC<OptionButtonProps> = ({
  disabled,
  picked,
  onPress,
  style,
  title,
}) => {
  const getColorBorder = () => {
    if (picked) {
      return ColorPalates.dark_blue;
    }
    return ColorPalates.stroke;
  };
  const getColorTitle = () => {
    if (picked) {
      return ColorPalates.dark_blue;
    }
    if (disabled) {
      return ColorPalates.stroke;
    }
    return ColorPalates.gray_blue;
  };
  return (
    <Buttons.PrimaryButton
      onPress={onPress}
      styleFunc={pressed => [
        {...styles.button},
        {borderColor: getColorBorder(), opacity: pressed ? 0.8 : 1},
        style,
      ]}>
      <Text style={[{...styles.title}, {color: getColorTitle()}]}>{title}</Text>
    </Buttons.PrimaryButton>
  );
};

const styles = StyleSheet.create({
  button: {
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 9,
    marginRight: 8
  },
  title: {
    ...fontStyles.Title_4,
  },
});

export {OptionButton};
