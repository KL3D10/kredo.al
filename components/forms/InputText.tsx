import { StyleSheet, Text, TextInput, View } from 'react-native'
import React, { useState } from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

interface Props {
    label: string
    placeholder: string
    whiteMode?: boolean
    value?: string
    isValid?: boolean
    onChange: (text: string) => void
}

const InputText = ({ label, placeholder, value, isValid, whiteMode, onChange }: Props) => {

    return (
        <View style={styles.container}>
            <Text style={[defaultStyles.textRegular12, { color: whiteMode ? Colors.whiteText : Colors.text, paddingLeft: 10, lineHeight: 15.62 }]}>{label}</Text>
            <View style={[styles.inputWrapper, {borderBottomColor: whiteMode ? Colors.whiteText : Colors.text}]}>
                <TextInput value={value} placeholder={placeholder} onChangeText={(text) => onChange(text)} placeholderTextColor='#DDDDDD' style={[value ? defaultStyles.textRegular16 : defaultStyles.textRegular10, {color: whiteMode ? Colors.whiteText : Colors.text}]}  />
            </View>
        </View>
    )
}

export default InputText

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    inputWrapper: {
        borderBottomWidth: 0.5,
        padding: 10
    }
})