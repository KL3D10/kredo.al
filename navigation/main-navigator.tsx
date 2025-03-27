import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import CreateAccount from '@/screens/CreateAccount'
import ApplicationProcesingModal from '@/screens/modals/ApplicationProcesingModal'
import OTPCodeScreen from '@/screens/OTPCodeScreen'
import LoanApplyScreen from '@/screens/LoanApplyScreen'
import HomeScreen from '@/screens/HomeScreen'
import LoanSelectScreen from '@/screens/LoanSelectScreen'
import AdditionalInfoScreen from '@/screens/AdditionalInfoScreen'
import ApplicationProcessingScreen from '@/screens/ApplicationProcessingScreen'
import ApplicationApprovedScreen from '@/screens/ApplicationApprovedScreen'
import ApprovePersonalDataScreen from '@/screens/ApprovePersonalDataScreen'
import DocumentValidationScreen from '@/screens/identification/DocumentValidationScreen'
import CardFrontInfoScreen from '@/screens/identification/CardFrontInfoScreen'
import CardFrontScanScreen from '@/screens/identification/CardFrontScanScreen'
import CardFrontCheckScreen from '@/screens/identification/CardFrontCheckScreen'
import CardBackScanScreen from '@/screens/identification/CardBackScanScreen'
import CardBackCheckScreen from '@/screens/identification/CardBackCheckScreen'
import FaceInfoScreen from '@/screens/identification/FaceInfoScreen'
import FaceScanScreen from '@/screens/identification/FaceScanScreen'
import DisbursmentMethodScreen from '@/screens/DisbursmentMethodScreen'
import FaceSubmitScreen from '@/screens/identification/FaceSubmitScreen'

const Stack = createNativeStackNavigator()

const MainNavigator = () => {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name='HomeScreen' component={HomeScreen} />
            <Stack.Screen name='LoanSelectScreen' component={LoanSelectScreen} />
            <Stack.Screen name='LoanApplyScreen' component={LoanApplyScreen} />
            <Stack.Screen name='CreateAccount' component={CreateAccount} />
            <Stack.Screen name='ApplicationProcesingModal' component={ApplicationProcesingModal} options={{ presentation: 'transparentModal' }} />
            <Stack.Screen name='OTPCodeScreen' component={OTPCodeScreen} />
            <Stack.Screen name='DisbursmentMethodScreen' component={DisbursmentMethodScreen} />
            <Stack.Screen name='AdditionalInfoScreen' component={AdditionalInfoScreen} />
            <Stack.Screen name='ApplicationProcessingScreen' component={ApplicationProcessingScreen} />
            <Stack.Screen name='ApplicationApprovedScreen' component={ApplicationApprovedScreen} />
            <Stack.Screen name='ApprovePersonalDataScreen' component={ApprovePersonalDataScreen} />
            <Stack.Screen name='DocumentValidationScreen' component={DocumentValidationScreen} />
            <Stack.Screen name='CardFrontInfoScreen' component={CardFrontInfoScreen} />
            <Stack.Screen name='CardFrontScanScreen' component={CardFrontScanScreen} />
            <Stack.Screen name='CardFrontCheckScreen' component={CardFrontCheckScreen} />
            <Stack.Screen name='CardBackScanScreen' component={CardBackScanScreen} />
            <Stack.Screen name='CardBackCheckScreen' component={CardBackCheckScreen} />
            <Stack.Screen name='FaceInfoScreen' component={FaceInfoScreen} />
            <Stack.Screen name='FaceScanScreen' component={FaceScanScreen} />
            <Stack.Screen name='FaceSubmitScreen' component={FaceSubmitScreen} />
        </Stack.Navigator>
    )
}

export default MainNavigator

const styles = StyleSheet.create({})