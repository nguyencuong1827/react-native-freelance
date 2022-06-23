import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {DataModels} from '@types';
import {OptionButton} from './buttons/option-button';
import {ColorPalates, fontStyles} from '@themes';
import { Layouts } from "./index";

interface ProductOptionsRowProps {
  title: string;
  options: Array<DataModels.ProductOption>;
}

const ProductOptionsRow: React.FC<ProductOptionsRowProps> = ({
  title,
  options,
}) => {
  return (
    <View>
      <Text style={styles.title}>{title}</Text>
      <Layouts.VSpace value={12} />
      <View style={styles.containerButton}>
        {options.map((item, index) => (
          <OptionButton
            key={index}
            disabled={item.disabled}
            picked={item.isPicked}
            title={item.name}
          />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  containerButton: {
    flexDirection: 'row',
  },
  title: {
    ...fontStyles.Title,
    color: ColorPalates.dark_blue,
  },
});

export {ProductOptionsRow};
