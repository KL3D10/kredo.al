import { SafeAreaView, StyleSheet, Text, View, Image, KeyboardAvoidingView, TouchableOpacity, Platform, Button, ImageBackground } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { DismissKeyboard } from '@/components/helpers/keyboard-dismiss-helper'
import { defaultStyles } from '@/constants/Styles'
import LottieView from 'lottie-react-native';
import OtpEntry from '@/components/general/otpEntry'
import Colors from '@/constants/Colors'
import BackButton from '@/components/buttons/BackButton';
import { SCREEN_WIDTH } from '@/constants/Screen';

const OTPCodeScreen = ({ navigation }: { navigation: any }) => {

    const [timeLeft, setTimeLeft] = useState(25);
    const [wrongPin, setWrongPin] = useState(false)

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timer);
        }
    }, [timeLeft]);

    const checkPin = (pin: string) => {
        if (pin === '1111') {
            setWrongPin(false)
            navigation.navigate('DisbursmentMethodScreen')
        } else {
            setWrongPin(true)
        }
    }

    return (
        <DismissKeyboard>
            <SafeAreaView style={styles.container}>
                <BackButton onPress={() => navigation.goBack()} />
                <View style={styles.topContainer}>
                    <Image source={require('@/assets/images/confirm-pin.png')} style={styles.headerImage} resizeMode='contain' />
                </View>
                <KeyboardAvoidingView
                    behavior='padding'
                    style={styles.infoContainer}
                    keyboardVerticalOffset={Platform.OS === "ios" ? 50 : 0}
                >
                    <ImageBackground source={require('@/assets/images/background-dots.png')} resizeMode='cover' style={styles.bodyContainer}>
                        <View style={{ alignItems: 'center' }}>
                            <Text style={styles.firstText}>OTP Code Verification</Text>
                            <Text style={styles.secondText}>We have sent an OTP code to your Phone No.</Text>
                            <Text style={styles.secondText}>+355 ******375 Enter the OTP code below to verify.</Text>
                        </View>
                        {wrongPin && <Text style={{ color: Colors.errorRed }}>Wrong Code</Text>}
                        <View style={{paddingHorizontal: 15}}>
                        <OtpEntry wrongPin={wrongPin} onOtpCompleted={(otp: string) => checkPin(otp)} />
                        </View>
                        <View style={{ alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[styles.otpText, { color: Colors.darkGrey }]}>Remaining time:</Text>
                                <Text style={[styles.otpText, { color: Colors.primaryColor, marginLeft: 3 }]}>{timeLeft} seconds</Text>
                            </View>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <Text style={[styles.otpText, { color: Colors.darkGrey }]}>Didn't get the code?</Text>
                                <TouchableOpacity onPress={() => setTimeLeft(25)}>
                                    <Text style={[styles.otpText, { color: Colors.primaryColor, marginLeft: 3 }]}>Resend</Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </ImageBackground>
                </KeyboardAvoidingView>
            </SafeAreaView>
        </DismissKeyboard>
    )
}

export default OTPCodeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    topContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    infoContainer: {
        flex: 3,
        gap: 25
    },
    headerImage: {
        height: 107,
        width: 107
    },
    bodyContainer: {
        flex: 1,
        alignItems: 'center',
        gap: 25,
        borderRadius: 20,
    },
    firstText: {
        fontSize: 22,
        color: Colors.text,
        fontFamily: 'DMSansBold'
    },
    secondText: {
        fontSize: 12,
        color: Colors.text,
        fontFamily: 'DMSans'
    },
    otpText: {
        fontSize: 12,
        fontFamily: 'DMSans'
    },
    contentContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        gap: 40,
        paddingHorizontal: 10
    }
})