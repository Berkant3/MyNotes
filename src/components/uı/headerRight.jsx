import {Hierarchy3, More, Paperclip2, TextBold} from 'iconsax-react-native';
import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {AppColors} from '../../theme/colors';

const HeaderRight = () => {
  return (
    <View style={styles.container}>
      <Paperclip2 style={styles.icon} size="24" color={AppColors.SECONDARY} />
      <Hierarchy3 style={styles.icon} size="24" color={AppColors.SECONDARY} />
      <More style={styles.icon} size="24" color={AppColors.SECONDARY} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  icon: {
    marginHorizontal: 5,
  },
});

export default HeaderRight;

//smallcaps
//TextBold
//textalingnleft
//textunderline
//task
