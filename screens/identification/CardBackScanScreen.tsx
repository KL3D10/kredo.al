import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/buttons/BackButton';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/Screen';
import PrimaryButton from '@/components/buttons/PrimaryButton';

const CardBackScanScreen = ({ navigation }: { navigation: any }) => {

    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        requestPermission()
    }, [])

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={{ alignItems: 'center' }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, width: '75%', textAlign: 'center' }]}>Ju lutem fotografoni anen e pasme te ID</Text>
                </View>
                <View style={styles.scanContainer}>
                    <CameraView
                        style={styles.camera}
                        facing={'back'}
                        autofocus='on'
                    ></CameraView>
                </View>
                <View style={{ paddingBottom: 20, paddingHorizontal: 22 }}>
                    <PrimaryButton title='Capture' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('CardBackCheckScreen')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CardBackScanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
    },
    scanContainer: {
        height: 320,
        width: SCREEN_WIDTH,
        backgroundColor: '#263238CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    camera: {
        height: '60%',
        width: '80%',
        borderRadius: 8,
        borderColor: Colors.primaryColor,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center'
    },
})