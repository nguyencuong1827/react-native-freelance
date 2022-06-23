import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icons, ImageAssets} from '@assets';
import {Layouts} from './index';
import {ColorPalates, fontStyles} from '@themes';

interface ProductCardProps {}

const ProductCard: React.FC<ProductCardProps> = () => {
  return (
    <View style={styles.container}>
      <View style={styles.priceContainer}>
        <View style={styles.discountContainer}>
          <Text style={styles.discount}>{'10%'}</Text>
        </View>
        <Layouts.HSpace value={12} />
        <Text style={styles.price}>{'406.000đ'}</Text>
        <Layouts.HSpace value={6} />
        <Text style={styles.priceDiscount}>{'406.000đ'}</Text>
      </View>
      <Layouts.VSpace value={12} />
      <Text style={styles.name}>
        {'Solid Pocket Button Lapel Long Sleeve Blue Cotton 100%'}
      </Text>
      <Layouts.VSpace value={18} />
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <View style={{flexDirection: 'row'}}>
          <View style={styles.rateContainer}>
            <Icons.StarIcon />
            <Layouts.HSpace value={4} />
            <Icons.StarIcon />
            <Layouts.HSpace value={4} />
            <Icons.StarIcon />
            <Layouts.HSpace value={4} />
            <Icons.StarIcon />
            <Layouts.HSpace value={4} />
            <Icons.StarIcon />
          </View>
          <Layouts.HSpace value={8} />
          <Text style={styles.averageRate}>{'996'}</Text>
          <View style={{justifyContent: 'center', paddingHorizontal: 6}}>
            <Icons.DotIcon />
          </View>
          <Text style={styles.averageRate}>{'Đã bán 1201'}</Text>
        </View>

        <View style={styles.likeContainer}>
          <Icons.HeartIcon />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 20,
    paddingHorizontal: 16,
    backgroundColor: ColorPalates.white,
  },
  image: {
    width: '100%',
    aspectRatio: 375 / 385,
  },
  priceContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rateContainer: {
    flexDirection: 'row',
  },
  discountContainer: {
    backgroundColor: ColorPalates.red,
    paddingHorizontal: 8,
    paddingVertical: 5,
    borderBottomRightRadius: 8,
    borderTopLeftRadius: 8,
  },
  discount: {
    ...fontStyles.Title_2,
    color: ColorPalates.white,
    fontWeight: '600',
  },
  price: {
    ...fontStyles.Title_Bold,
    color: ColorPalates.black,
  },
  priceDiscount: {
    ...fontStyles.Title_2,
    color: ColorPalates.gray,
    textDecorationLine: 'line-through',
  },
  name: {
    ...fontStyles.Title_3,
    color: ColorPalates.gray_blue,
  },
  averageRate: {
    ...fontStyles.Title_2,
    color: ColorPalates.gray,
  },
  likeContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: ColorPalates.yellow,
  },
});

export {ProductCard};
