import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';

interface Props {
    onPress: () => void
}

const BlueLoanCard = ({ onPress }: Props) => {
    return (
        <TouchableOpacity onPress={onPress}>
            <ImageBackground source={require('@/assets/images/blue-card.png')} resizeMode='contain' style={{ width: 260, height: 170, gap: 20, paddingHorizontal: 10, paddingVertical: 18, justifyContent: 'space-between' }}>
                <View>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>Kredi me disa keste</Text>
                    <Text style={[defaultStyles.textBold22, { color: Colors.whiteText }]}>Deri ne 400,000 ALL</Text>
                </View>
                <View>
                    <Text style={[defaultStyles.textRegular14, { color: Colors.whiteText }]}>Shlyerje deri ne 48 muaj</Text>
                    <View style={[defaultStyles.separator, { borderBottomColor: Colors.whiteText }]} />
                    <View style={styles.lastRowContainer}>
                        <View>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText, paddingTop: 8 }]}>Bli shume</Text>
                            <Text style={[defaultStyles.textRegular12, { color: Colors.whiteText }]}>Paguaj pak e nga pak!</Text>
                        </View>
                        <AntDesign name="arrowright" size={18} color={Colors.whiteText} />
                    </View>
                </View>
            </ImageBackground>
        </TouchableOpacity>
    )
}

export default BlueLoanCard

const styles = StyleSheet.create({
    lastRowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingRight: 10
    }
})