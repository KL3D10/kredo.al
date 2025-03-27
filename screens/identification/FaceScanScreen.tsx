import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Camera, CameraType, CameraView, useCameraPermissions } from 'expo-camera';
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/buttons/BackButton';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import { SCREEN_WIDTH } from '@/constants/Screen';
import PrimaryButton from '@/components/buttons/PrimaryButton';

const FaceScanScreen = ({ navigation }: { navigation: any }) => {

    const [permission, requestPermission] = useCameraPermissions();

    useEffect(() => {
        requestPermission()

        const timer = setTimeout(() => {
            navigation.goBack()
            navigation.navigate('FaceSubmitScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={{ alignItems: 'center', gap: 8 }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, width: '75%', textAlign: 'center' }]}>Vendosni fytyren tuaj brenda kornizes</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, width: '80%', textAlign: 'center' }]}>Ndiqni instruksionet duke u afruar apo larguar, ne menyre qe fytyra juaj te fotografohet ne largesine e duhur</Text>
                </View>
                <View style={styles.scanContainer}>
                    <View style={styles.cameraWrapper}>
                        <CameraView
                            style={styles.camera}
                            facing={'front'}
                            autofocus='on'
                        ></CameraView>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default FaceScanScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    bodyContainer: {
        flex: 1,
        gap: 50
    },
    scanContainer: {
        height: 380,
        width: SCREEN_WIDTH,
        backgroundColor: '#263238CC',
        alignItems: 'center',
        justifyContent: 'center'
    },
    cameraWrapper: {
        height: '80%',
        width: SCREEN_WIDTH / 1.5,
        borderRadius: 190,
        borderColor: Colors.primaryColor,
        borderWidth: 2,
        overflow: 'hidden',
        alignItems: 'center',
        justifyContent: 'center',
    },
    camera: {
        height: '100%',
        width: '100%',
    },
})