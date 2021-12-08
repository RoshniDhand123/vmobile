import React, {useState} from 'react';
import {View} from 'react-native';
// import DateTimePickerModal from 'react-native-modal-datetime-picker';

import CustomDatePickerButton from '../custom-button/customDatePickerButton';
import * as Assets from '../../assets';

const DatePickerCustom = props => {
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = date => {
    console.log('A date has been picked: ', date);
    hideDatePicker();
  };

  return (
    <View>
      <CustomDatePickerButton
        // label={props.title}
        label="Date Of Birth"
        onPress={showDatePicker}
        // icon={props.icon}
        icon={Assets.Email}
      />

      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        // mode={props.mode}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
    </View>
  );
};

export default DatePickerCustom;
