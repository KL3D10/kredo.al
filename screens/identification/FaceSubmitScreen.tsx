import { ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import LottieView from 'lottie-react-native'
import CircularProgress from 'react-native-circular-progress-indicator';

const FaceSubmitScreen = ({ navigation }: { navigation: any }) => {

    const [second, setSecond] = useState<boolean>(false)

    useEffect(() => {
        const timer = setTimeout(() => {
            setSecond(true)
        }, 3000);

        return () => clearTimeout(timer);
    }, [])

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <ImageBackground source={require('@/assets/images/background-dots.png')} style={styles.bodyContainer}>
                {!second ? (<View style={{ alignItems: 'center', gap: 10, marginTop: 20 }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, textAlign: 'center', width: '80%' }]}>Ju lutem mbani kete dritare aktive.</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, textAlign: 'center', width: '85%' }]}>Duke bashkangjitur  Encrypted 3D FaceMap</Text>
                    <LottieView
                        autoPlay
                        style={{
                            width: 200,
                            height: 200,
                        }}
                        source={require('@/assets/animations/loadingGearsPrimary.json')}
                    />
                </View>) : (
                    <View style={{ alignItems: 'center', gap: 30, marginTop: 20 }}>
                        <Text style={[defaultStyles.textBold24, { color: Colors.text, textAlign: 'center', width: '100%' }]}>Ne i enkriptojme te dhenat tuaja dhe i dergojme ato per verifikim.</Text>
                        <CircularProgress
                            value={100}
                            radius={90}
                            progressValueColor={Colors.primaryColor}
                            activeStrokeColor={Colors.primaryColor}
                            inActiveStrokeColor={Colors.lightGrey}
                            valueSuffix={'%'}
                            inActiveStrokeOpacity={0.5}
                            inActiveStrokeWidth={30}
                            activeStrokeWidth={20}
                            duration={10000}
                        />

                    </View>
                )}
            </ImageBackground>
        </SafeAreaView>
    )
}

export default FaceSubmitScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: '10%'
    },
})