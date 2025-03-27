import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Dropdown } from 'react-native-element-dropdown'
import { defaultStyles } from '@/constants/Styles';
import Colors from '@/constants/Colors';

interface Props {
    label: string
    placeholder: string
    data: { label: string; value: string; }[]
    value: string | null
    whiteMode?: boolean
    onChange: (value: string) => void
}

const CustomDropdown = ({ label, placeholder, data, value, whiteMode, onChange }: Props) => {
    return (
        <View style={{ gap: 10 }}>
            <Text style={[defaultStyles.textRegular12, { color: whiteMode ? Colors.whiteText : Colors.text, paddingLeft: 10, lineHeight: 15.62 }]}>{label}</Text>
            <Dropdown
                style={[styles.dropdown, {borderBottomColor: whiteMode ? Colors.whiteText : Colors.text}]}
                selectedTextStyle={[styles.selectedTextStyle, {color: whiteMode ? Colors.whiteText : Colors.text}]}
                placeholderStyle={styles.placeholderStyle}
                placeholder={placeholder}
                data={data}
                maxHeight={230}
                labelField="label"
                valueField="value"
                value={value}
                onChange={item => {
                    onChange(item.value);
                }}
            />
        </View>
    )
}

export default CustomDropdown

const styles = StyleSheet.create({
    dropdown: {
        height: 40,
        borderBottomWidth: 0.5,
    },
    selectedTextStyle: {
        fontSize: 16,
    },
    placeholderStyle: {
        fontSize: 10,
        color: '#DDDDDD',
        paddingLeft: 10
    },
})