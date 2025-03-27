import { StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { BlurView } from 'expo-blur'
import LottieView from 'lottie-react-native';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';


const ApplicationProcesingModal = ({ navigation }: { navigation: any }) => {

    const animation = useRef<LottieView>(null);

    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.goBack()
            navigation.navigate('OTPCodeScreen');
        }, 3000);

        return () => clearTimeout(timer);
    }, [])
    


    return (
        <View style={{ flex: 1, width: '100%', height: '100%' }}>
            <BlurView intensity={100} tint='systemUltraThinMaterialLight' style={{ flex: 1, width: '100%', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <LottieView
                    ref={animation}
                    autoPlay
                    style={{
                        width: 200,
                        height: 200,
                    }}
                    source={require('@/assets/animations/loadingGearsSecondary.json')}
                />
                <Text style={[defaultStyles.textRegular16, { color: Colors.text }]}>Aplikimi juaj po dergohet,</Text>
                <Text style={[defaultStyles.textRegular16, { color: Colors.text }]}>ju lutem prisni...</Text>
            </BlurView>
        </View>
    )
}

export default ApplicationProcesingModal

const styles = StyleSheet.create({})