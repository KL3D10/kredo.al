import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const FaceInfoScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.topInfoContainer}>
                <Image source={require('@/assets/images/face-scan-icon.png')} style={styles.headerImage} resizeMode='contain' />
            </View>
            <ImageBackground source={require('@/assets/images/background-dots.png')} resizeMode='cover' style={styles.bodyContainer}>
                <View style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, textAlign: 'center', width: '80%' }]}>Ju lutem fotografoni fytyren</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, textAlign: 'center', width: '85%' }]}>Vendosni fytyren tuaj brenda kornizes dhe sigurohuni qe fytyra te jete e dukshme dhe e ndricuar ne menyre te njetrajtshme</Text>
                </View>
                <View style={styles.bottomInfoContainer}>
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.text }]}>Main mistakes:</Text>
                    <View style={{ gap: 10 }}>
                        <View style={defaultStyles.checkedCirclesRow}>
                            <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                            <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Shmangni reflektimin dhe drite te drejtperdrejte</Text>
                        </View>
                        <View style={defaultStyles.checkedCirclesRow}>
                            <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                            <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Shmangni njerez te tjere ne kornize</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton title='Start' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('FaceScanScreen')} />
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default FaceInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    topInfoContainer: {
        alignItems: 'center',
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 22
    },
    headerImage: {
        height: 120,
        width: 120
    },
    bottomInfoContainer: {
        gap: 15,
    },
    buttonConatiner: {
        paddingBottom: 20
    }
})