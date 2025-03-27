import { Image, ImageBackground, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'

const ApplicationProcessingScreen = ({ navigation }: { navigation: any }) => {

    const [minutes, setMinutes] = useState(15);
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        if (minutes === 0 && seconds === 0) return;

        const timer = setTimeout(() => {
            if (seconds > 0) {
                setSeconds(seconds - 1);
            } else if (minutes > 0) {
                setMinutes(minutes - 1);
                setSeconds(59);
            }
        }, 1000);

        return () => clearTimeout(timer);
    }, [minutes, seconds]);

    // Only for DEMO
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.navigate('ApplicationApprovedScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => { }} />
            <View style={styles.topContainer}>
                <Image source={require('@/assets/images/aplication-processing-icon.png')} style={styles.headerImage} resizeMode='contain' />
            </View>
            <View style={styles.infoContainer}>
                <ImageBackground source={require('@/assets/images/background-dots.png')} resizeMode='cover' style={styles.bodyContainer}>
                    <View style={{ alignItems: 'center', width: '100%', gap: 6 }}>
                        <Text style={styles.firstText}>Aplikimi po procesohet</Text>
                        <Text style={styles.secondText}>Aplikimi juaj po procesohet. Ju lutem prisni, nje perfaqesues i Kredos do t'ju kontaktoje dhe do te aprovoje limitin e kredise tuaj.</Text>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.primaryColor, textDecorationLine: 'underline' }]}>Mund te zgjase rreth 15 minuta</Text>
                    </View>
                    <Text style={[defaultStyles.textBold36, { color: Colors.primaryColor }]}>{`${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`}</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, width: '60%', textAlign: 'center' }]}>Faqja do te hapet automatikisht sapo aplikimi te kryhet</Text>
                </ImageBackground>
            </View>
        </SafeAreaView>
    )
}

export default ApplicationProcessingScreen

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
    headerImage: {
        height: 107,
        width: 107
    },
    infoContainer: {
        flex: 3,
        gap: 25
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
        fontFamily: 'DMSans',
        width: '80%',
        textAlign: 'center'
    },
})