import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Colors from '@/constants/Colors'
import SecondaryButton from '@/components/buttons/SecondaryButton'
import { defaultStyles } from '@/constants/Styles'

const ApprovePersonalDataScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={{ paddingHorizontal: 22, flex: 1, justifyContent: 'space-between' }}>
                <View style={{ backgroundColor: '#E8F9F9', paddingHorizontal: 16, paddingVertical: 20, borderRadius: 4, gap: 15 }}>
                    <Text style={[defaultStyles.textBold24, { color: Colors.text }]}>Pelqimi per procesimin e te dhenave personale</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text }]}>Lorem ipsum dolor sit amet consectetur. Massa enim morbi eu posuere. Faucibus sit vivamus pellentesque lectus habitasse turpis in. At dictum turpis porttitor a et hac. Ligula lacus at turpis amet velit. Morbi a mi imperdiet in pulvinar aliquet leo odio neque. Sit lectus mauris quam eget donec. Donec sapien cras nec magna sagittis est elit diam hendrerit. Semper turpis tincidunt mauris sollicitudin nulla euismod tortor. Maecenas bibendum accumsan integer sed velit amet lacinia tortor sollicitudin.

                        Lorem ipsum dolor sit amet consectetur. Massa enim morbi eu posuere. Faucibus sit vivamus pellentesque lectus habitasse turpis in. At dictum turpis porttitor a et hac. Ligula lacus at turpis amet velit. Morbi a mi imperdiet in pulvinar aliquet leo odio neque. Sit lectus mauris quam eget donec. Donec sapien cras nec magna sagittis est elit diam hendrerit. Semper turpis tincidunt mauris sollicitudin nulla euismod tortor. Maecenas bibendum accumsan integer sed velit amet lacinia tortor sollicitudin.</Text>
                </View>
                <View>
                    <View style={[defaultStyles.flexRow, {gap: 8}]}>
                        <Image source={require('@/assets/images/iso27001.png')} resizeMode='contain' style={{ width: 70, height: 70 }} />
                        <Image source={require('@/assets/images/iso27001.png')} resizeMode='contain' style={{ width: 70, height: 70 }} />
                        <Image source={require('@/assets/images/isoLevel1.png')} resizeMode='contain' style={{ width: 70, height: 70 }} />
                        <Image source={require('@/assets/images/isoLevel2.png')} resizeMode='contain' style={{ width: 70, height: 70 }} />
                    </View>
                </View>
                <View style={{ paddingBottom: 20, gap: 10 }}>
                    <PrimaryButton title='Jam Dakord' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('DocumentValidationScreen')} />
                    <SecondaryButton borderColor={Colors.primaryColor} title='Nuk jam dakord' onButtonPressed={() => { }} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ApprovePersonalDataScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
})