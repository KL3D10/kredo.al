import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

const TopSteps = ({ step }: { step: string }) => {
    return (
        <View style={styles.container}>
            {step == 'first' ? (
                <View style={styles.firstInfoContainer}>
                    <View style={styles.circle}>
                        <Text style={[defaultStyles.textSemiBold16, { color: Colors.whiteText }]}>01</Text>
                    </View>
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.whiteText }]}>Informacion Shtese</Text>
                </View>
            ) : (
                <View style={styles.secondInfoContainer}>
                    <Image source={require('@/assets/images/icons/checkedCircle.png')} resizeMode='contain' style={{width: 24, height: 24}} />
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.primaryColor }]}>Informacion Shtese</Text>
                </View>
            )}
            {step == 'first' ? (
                <View style={styles.firstAddressContainer}>
                    <View style={styles.secondaryCircle}>
                        <Text style={[defaultStyles.textSemiBold16, { color: Colors.lightGrey }]}>02</Text>
                    </View>
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.lightGrey }]}>Adresa</Text>
                </View>
            ) : (
                <View style={styles.secondAddressContainer}>
                    <View style={[styles.secondaryCircle, {borderColor: Colors.whiteText}]}>
                        <Text style={[defaultStyles.textSemiBold16, { color: Colors.whiteText }]}>02</Text>
                    </View>
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.whiteText }]}>Adresa</Text>
                </View>
            )}
        </View>
    )
}

export default TopSteps

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        borderBottomWidth: 0.5,
        paddingBottom: 4,
        borderBottomColor: Colors.text
    },
    firstInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: Colors.secondaryColor,
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 8
    },
    firstAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 7,
        paddingHorizontal: 8
    },
    secondInfoContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        paddingVertical: 7,
        paddingHorizontal: 8
    },
    secondAddressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10,
        backgroundColor: Colors.secondaryColor,
        borderRadius: 10,
        paddingVertical: 7,
        paddingHorizontal: 8
    },
    circle: {
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 5,
        paddingVertical: 3,
        borderColor: Colors.whiteText
    },
    secondaryCircle: {
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 4,
        paddingVertical: 3,
        borderColor: Colors.lightGrey
    }
})