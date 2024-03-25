import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';

const Button = props => {
  const {title, style} = props;
  return (
    <TouchableOpacity {...props} style={style ? style : styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
  },
  title: {
    color: AppColors.WHITE,
    fontSize: 16,
    fontWeight: '600',
  },
});

export default Button;
