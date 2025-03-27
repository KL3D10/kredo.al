import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'

interface Props {
    backgroundColor: string
    title: string
    onButtonPressed: () => void
}

const PrimaryButton = ({backgroundColor, title, onButtonPressed}: Props) => {
  return (
    <TouchableOpacity style={[styles.container, {backgroundColor: backgroundColor}]} onPress={onButtonPressed}>
      <Text style={[defaultStyles.textRegular16, {color: Colors.whiteText}]}>{title}</Text>
    </TouchableOpacity>
  )
}

export default PrimaryButton

const styles = StyleSheet.create({
    container: {
        paddingVertical: 10,
        paddingHorizontal: 15,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 4,
        flexDirection: 'row',
    }
})