import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import BackButton from '@/components/buttons/BackButton'
import { defaultStyles } from '@/constants/Styles'
import Colors from '@/constants/Colors'
import PrimaryButton from '@/components/buttons/PrimaryButton'

const CardFrontInfoScreen = ({ navigation }: { navigation: any }) => {
    return (
        <SafeAreaView style={styles.container} edges={['top']}>
            <BackButton onPress={() => navigation.goBack()} />
            <View style={styles.bodyContainer}>
                <View style={styles.topInfoContainer}>
                    <Image source={require('@/assets/images/card-front-icon.png')} style={styles.headerImage} resizeMode='contain' />
                    <Text style={[defaultStyles.textBold24, { color: Colors.text, textAlign: 'center', width: '80%' }]}>Fotografoni anen e perparme te ID</Text>
                    <Text style={[defaultStyles.textRegular12, { color: Colors.text, textAlign: 'center', width: '85%' }]}>Ju lutem e tregoni anen e perparme te kartes suaj te identitetit ne zonen e percaktuar dhe shtypni butonin “Capture”. Dokumenti duhet te jete i qarte, jo i turbullt ose i pikselizuar.</Text>
                </View>
                <View style={styles.bottomInfoContainer}>
                    <Text style={[defaultStyles.textSemiBold16, { color: Colors.text }]}>Main mistakes:</Text>
                    <View style={{ gap: 10 }}>
                        <View style={defaultStyles.checkedCirclesRow}>
                            <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                            <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Shmangni reflektimin dhe drite te drejtperdrejte</Text>
                        </View>
                        <View style={defaultStyles.checkedCirclesRow}>
                            <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                            <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Dokumenti per identifikimin personal duhet te jete ne fokus</Text>
                        </View>
                        <View style={defaultStyles.checkedCirclesRow}>
                            <Image source={require('@/assets/images/icons/checkedCircle.png')} style={{ width: 24, height: 24 }} />
                            <Text style={[defaultStyles.textRegular16, { color: Colors.text, width: '80%' }]}>Kontrolloni a jane te dukshme te gjiitha cepat e dokumentit per identifikim personal</Text>
                        </View>
                    </View>
                </View>
                <View style={styles.buttonConatiner}>
                    <PrimaryButton title='Start' backgroundColor={Colors.primaryColor} onButtonPressed={() => navigation.navigate('CardFrontScanScreen')} />
                </View>
            </View>
        </SafeAreaView>
    )
}

export default CardFrontInfoScreen

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
    bottomInfoContainer: {
        gap: 15,
    },
    buttonConatiner: {
        paddingBottom: 20
    }
})