import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onPress: () => void
}

const BackButton = ({ onPress }: Props) => {
    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.circleWrapper} onPress={onPress}>
                <AntDesign name="arrowleft" size={18} color={Colors.whiteText} />
            </TouchableOpacity>
            <Text style={[defaultStyles.textRegular16, { color: Colors.text }]}>Kthehu</Text>
        </View>
    )
}

export default BackButton

const styles = StyleSheet.create({
    container: {
        paddingHorizontal: 18,
        paddingVertical: 20,
        flexDirection: 'row',
        alignItems: 'center',
        gap: 10
    },
    circleWrapper: {
        backgroundColor: Colors.primaryColor,
        borderRadius: 50,
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center'
    },
})