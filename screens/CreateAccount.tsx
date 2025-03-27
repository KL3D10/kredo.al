import { Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Path, Svg } from 'react-native-svg'
import { SCREEN_WIDTH } from '@/constants/Screen'
import { AntDesign } from '@expo/vector-icons';
import { defaultStyles } from '@/constants/Styles'
import InputText from '@/components/forms/InputText'
import ICreateAcccount from '@/types/ICreateAccount'
import InputPassword from '@/components/forms/InputPassword'
import PrimaryButton from '@/components/buttons/PrimaryButton'


const CreateAccount = ({ navigation }: { navigation: any }) => {

    const initialCreateAccountState: ICreateAcccount = {
        name: '',
        surname: '',
        fathersName: '',
        idNumber: '',
        phone: '',
        password: ''
    }

    const [formValue, setFormValue] = useState<ICreateAcccount>(initialCreateAccountState)
    const [firstAccepted, setFirstAccepted] = useState<boolean>(false)
    const [secondAccepted, setSecondAccepted] = useState<boolean>(false)

    const handleOnchange = (text: string, input: string) => {
        setFormValue(prevState => ({ ...prevState, [input]: text }));
    };

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={{ position: 'relative' }}>
                <Svg
                    width={SCREEN_WIDTH}
                    height={101}
                    viewBox="0 0 394 101"
                    fill="none"
                    style={{ position: 'absolute', top: 0 }}
                >
                    <Path
                        fillRule="evenodd"
                        clipRule="evenodd"
                        d="M0 0h360.5C379.002 0 394 14.998 394 33.5c0 18.502-14.998 33.5-33.5 33.5H49C22.632 67 1.128 82.09.043 101H0V0z"
                        fill="#19C3C6"
                    />
                </Svg>
                <View style={styles.headerContainer}>
                    <TouchableOpacity style={styles.circleWrapper} onPress={() => navigation.goBack()}>
                        <AntDesign name="arrowleft" size={18} color={Colors.whiteText} />
                    </TouchableOpacity>
                    <Text style={[defaultStyles.textRegular16, { color: Colors.whiteText }]}>Krijo Llogarine</Text>
                </View>
            </View>
            <ScrollView style={styles.bodyContainer} contentContainerStyle={{ gap: 10, paddingVertical: 20 }} showsVerticalScrollIndicator={false}>
                <InputText label='Emri' placeholder='Shkruani emrin tuaj' value={formValue.name} onChange={(text) => handleOnchange(text, 'name')} />
                <InputText label='Mbiemri' placeholder='Shkruani mbiemrin tuaj' value={formValue.surname} onChange={(text) => handleOnchange(text, 'surname')} />
                <InputText label='Atesia' placeholder='Shkruani emrin e babait' value={formValue.fathersName} onChange={(text) => handleOnchange(text, 'fathersName')} />
                <InputText label='Numri ID' placeholder='Shkruani numrin ID' value={formValue.idNumber} onChange={(text) => handleOnchange(text, 'idNumber')} />
                <InputText label='Phone' placeholder='Shkruani numrin e telefonit' value={formValue.phone} onChange={(text) => handleOnchange(text, 'phone')} />
                <InputPassword label='Fjalekalimi' placeholder='Shkruani fjalekalimin' value={formValue.password} onChange={(text) => handleOnchange(text, 'password')} />
                <View style={styles.acceptanceContainer}>
                    <View style={styles.acceptanceRow}>
                        <TouchableOpacity onPress={() => setFirstAccepted(!firstAccepted)}>
                            {firstAccepted ? (
                                <Image source={require('@/assets/images/icons/uncheckedBox.png')} style={{ height: 16, width: 16 }} resizeMode='contain' />
                            ) : (
                                <Image source={require('@/assets/images/icons/checkedBox.png')} style={{ height: 16, width: 16 }} resizeMode='contain' />
                            )}
                        </TouchableOpacity>
                        <Text style={[defaultStyles.textRegular12, { width: '90%' }]}>Une jam dakord me Politika e Privatesise dhe Kushtet e Pergjithshme</Text>
                    </View>
                    <View style={styles.acceptanceRow}>
                        <TouchableOpacity onPress={() => setSecondAccepted(!secondAccepted)}>
                            {secondAccepted ? (
                                <Image source={require('@/assets/images/icons/uncheckedBox.png')} style={{ height: 16, width: 16 }} resizeMode='contain' />
                            ) : (
                                <Image source={require('@/assets/images/icons/checkedBox.png')} style={{ height: 16, width: 16 }} resizeMode='contain' />
                            )}
                        </TouchableOpacity>
                        <Text style={[defaultStyles.textRegular12, { width: '90%' }]}>Duke klikuar ketu, Ju i jepni Kredo.al te drejta per te kerkuar mbi historikun tuaj te kredive ne Rregjistrin e Kredive ne Banken e Shqiperise. Ju lutem te lexoni Klauzolen e pelqimit paraprak</Text>
                    </View>
                </View>
                <View style={styles.buttonsContainer}>
                    <PrimaryButton title='Krijo Llogarine' backgroundColor={Colors.primaryColor} onButtonPressed={() => {navigation.navigate('ApplicationProcesingModal')}} />
                    <View style={styles.bottomTextRow}>
                        <Text style={[defaultStyles.textRegular12, { color: '#989898' }]}>Tashme keni nje llogari?</Text>
                        <TouchableOpacity onPress={() => {}}>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.primaryColor }]}>Hyr ne llogari</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default CreateAccount

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.background,
        gap: 30
    },
    headerContainer: {
        paddingHorizontal: 25,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    circleWrapper: {
        backgroundColor: Colors.secondaryColor,
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
    bodyContainer: {
        flex: 1,
        marginTop: 5,
        paddingHorizontal: 17,
    },
    acceptanceContainer: {
        gap: 15,
        marginTop: 30
    },
    acceptanceRow: {
        width: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        gap: 10
    },
    buttonsContainer: {
        marginTop: 20,
        gap: 5
    },
    bottomTextRow: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 8
    }
})