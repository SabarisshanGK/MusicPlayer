import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import { colors } from '../../../assets/Theme/colors';
import { TouchableOpacity } from 'react-native';

const CustomButton = ({ text, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <Text style={{ color: colors.white, fontSize: 18 }}>{text}</Text>
    </TouchableOpacity>
  );
};

export default CustomButton;

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.lightBlue,
    padding: 10,
    width: 300,
    paddingHorizontal: 100,
    paddingVertical: 15,
    borderRadius: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
