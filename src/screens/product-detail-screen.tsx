import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FastImage from 'react-native-fast-image';
import {Icons, ImageAssets} from '@assets';
import {
  Buttons,
  Layouts,
  ProductCard,
  ProductOptionsCard,
  SlideUpManager,
  slideUpMotionLayerAnimation,
} from '@components';
import {ColorPalates, fontStyles} from '@themes';

interface ProductDetailScreenProps {}

const ProductDetailScreen: React.FC<ProductDetailScreenProps> = () => {
  const onOpenOptionCard = () => {
    SlideUpManager.present(() => <ProductOptionsCard />, {
      animation: slideUpMotionLayerAnimation,
      style: {
        justifyContent: 'flex-end',
        alignItem: 'stretch',
      },
      layoutConfig: {
        hasOverView: true,
        overViewColor: ColorPalates.black,
        overViewOpacity: 0.5,
        animationContainerStyle: {
          alignItem: 'stretch',
        },
      },
    });
  };
  return (
    <View style={styles.container}>
      <FastImage source={ImageAssets.tShirt} style={styles.image} />
      <Buttons.IconButton style={styles.backButton}>
        <Icons.LeftArrowIcon />
      </Buttons.IconButton>
      <ProductCard />
      <Buttons.PrimaryButton
        onPress={onOpenOptionCard}
        styleFunc={pressed => ({
          ...styles.expandButton,
          opacity: pressed ? 0.8 : 1,
        })}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <Icons.PropIcon />
          <Layouts.HSpace value={14} />
          <Text style={styles.expandTitle}>{'Màu, Kích thước'}</Text>
        </View>
        <Icons.RightArrowIcon />
      </Buttons.PrimaryButton>

      <View style={styles.addToCardButton}>
        <Buttons.IconButton style={styles.heartIconContainer}>
          <Icons.HeartOutlineIcon />
        </Buttons.IconButton>
        <Layouts.HSpace value={10} />
        <Buttons.AdditionCardButton
          title={'THÊM VÀO GIỎ HÀNG'}
          style={{flex: 1}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorPalates.light_gray,
  },
  image: {
    width: '100%',
    aspectRatio: 375 / 385,
  },
  backButton: {
    position: 'absolute',
    top: 55,
    left: 20,
    width: 34,
    height: 34,
    borderRadius: 17,
    backgroundColor: ColorPalates.white,
  },
  expandButton: {
    backgroundColor: ColorPalates.white,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    margin: 16,
    paddingHorizontal: 14,
    borderRadius: 8,
    height: 57,
  },
  expandTitle: {
    ...fontStyles.Title_4,
    color: ColorPalates.black,
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

export {ProductDetailScreen};
