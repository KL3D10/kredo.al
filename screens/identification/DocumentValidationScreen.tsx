import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import { AntDesign } from '@expo/vector-icons';
import PrimaryButton from '@/components/buttons/PrimaryButton'

const DocumentValidationScreen = ({ navigation }: { navigation: any }) => {

    const [selectedDocument, setSelectedDocument] = useState<'passport' | 'idCard'>('idCard')

    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={styles.topInfoContainer}>
                    <Image source={require('@/assets/images/document-validation-icon.png')} style={styles.headerImage} resizeMode='contain' />
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, textAlign: 'center' }]}>Zgjidhni nje dokument dhe filloni te beni verifikimin</Text>
                    <View style={[defaultStyles.flexRow, { gap: 8 }]}>
                        <AntDesign name="infocirlceo" size={20} color={Colors.primaryColor} />
                        <Text style={[defaultStyles.textRegular12, { color: Colors.text }]}>Ky procecs mund te zgjasi rreth 5 minuta</Text>
                    </View>
                </View>
                <View style={styles.documentContainer}>
                    <TouchableOpacity style={[styles.documentTypeContainer, selectedDocument == 'passport' ? styles.activeCard : styles.inactiveCard]} onPress={() => setSelectedDocument('passport')}>
                        <Image source={require('@/assets/images/icons/passport-icon.png')} resizeMode='contain' style={{ width: 55, height: 83 }} />
                        <View style={{ justifyContent: 'space-between', paddingVertical: 5 }}>
                            <Image source={require('@/assets/images/icons/lineOut.png')} resizeMode='contain' style={{ width: 24, height: 24 }} />
                            <Text style={defaultStyles.textRegular24}>Pasaporte</Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.documentTypeContainer, selectedDocument == 'idCard' ? styles.activeCard : styles.inactiveCard]} onPress={() => setSelectedDocument('idCard')}>
                        <Image source={require('@/assets/images/icons/idCard-icon.png')} resizeMode='contain' style={{ width: 83, height: 55 }} />
                        <View style={{ justifyContent: 'space-between' }}>
                            <Image source={require('@/assets/images/icons/lineOut.png')} resizeMode='contain' style={{ width: 24, height: 24 }} />
                            <Text style={defaultStyles.textRegular24}>Karte ID</Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <View style={{paddingBottom: 20}}>
                    <PrimaryButton title='Vazhdo' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('CardFrontInfoScreen')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default DocumentValidationScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        gap: 10
    },
    bodyContainer: {
        flex: 1,
        justifyContent: 'space-between',
        paddingHorizontal: 22
    },
    topInfoContainer: {
        alignItems: 'center',
        gap: 10
    },
    headerImage: {
        height: 120,
        width: 120
    },
    documentContainer: {
        gap: 10
    },
    documentTypeContainer: {
        flexDirection: 'row',
        gap: 10,
        marginHorizontal: 34,
        paddingHorizontal: 30,
        paddingVertical: 28,
        borderRadius: 8
    },
    activeCard: {
        backgroundColor: Colors.secondaryColor,

    },
    inactiveCard: {
        borderColor: Colors.lightGrey,
        borderWidth: 1
    }
})