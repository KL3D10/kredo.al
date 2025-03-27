import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

interface Props {
    borderColor: string
    title: string
    onButtonPressed: () => void
}

const SecondaryButton = ({borderColor, title, onButtonPressed}: Props) => {
    return (
        <TouchableOpacity style={[styles.container, { borderColor: borderColor }]} onPress={onButtonPressed}>
            <Text style={[defaultStyles.textBold16, { color: Colors.text }]}>{title}</Text>
        </TouchableOpacity>
    )
}

export default SecondaryButton

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
        borderWidth: 1
    }
})