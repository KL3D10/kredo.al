import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Svg, Path } from 'react-native-svg';
import { SCREEN_WIDTH } from '@/constants/Screen';
import { defaultStyles } from '@/constants/Styles';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { AntDesign } from '@expo/vector-icons';
import SecondaryButton from '@/components/buttons/SecondaryButton';

const LoanApplyScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={{ position: 'relative' }}>
                <Svg
                    width={SCREEN_WIDTH}
                    height={287}
                    viewBox="0 0 394 287"
                    fill="none"
                    style={{ position: 'absolute', top: 0 }}
                >
                    <Path
                        d="M0 0H394V267C394 278.046 385.046 287 374 287H20C8.9543 287 0 278.046 0 267V0Z"
                        fill="#19C3C6"
                    />
                </Svg>
                <View style={styles.topInfoContainer}>
                    <View style={styles.topRow}>
                        <Image source={require('@/assets/images/kredo-logo.png')} />
                        <Image source={require('@/assets/images/albanian-flag.png')} style={{ borderWidth: 1.5, borderRadius: 50, borderColor: Colors.background }} />
                    </View>
                    <View style={styles.textContainer}>
                        <Text style={[defaultStyles.textBold24, { color: Colors.whiteText, width: '60%' }]}>Aktivizo limitin e shpenzimit</Text>
                        <Text style={[defaultStyles.textRegular16, { color: Colors.whiteText }]}>Per pagesa te shpejta dhe te lehta ne dyqane ose para te castit ne dore</Text>
                    </View>
                    <TouchableOpacity style={styles.iconButton}>
                        <Text style={[defaultStyles.textRegular16, { color: Colors.whiteText }]}>Vazhdo</Text>
                        <AntDesign name="arrowright" size={15} color={Colors.whiteText} />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={defaultStyles.textSemiBold18}>Kontrollo kredite e tua kudo ku je me sherbimet e reja ne Kredo.al</Text>
                <View style={styles.servicesContainer}>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Apliko dhe kontrollo kredine tende online 24/7</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Perfito oferta te personalizuara</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Paguaj kestin nga shtepia</Text>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton title='Appliko per Kredi' backgroundColor={Colors.primaryColor} onButtonPressed={() => console.log('pressed')} />
                    <SecondaryButton title='Krijo nje llogari' borderColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('CreateAccount')} />
                    <TouchableOpacity style={defaultStyles.textButton}>
                        <Text style={[defaultStyles.textBold16, { color: Colors.text }]}>Hyr</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default LoanApplyScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        gap: 30
    },
    topInfoContainer: {
        paddingHorizontal: 17,
        paddingVertical: 20,
        height: 287,
        justifyContent: 'space-between'
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        borderBottomWidth: 0.5,
        borderBottomColor: Colors.whiteText,
        paddingBottom: 7
    },
    textContainer: {
        width: '80%',
        gap: 8
    },
    iconButton: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        width: '30%',
        backgroundColor: Colors.secondaryColor,
    },
    bottomContainer: {
        paddingHorizontal: 17,
        gap: 20
    },
    servicesContainer: {
        gap: 15
    },
    buttonsContainer: {
        gap: 10
    }
})