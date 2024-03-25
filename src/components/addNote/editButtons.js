import React, {Component} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {AppColors} from '../../theme/colors';
import {
  Smallcaps,
  Task,
  TextBold,
  TextUnderline,
  TextalignLeft,
  TextalignRight,
} from 'iconsax-react-native';

const EditButtons = ({onChangeStyle}) => {
  const Buttons = [
    {
      id: 1,
      value: 'bold',
      icon: <TextBold size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 2,
      value: 'italik',
      icon: <Smallcaps size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 3,
      value: 'textUnderline',
      icon: <TextUnderline size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 4,
      value: 'left',
      icon: <TextalignLeft size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 5,
      value: 'right',
      icon: <Task size="30" color={AppColors.SECONDARY} />,
    },
    {
      id: 6,
      value: 'center',
      icon: <TextalignRight size="30" color={AppColors.SECONDARY} />,
    },
  ];

  return (
    <View style={styles.container}>
      {Buttons.map((item, index) => (
        <TouchableOpacity
          onPress={() => onChangeStyle(item.value)}
          key={item.id}>
          {item.icon}
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.GRAY,
    flexDirection: 'row',
    padding: 5,
    paddingVertical: 10,
    justifyContent: 'space-around',
  },
});

export default EditButtons;
