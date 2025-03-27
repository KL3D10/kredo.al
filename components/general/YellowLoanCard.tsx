import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onPress: () => void
}

const YellowLoanCard = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={require('@/assets/images/yellow-card.png')} resizeMode='contain' style={{ width: 260, height: 170, gap: 20, paddingHorizontal: 10, paddingVertical: 18, justifyContent: 'space-between' }}>
                <View>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>Kredi me nje kest</Text>
                    <Text style={[defaultStyles.textBold22, { color: Colors.whiteText }]}>Deri ne 60,000 ALL</Text>
                </View>
                <View>
                    <Text style={[defaultStyles.textRegular14, { color: Colors.whiteText }]}>Pagesa deri ne 30 dite</Text>
                    <View style={[defaultStyles.separator, { borderBottomColor: Colors.whiteText }]} />
                    <View style={styles.lastRowContainer}>
                        <View>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText, paddingTop: 8 }]}>Kredia e pare falas 0% interes</Text>
                        <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>0% komision</Text>
                        </View>
                        <AntDesign name="arrowright" size={18} color={Colors.whiteText} />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default YellowLoanCard

const styles = StyleSheet.create({
    lastRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    }
})