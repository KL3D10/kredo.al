import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';
import BackButton from '@/components/buttons/BackButton';
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';
import PrimaryButton from '@/components/buttons/PrimaryButton';
import { SCREEN_WIDTH } from '@/constants/Screen';
import SecondaryButton from '@/components/buttons/SecondaryButton';

const CardFrontCheckScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={{ alignItems: 'center', gap: 8 }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, width: '80%', textAlign: 'center' }]}>Kontrollo cilesine e imazhit te fotografuar</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, width: '80%', textAlign: 'center' }]}>Sigurohuni qe fotografia ne dokument eshte e qarte dhe te dhenat jane te lexueshme. Nese besoni se cilesia e imazhit eshte e pranueshme atehere shtypni butonin “Vazhdo”</Text>
                </View>
                <View style={styles.scanContainer}>
                    <Image source={require('@/assets/images/specimen-id-card.png')} resizeMode='contain' style={styles.capturedImage} />
                </View>
                <View style={{ paddingBottom: 20, paddingHorizontal: 22, gap: 10 }}>
                    <PrimaryButton title='Vazhdo' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('CardBackScanScreen')} />
                    <SecondaryButton title='Provo Perseri' borderColor={Colors.primaryColor} onButtonPressed={() => navigation.goBack()} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CardFrontCheckScreen

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
    capturedImage: {
        height: '60%',
        width: '80%',
        borderRadius: 8,
        borderColor: Colors.primaryColor,
        borderWidth: 2,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
})