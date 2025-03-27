import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import TopSteps from '@/components/general/TopSteps'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { Dropdown } from 'react-native-element-dropdown'
import InputText from '@/components/forms/InputText'
import CustomDropdown from '@/components/forms/CustomDropdown'
import IAdditionalInfo from '@/types/IAdditionalInfo'
import PrimaryButton from '@/components/buttons/PrimaryButton'
import IAddress from '@/types/IAddress'

const employmentOptions = [
    { label: 'I punesuar', value: 'employed' },
    { label: 'I pa pune', value: 'unemployed' },
];

const statusOptions = [
    { label: 'I/E martuar', value: 'employed' },
    { label: 'Beqar/e', value: 'unemployed' },
    { label: 'I/E ve', value: 'unemployed' },
    { label: 'I/E divorcuar', value: 'unemployed' },
]

const regionOptions = [
    { label: 'Tirane', value: 'handleBackButton' },
    { label: 'Durres', value: 'Durres' },
    { label: 'Fier', value: 'Fier' },
    { label: 'Gjirokaster', value: 'Gjirokaster' },
]

const AdditionalInfoScreen = ({ navigation }: { navigation: any }) => {

    const initialAdditionalInfoState: IAdditionalInfo = {
        employment: '',
        income: '',
        email: '',
        status: ''
    }

    const initialAddressState: IAddress = {
        region: '',
        city: '',
        street: '',
        building: '',
        appartment: '',
        residence: '',
        code: ''
    }

    const [infoFormValue, setInfoFormValue] = useState<IAdditionalInfo>(initialAdditionalInfoState)
    const [addressFormValue, setAddressFormValue] = useState<IAddress>(initialAddressState)
    const [employmentValue, setEmploymentValue] = useState<string | null>(null);

    const [step, setStep] = useState<'first' | 'second'>('first')

    const handleInfoOnchange = (text: string, input: string) => {
        setInfoFormValue(prevState => ({ ...prevState, [input]: text }));
    };

    const handleAddressOnchange = (text: string, input: string) => {
        setAddressFormValue(prevState => ({ ...prevState, [input]: text }));
    };

    const handleBackButton = () => {
        if (step == 'first') {
            navigation.goBack()
        } else {
            setStep('first')
        }
    }

    const handleStepChange = () => {
        if (step == 'first') {
            setStep('second')
        } else {
            navigation.navigate('ApplicationProcessingScreen')
        }
    }

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={handleBackButton} />
            {<View style={styles.bodyContainer}>
                <TopSteps step={step} />
                {step == 'first' ? (
                    <View style={styles.formContainer}>
                        <CustomDropdown
                            label='Punesimi'
                            placeholder='Zgjidhni punesimin'
                            data={employmentOptions}
                            value={infoFormValue.employment}
                            onChange={value => {
                                handleInfoOnchange(value, 'employment');
                            }}
                        />
                        <InputText label='Te ardhurat mujore' placeholder='Shkruani te ardhurat mujore' value={infoFormValue.income} onChange={(text) => handleInfoOnchange(text, 'income')} />
                        <InputText label='Adresa e email-it' placeholder='Shkruani adresen e email-it' value={infoFormValue.email} onChange={(text) => handleInfoOnchange(text, 'email')} />
                        <CustomDropdown
                            label='Gjendja civile'
                            placeholder='Zgjidhni gjendjen civile'
                            data={statusOptions}
                            value={infoFormValue.status}
                            onChange={value => {
                                handleInfoOnchange(value, 'status');
                            }}
                        />
                    </View>
                ) : (
                    <View style={styles.formContainer}>
                        <CustomDropdown
                            label='Rrethi'
                            placeholder='Zgjidhni rrethin'
                            data={regionOptions}
                            value={addressFormValue.region}
                            onChange={value => {
                                handleAddressOnchange(value, 'region');
                            }}
                        />
                        <InputText label='Qyteti' placeholder='Shkruani Qytetin' value={addressFormValue.city} onChange={(text) => handleAddressOnchange(text, 'city')} />
                        <InputText label='Rruga' placeholder='Shkruani Rrugen' value={addressFormValue.street} onChange={(text) => handleAddressOnchange(text, 'street')} />
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '45%' }}>
                                <InputText label='Godina' placeholder='Shkruani Godinen' value={addressFormValue.building} onChange={(text) => handleAddressOnchange(text, 'building')} />
                            </View>
                            <View style={{ width: '45%' }}>
                                <InputText label='Apartamenti' placeholder='Shkruani Apartamentin' value={addressFormValue.appartment} onChange={(text) => handleAddressOnchange(text, 'appartment')} />
                            </View>
                        </View>
                        <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                            <View style={{ width: '45%' }}>
                                <InputText label='Rezidenca' placeholder='Shkruani Rezidencen' value={addressFormValue.residence} onChange={(text) => handleAddressOnchange(text, 'residence')} />
                            </View>
                            <View style={{ width: '45%' }}>
                                <InputText label='Kodi postar' placeholder='Shkruani Kodin postar' value={addressFormValue.code} onChange={(text) => handleAddressOnchange(text, 'code')} />
                            </View>
                        </View>
                    </View>
                )}
                <PrimaryButton title='Vazhdo' backgroundColor={Colors.primaryColor} onButtonPressed={handleStepChange} />
            </View>}
        </SafeAreaView>
    )
}

export default AdditionalInfoScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 5,
    },
    bodyContainer: {
        paddingHorizontal: 18,
        gap: 40
    },
    formContainer: {
        gap: 20,
        marginBottom: 30
    },
    dropdown: {
        height: 40,
        borderBottomColor: Colors.text,
        borderBottomWidth: 0.5,
    },
    selectedTextStyle: {
        fontSize: 16,
        color: Colors.text
    },
    placeholderStyle: {
        fontSize: 10,
        color: '#DDDDDD'
    },
})