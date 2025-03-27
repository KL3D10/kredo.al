import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { Feather } from '@expo/vector-icons';

interface Props {
    label: string
    placeholder: string
    value?: string
    isValid?: boolean
    onChange: (text: string) => void
}

const InputPassword = ({ label, placeholder, value, isValid, onChange }: Props) => {

    const [hidden, setHidden] = useState<boolean>(true)

    return (
        <View style={styles.container}>
            <Text style={[defaultStyles.textRegular12, { color: Colors.text, paddingLeft: 10, lineHeight: 15.62 }]}>{label}</Text>
            <View style={styles.inputWrapper}>
                <TextInput value={value} placeholder={placeholder} secureTextEntry={hidden} onChangeText={(text) => onChange(text)} placeholderTextColor='#DDDDDD' style={value ? defaultStyles.textRegular16 : defaultStyles.textRegular10} />
                {hidden ? (
                    <TouchableOpacity onPress={() => setHidden(false)}>
                        <Feather name="eye" size={20} color={Colors.text} />
                    </TouchableOpacity>) : (
                    <TouchableOpacity onPress={() => setHidden(true)}>
                        <Feather name="eye-off" size={20} color={Colors.text} />
                    </TouchableOpacity>
                )}
            </View>
        </View>
    )
}

export default InputPassword

const styles = StyleSheet.create({
    container: {
        gap: 8
    },
    inputWrapper: {
        borderBottomColor: Colors.text,
        borderBottomWidth: 0.5,
        padding: 10,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between'
    }
})