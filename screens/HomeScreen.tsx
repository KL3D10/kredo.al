import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { SCREEN_WIDTH } from '@/constants/Screen'
import { defaultStyles } from '@/constants/Styles'
import YellowLoanCard from '@/components/general/YellowLoanCard'
import BlueLoanCard from '@/components/general/BlueLoanCard'

const HomeScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.bannerContainer}>
                <Image source={require('@/assets/images/home-banner.png')} resizeMode='contain' />
            </View>
            <View style={styles.secondRowContainer}>
                <Text style={[defaultStyles.textSemiBold16, { color: Colors.text, paddingLeft: 28 }]}>Zgjidh Kredine</Text>
                <ScrollView contentContainerStyle={{ paddingHorizontal: 28, gap: 10 }} horizontal={true} showsHorizontalScrollIndicator={false}>
                    <YellowLoanCard onPress={() => navigation.navigate('LoanSelectScreen')} />
                    <BlueLoanCard onPress={() => navigation.navigate('LoanSelectScreen')} />
                </ScrollView>
            </View>
            <View style={styles.thirdRowContainer}>
                <Text style={[defaultStyles.textSemiBold16, { color: Colors.text }]}>Ti kualifikohesh nese:</Text>
                <ScrollView style={{flex: 1}} contentContainerStyle={{ gap: 10, paddingBottom: 10 }} showsVerticalScrollIndicator={false}>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>23 - 70 vjeç</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Jeni qytetar Shqiptar</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Keni nje Pashaporte ose Karte Identiteti te vlefshme</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Njihni numrin personal tuajin te Sigurimit Shoqeror</Text>
                    </View>
                    <View style={defaultStyles.checkedCirclesRow}>
                        <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                        <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Nuk keni histori kreditimi te keqe</Text>
                    </View>
                </ScrollView>
            </View>
        </SafeAreaView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        gap: 20,
    },
    bannerContainer: {
        alignItems: 'center'
    },
    secondRowContainer: {
        gap: 10,
        // paddingLeft: 28
    },
    thirdRowContainer: {
        gap: 15,
        paddingHorizontal: 28,
        flex: 1
    }
})