import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import BackButton from '@/components/buttons/BackButton'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const ApplicationApprovedScreen = ({ navigation }: { navigation: any }) => {

    const [selectedCard, setSelectedCard] = useState<'first' | 'second'>('second')

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={{ justifyContent: 'space-between', flex: 1 }}>
                <View style={{gap: 30}}>
                    <View style={styles.topContainer}>
                        <Image source={require('@/assets/images/application-approved-icon.png')} style={styles.headerImage} resizeMode='contain' />
                    </View>
                    <View style={styles.infoContainer}>
                        <View style={{ alignItems: 'center', width: '100%' }}>
                            <Text style={styles.firstText}>Aplikimi u Aprovua</Text>
                            <Text style={[styles.secondText, { marginTop: 10 }]}>Fantastike Abby Adams!</Text>
                            <Text style={styles.secondText}>Aplikimi juaj u aprovua, por mund t'ju ofrojme me shume</Text>
                            <Text style={styles.secondText}>Ju lutem, zgjidhni me poshte nese deshironi te perdorni shumen e lejuar!</Text>
                        </View>
                    </View>
                    <View style={styles.cardsContainer}>
                        <TouchableOpacity style={selectedCard == 'first' ? styles.singleActiveCardContainer : styles.singleInactiveCardContainer} onPress={() => setSelectedCard('first')}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Image source={selectedCard == 'first' ? require('@/assets/images/icons/activeCardCircle.png') : require('@/assets/images/icons/inactiveCardCircle.png')} resizeMode='contain' style={{ height: 16, width: 16 }} />
                            </View>
                            <View style={{ justifyContent: 'flex-start', width: '90%' }}>
                                <Text style={[defaultStyles.textRegular12, { color: selectedCard == 'first' ? Colors.whiteText : Colors.text }]}>Shuma e  lejuar e kredise</Text>
                                <View style={[styles.amountWrapper, { borderBottomColor: selectedCard == 'first' ? Colors.whiteText : Colors.text }]}>
                                    <Text style={[defaultStyles.textSemiBold16, { color: selectedCard == 'first' ? Colors.whiteText : Colors.text }]}>60 000 ALL</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity style={selectedCard == 'second' ? styles.singleActiveCardContainer : styles.singleInactiveCardContainer} onPress={() => setSelectedCard('second')}>
                            <View style={{ justifyContent: 'flex-start' }}>
                                <Image source={selectedCard == 'second' ? require('@/assets/images/icons/activeCardCircle.png') : require('@/assets/images/icons/inactiveCardCircle.png')} resizeMode='contain' style={{ height: 16, width: 16 }} />
                            </View>
                            <View style={{ justifyContent: 'flex-start', width: '90%' }}>
                                <Text style={[defaultStyles.textRegular12, { color: selectedCard == 'second' ? Colors.whiteText : Colors.text }]}>Shuma aktuale e kredise</Text>
                                <View style={[styles.amountWrapper, { borderBottomColor: selectedCard == 'second' ? Colors.whiteText : Colors.text }]}>
                                    <Text style={[defaultStyles.textSemiBold16, { color: selectedCard == 'second' ? Colors.whiteText : Colors.text }]}>48 000 ALL</Text>
                                </View>
                            </View>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ paddingHorizontal: 22, paddingBottom: 20 }}>
                    <PrimaryButton backgroundColor={Colors.primaryColor} title='Vazhdo' onButtonPressed={() => navigation.navigate('ApprovePersonalDataScreen')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default ApplicationApprovedScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 30,
    },
    topContainer: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerImage: {
        height: 107,
        width: 107
    },
    infoContainer: {
        gap: 25,
        alignItems: 'center',
    },
    firstText: {
        fontSize: 22,
        color: Colors.text,
        fontFamily: 'DMSansBold',
    },
    secondText: {
        fontSize: 12,
        color: Colors.text,
        fontFamily: 'DMSans',
        width: '80%',
        textAlign: 'center'
    },
    cardsContainer: {
        gap: 20,
        paddingHorizontal: 22,
        marginTop: 20
    },
    singleActiveCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Colors.primaryColor,
        padding: 10,
        borderRadius: 4
    },
    singleInactiveCardContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
        borderRadius: 4
    },
    amountWrapper: {
        paddingVertical: 8,
        borderBottomColor: Colors.whiteText,
        borderBottomWidth: 0.5
    },
    inactiveAmountWrapper: {
        paddingVertical: 8,
        borderBottomColor: Colors.text,
        borderBottomWidth: 0.5
    }
})