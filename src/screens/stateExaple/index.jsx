import React, {useState} from 'react';
import {View, Text, StyleSheet, SafeAreaView} from 'react-native';
import {AppColors} from '../../theme/colors';
import Button from '../../components/uı/button';

const StateExample = () => {
  const [count, setCount] = useState(0);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <View style={styles.countWrapper}>
          <Text style={styles.count}>{count}</Text>
        </View>
        <View style={styles.buttonWrapper}>
          <Button
            onPress={() => setCount(count + 1)}
            title="Arttır"
            style={styles.button}
          />
          <Button
            onPress={() => setCount(count - 1)}
            title="Azalt"
            style={styles.button}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFF',
  },
  count: {
    fontSize: 25,
    fontWeight:"bold"
  },
  countSucces: {
    fontSize: 30,
    color: AppColors.GREEN,
    fontWeight:"bold"

  },
  countWrapper: {
    flex: 1,
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonWrapper: {
    backgroundColor: AppColors.WHITE,
    justifyContent: 'center',
    padding: 10,
    flexDirection: 'row',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: AppColors.PRIMARY,
    padding: 10,
    paddingVertical: 15,
    borderRadius: 5,
    flex: 1,
    margin: 5,
  },
});

export default StateExample;
