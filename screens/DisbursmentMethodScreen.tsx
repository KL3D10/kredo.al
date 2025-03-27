import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import { defaultStyles } from '@/constants/Styles'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import CustomDropdown from '@/components/forms/CustomDropdown'
import InputText from '@/components/forms/InputText'

const bankOptions = [
    { label: 'Raffaisen', value: 'Raffaisen' },
    { label: 'BKT', value: 'BKT' },
    { label: 'OTP', value: 'OTP' },
    { label: 'Credins', value: 'Credins' },
    { label: 'Tirana Bank', value: 'Tirana Bank' },
];

const DisbursmentMethodScreen = ({ navigation }: { navigation: any }) => {

    const [bankTransferOpened, setBankTransferOpened] = useState<boolean>(true)
    const [cashOpened, setCashOpened] = useState<boolean>(false)
    const [westernUnionOpened, setWesternUnionOpened] = useState<boolean>(false)

    const [selectedBank, setSelectedBank] = useState<string>('')
    const [accountNo, setAccountNo] = useState<string>('')

    const handleBankTransferPress = () => {
        setBankTransferOpened(true)
        setCashOpened(false)
        setWesternUnionOpened(false)
    }

    const handleCashPress = () => {
        setBankTransferOpened(false)
        setCashOpened(true)
        setWesternUnionOpened(false)
    }

    const handleWesternUnionPress = () => {
        setBankTransferOpened(false)
        setCashOpened(false)
        setWesternUnionOpened(true)
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={styles.topTextContainer}>
                    <View style={{ width: '68%' }}>
                        <Text style={[defaultStyles.textRegular24]}>Menyra e disbursimit</Text>
                        <Text style={[defaultStyles.textRegular12]}>Zgjidhni se si doni te merrni parate e kredise per te cilen keni aplikuar.</Text>
                    </View>
                </View>
            </View>
            <View style={styles.tabsContainer}>
                {!bankTransferOpened ? (
                    <View style={styles.firstTabClosed}>
                        <Text style={[defaultStyles.textRegular24, { width: '60%', color: Colors.text }]}>Transferte Bankare</Text>
                        <TouchableOpacity onPress={handleBankTransferPress}>
                            <AntDesign name="down" size={24} color={Colors.text} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.firstTabOpened}>
                        <Image source={require('@/assets/images/icons/bankTransferIcon.png')} resizeMode='contain' style={{ width: 78, height: 78 }} />
                        <Text style={[defaultStyles.textRegular24, { color: Colors.whiteText }]}>Transferte Bankare</Text>
                        <View style={{ gap: 10 }}>
                            <CustomDropdown
                                label='Banka'
                                placeholder='Zgjidh banken'
                                whiteMode={true}
                                data={bankOptions}
                                value={selectedBank}
                                onChange={value => {
                                    setSelectedBank(value);
                                }} />
                            <InputText
                                label='Llogaria bankare'
                                placeholder='AL00 0000 0000 xxxx xxxx xxxx xxxx'
                                whiteMode={true}
                                value={accountNo}
                                onChange={(text) => setAccountNo(text)}
                            />
                        </View>
                    </View>
                )}
                {!cashOpened ? (
                    <View style={styles.secondTabClosed}>
                        <Text style={[defaultStyles.textRegular24, { width: '60%', color: Colors.text }]}>Para ne Dore</Text>
                        <TouchableOpacity onPress={handleCashPress}>
                            <AntDesign name="down" size={24} color={Colors.text} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.secondTabOpened}>
                        <Image source={require('@/assets/images/icons/bankTransferIcon.png')} resizeMode='contain' style={{ width: 78, height: 78 }} />
                        <Text style={[defaultStyles.textRegular24, { color: Colors.whiteText }]}>Para ne Dore</Text>
                        <View style={{borderLeftColor: Colors.secondaryColor, borderLeftWidth: 5, paddingLeft: 6, paddingVertical: 6}}>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>Nese deshironi te merrni parate tuaja ne dore, ju dyhet te vini prane njeres prej degeve tona per te firmosur marreveshjen dhe te merrni kredine tuaj.</Text>
                        </View>
                    </View>
                )}
                {!westernUnionOpened ? (
                    <View style={styles.thirdTabClosed}>
                        <Text style={[defaultStyles.textRegular24, { width: '60%', color: Colors.text }]}>Western Union</Text>
                        <TouchableOpacity onPress={handleWesternUnionPress}>
                            <AntDesign name="down" size={24} color={Colors.text} />
                        </TouchableOpacity>
                    </View>
                ) : (
                    <View style={styles.thirdTabOpened}>
                        <Image source={require('@/assets/images/icons/bankTransferIcon.png')} resizeMode='contain' style={{ width: 78, height: 78 }} />
                        <Text style={[defaultStyles.textRegular24, { color: Colors.whiteText }]}>Western Union</Text>
                        <View style={{borderLeftColor: Colors.secondaryColor, borderLeftWidth: 5, paddingLeft: 6, paddingVertical: 6}}>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>Nese zgjidhni te terhiqni kredine prane Western Union, duhet te paraqiteni ne nje nga pikat e Western Union.</Text>
                        </View>
                    </View>
                )}
            </View>
            <View style={styles.buttonContainer}>
                <PrimaryButton title='Vazhdo' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('AdditionalInfoScreen')} />
            </View>
        </SafeAreaView>
    )
}

export default DisbursmentMethodScreen

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.background,
        flex: 1,
        gap: 10
    },
    bodyContainer: {
        justifyContent: 'space-between'
    },
    topTextContainer: {
        alignItems: 'center'
    },
    tabsContainer: {
        flex: 1,
        marginTop: 20
        // backgroundColor: 'red'
    },
    buttonContainer: {
        paddingBottom: 20,
        paddingHorizontal: 22
    },
    firstTabClosed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 95,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.primaryColor,
        zIndex: 3
    },
    secondTabClosed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 95,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.greenSecondary,
        marginTop: -15,
        zIndex: 2
    },
    thirdTabClosed: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-around',
        height: 95,
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        backgroundColor: Colors.greenTertiary,
        marginTop: -15,
        zIndex: 1
    },
    firstTabOpened: {
        backgroundColor: Colors.primaryColor,
        gap: 8,
        paddingHorizontal: 50,
        paddingVertical: 10,
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        zIndex: 3
    },
    secondTabOpened: {
        backgroundColor: Colors.greenSecondary,
        gap: 8,
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: -15,
        zIndex: 2
    },
    thirdTabOpened: {
        backgroundColor: Colors.greenTertiary,
        gap: 8,
        paddingHorizontal: 50,
        paddingVertical: 20,
        justifyContent: 'flex-start',
        borderBottomLeftRadius: 20,
        borderBottomRightRadius: 20,
        marginTop: -15,
        zIndex: 1
    },
})