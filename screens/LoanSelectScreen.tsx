import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { SafeAreaView } from 'react-native-safe-area-context'
import { defaultStyles } from '@/constants/Styles'
import Slider from '@react-native-community/slider';
import { SCREEN_WIDTH } from '@/constants/Screen'
import { Dropdown } from 'react-native-element-dropdown';
import PrimaryButton from '@/components/buttons/PrimaryButton'

const monthOptions = [
    { label: '3 Muaj', value: '3' },
    { label: '6 Muaj', value: '6' },
    { label: '12 Muaj', value: '12' },
    { label: '24 Muaj', value: '24' },
    { label: '36 Muaj', value: '36' },
    { label: '48 Muaj', value: '48' },
];

const LoanSelectScreen = ({ navigation }: { navigation: any }) => {

    const [sliderValue, setSliderValue] = useState(0);
    const [dropdownValue, setDropdownValue] = useState<string>(monthOptions[0].value);


    function formatNumberWithCommas(value: number): string {
        return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }


    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <View style={styles.bannerContainer}>
                <Image source={require('@/assets/images/select-loan-banner.png')} resizeMode='contain' />
            </View>
            <ImageBackground source={require('@/assets/images/background-dots.png')} style={{ flex: 1, width: SCREEN_WIDTH, borderRadius: 20, justifyContent: 'space-between', paddingBottom: 15 }} resizeMode='cover'>
                <View style={{ gap: 30 }}>
                    <View style={styles.secondRowContainer}>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.text }]}>Zgjidh vleren e Kredise</Text>
                        <Text style={[defaultStyles.textRegular20, { color: Colors.primaryColor }]}>{formatNumberWithCommas(sliderValue)} ALL</Text>
                        <View style={[defaultStyles.flexRow, { backgroundColor: Colors.whiteText, borderRadius: 8, width: '100%' }]}>
                            <TouchableOpacity onPress={() => setSliderValue(sliderValue - 1000)}>
                                <Text style={[styles.sliderText, { color: Colors.secondaryColor }]}>-</Text>
                            </TouchableOpacity>
                            <Slider
                                style={{ width: '85%', height: 40 }}
                                minimumValue={4000}
                                maximumValue={500000}
                                minimumTrackTintColor={Colors.primaryColor}
                                maximumTrackTintColor='#8E98A8'
                                thumbTintColor={Colors.secondaryColor}
                                step={1000}
                                value={sliderValue}
                                onValueChange={setSliderValue}
                            />
                            <TouchableOpacity onPress={() => setSliderValue(sliderValue + 1000)}>
                                <Text style={[styles.sliderText, { color: Colors.primaryColor }]}>+</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={styles.secondRowContainer}>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.text }]}>Zgjidh afatin e Kredise</Text>
                        <Dropdown
                            style={styles.dropdown}
                            selectedTextStyle={styles.selectedTextStyle}
                            inputSearchStyle={styles.inputSearchStyle}
                            data={monthOptions}
                            maxHeight={230}
                            labelField="label"
                            valueField="value"
                            value={dropdownValue ?? monthOptions[0].value}
                            onChange={item => {
                                setDropdownValue(item.value);
                            }}
                        />
                    </View>
                    <View style={styles.secondRowContainer}>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.text }]}>Pagese mujore</Text>
                        <Text style={[defaultStyles.textRegular20, { color: Colors.secondaryColor }]}>{formatNumberWithCommas(Math.round(sliderValue / parseInt(dropdownValue!!)))} ALL</Text>
                    </View>
                </View>
                <View style={{ gap: 5, paddingHorizontal: 28 }}>
                    <PrimaryButton title='Apliko Tani' backgroundColor={Colors.primaryColor} onButtonPressed={() => {navigation.navigate('LoanApplyScreen')}} />
                    <View style={defaultStyles.flexRow}>
                        <TouchableOpacity>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.primaryColor, textDecorationLine: 'underline' }]}>Te dhena mbi kredine. </Text>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.primaryColor, textDecorationLine: 'underline' }]}>Kushtet e pergjithshme. </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default LoanSelectScreen

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
        paddingHorizontal: 28
    },
    sliderContainer: {
        flexDirection: 'row'
    },
    sliderText: {
        fontSize: 20,
        marginHorizontal: 8
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
    inputSearchStyle: {
        height: 40,
        fontSize: 16,
    },
})