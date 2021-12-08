import React from 'react';
import {View, TouchableWithoutFeedback, Text, Image} from 'react-native';

import styles from './customDatePicker.style';

const CustomDatePickerButton = props => {
  return (
    <TouchableWithoutFeedback onPress={props.onPress}>
      <View style={styles.container}>
        <View>
          <Text style={styles.label}>{props.label}</Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={props.icon} style={styles.icon} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

export default CustomDatePickerButton;
