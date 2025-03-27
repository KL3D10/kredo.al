import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { OtpInput } from "react-native-otp-entry";
import Colors from '@/constants/Colors';

interface Props {
 onOtpCompleted: (otp: string) => void,
 wrongPin: boolean
}

const OtpEntry = ({onOtpCompleted, wrongPin}: Props) => {
    return (
        <OtpInput
            numberOfDigits={4}
            onFilled={(text) => onOtpCompleted(text)}
            theme={{
              inputsContainerStyle: styles.inputsContainer,
              pinCodeContainerStyle: wrongPin ? styles.pinCodeErrorContainerStyle : styles.pinCodeContainerStyle,
              pinCodeTextStyle: styles.pinCodeText,
              focusedPinCodeContainerStyle: styles.activePinCodeContainer,
              focusStickStyle: styles.focusStickStyle
            }}
        />
    )
}

export default OtpEntry

const styles = StyleSheet.create({
  inputsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 50,
  },
  pinCodeContainerStyle: {
    width: 50,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.lightGrey,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCodeErrorContainerStyle: {
    width: 50,
    height: 50,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: Colors.errorRed,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pinCodeText: {
    fontSize: 28,
    color: Colors.text,
    fontFamily: 'DMSansBold',
  },
  activePinCodeContainer: {
    borderColor: Colors.primaryColor,
    backgroundColor: Colors.primaryColor,
  },
  focusStickStyle: {
    backgroundColor: 'white'
  }
});
