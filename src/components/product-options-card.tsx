import React from 'react';
import {
  ScrollView,
  StyleProp,
  StyleSheet,
  Text,
  useWindowDimensions,
  View,
  ViewStyle,
} from 'react-native';
import {ColorPalates, fontStyles} from '@themes';
import {Buttons, Layouts, SlideUpManager} from './index';
import {Icons} from '@assets';
import {ProductOptionsRow} from './product-options-row';
import {DataModels} from '@types';
import {OptionButton} from './buttons/option-button';

const colorOptions: Array<DataModels.ProductOption> = [
  {
    name: 'Đen',
    disabled: false,
    isPicked: true,
  },
  {
    name: 'Trắng',
    disabled: true,
    isPicked: false,
  },
  {
    name: 'Xanh',
    disabled: false,
    isPicked: false,
  },
];

const sizeOptions: Array<DataModels.ProductOption> = [
  {
    name: 'S',
    disabled: false,
    isPicked: false,
  },
  {
    name: 'M',
    disabled: false,
    isPicked: false,
  },
  {
    name: 'L',
    disabled: false,
    isPicked: true,
  },
  {
    name: 'XL',
    disabled: false,
    isPicked: false,
  },
  {
    name: '2XL',
    disabled: false,
    isPicked: false,
  },
];

interface ProductOptionsCardProps {}
const ProductOptionsCard: React.FC<ProductOptionsCardProps> = () => {
  const dimension = useWindowDimensions();

  const containerStyle: StyleProp<ViewStyle> = {
    backgroundColor: ColorPalates.white,
    height: dimension.height / 1.8,
    paddingTop: 12,
  };

  const onDismiss = () => {
    SlideUpManager.dismiss();
  };
  return (
    <View style={containerStyle}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerTitle}>{'Chọn phân loại'}</Text>
        <Buttons.IconButton onPress={onDismiss}>
          <Icons.CloseIcon />
        </Buttons.IconButton>
      </View>
      <View style={styles.separator} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{padding: 16}}>
          <ProductOptionsRow title={'MÀU SẮC'} options={colorOptions} />
          <Layouts.VSpace value={24} />
          <ProductOptionsRow title={'KÍCH THƯỚC'} options={sizeOptions} />
        </View>
        <Layouts.VSpace value={24} />
        <View style={styles.chooseNumberRow}>
          <Text style={styles.changeNumberTitle}>{'SỐ LƯỢNG'}</Text>
          <View style={{flexDirection: 'row'}}>
            <Buttons.IconButton style={styles.changeNumberButton}>
              <Icons.SubIcon />
            </Buttons.IconButton>
            <Layouts.HSpace value={8} />
            <OptionButton disabled={false} picked={false} title={'1'} />
            <Buttons.IconButton style={styles.changeNumberButton}>
              <Icons.PlusIcon />
            </Buttons.IconButton>
          </View>
        </View>
        <View style={styles.addToCardButton}>
          <Buttons.IconButton style={styles.heartIconContainer}>
            <Icons.HeartOutlineIcon />
          </Buttons.IconButton>
          <Layouts.HSpace value={10} />
          <Buttons.AdditionCardButton
            disabled={true}
            title={'THÊM VÀO GIỎ HÀNG'}
            style={{flex: 1}}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 12,
    paddingHorizontal: 16,
  },
  headerTitle: {
    ...fontStyles.Title_Bold,
    color: ColorPalates.black,
  },
  separator: {
    height: 1,
    backgroundColor: '#EEEDF5',
  },
  chooseNumberRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
  },
  changeNumberButton: {
    width: 56,
    height: 40,
    backgroundColor: ColorPalates.white_2,
  },
  changeNumberTitle: {
    ...fontStyles.Title,
    color: ColorPalates.dark_blue,
  },
  heartIconContainer: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: ColorPalates.light_gray,
  },
  addToCardButton: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingTop: 52,
    paddingHorizontal: 16,
    backgroundColor: ColorPalates.white,
  },
});
export {ProductOptionsCard};
