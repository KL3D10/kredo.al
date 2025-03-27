import { View, Text, Image, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import MainNavigator from './main-navigator'
import Colors from '@/constants/Colors'
import { defaultStyles } from '@/constants/Styles'
import { isIOS } from '@/constants/Platform'

const Stack = createNativeStackNavigator()
const Tabs = createBottomTabNavigator()

const AppNavigator = () => {

    const [loggedIn, setLoggedIn] = useState(false)

    // const HomeNavigation = () => {
    //     if (!loggedIn) {
    //         return <AuthStack />
    //     } else {
    //         return <MainNavigator />
    //     }
    // }

    return (
        <NavigationContainer>
            <Tabs.Navigator
                initialRouteName='MainNavigator'
                screenOptions={{
                    headerShown: false,
                    tabBarStyle: {
                        backgroundColor: Colors.background,
                        paddingHorizontal: 15
                    }
                }}>
                <Tabs.Screen
                    name="MainNavigator"
                    component={MainNavigator}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                focused ? (
                                    <View style={styles.activeTabContainer}>
                                        <Image source={require('@/assets/images/icons/homeLight.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                        <Text style={[defaultStyles.textRegular16, { color: Colors.primaryColor }]}>Kredo</Text>
                                    </View>
                                ) : (
                                    <View style={styles.inactiveTabContainer}>
                                        <Image source={require('@/assets/images/icons/homeDark.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                    </View>
                                )
                            )
                        }
                    }}
                />
                <Tabs.Screen
                    name="Home"
                    component={MainNavigator}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                focused ? (
                                    <View style={styles.activeTabContainer}>
                                        <Image source={require('@/assets/images/icons/locationLight.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                        <Text style={[defaultStyles.textRegular16, { color: Colors.primaryColor }]}>Harta</Text>
                                    </View>
                                ) : (
                                    <View style={styles.inactiveTabContainer}>
                                        <Image source={require('@/assets/images/icons/locationDark.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                    </View>
                                )
                            )
                        }
                    }}
                />
                <Tabs.Screen
                    name="Contact"
                    component={MainNavigator}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                focused ? (
                                    <View style={styles.activeTabContainer}>
                                        <Image source={require('@/assets/images/icons/phoneLight.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                        <Text style={[defaultStyles.textRegular16, { color: Colors.primaryColor }]}>Kontakte</Text>
                                    </View>
                                ) : (
                                    <View style={styles.inactiveTabContainer}>
                                        <Image source={require('@/assets/images/icons/phoneDark.png')} style={{ height: 21, width: 21 }} resizeMode='contain' />
                                    </View>
                                )
                            )
                        }
                    }}
                />
                {/* <Tabs.Screen
                    name="HomeStack"
                    component={HomeStack}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{
                                    alignItems: 'center',
                                    gap: 2,
                                    paddingTop: 5,
                                    borderTopColor: focused ? Colors.primaryColor : Colors.blackSecondary,
                                    borderTopWidth: 3,
                                    height: '100%'
                                }}>
                                    <Image source={focused ? icons.homeIconActive : icons.homeIconLight} resizeMode='contain' style={{ height: 28, width: 28 }} />
                                    <Text style={[defaultStyles.textRegular13, { color: focused ? Colors.primaryColor : 'white' }]}>Home</Text>
                                </View>
                            )
                        }
                    }}
                />
                <Tabs.Screen
                    name="SettingsStack"
                    component={SettingsStack}
                    options={{
                        title: "",
                        tabBarIcon: ({ focused }) => {
                            return (
                                <View style={{
                                    alignItems: 'center',
                                    gap: 2,
                                    paddingTop: 5,
                                    borderTopColor: focused ? Colors.primaryColor : Colors.blackSecondary,
                                    borderTopWidth: 3,
                                    height: '100%'
                                }}>
                                    <Image source={focused ? icons.settingsIconActive : icons.settingsIconLight} resizeMode='contain' style={{ height: 28, width: 28 }} />
                                    <Text style={[defaultStyles.textRegular13, { color: focused ? Colors.primaryColor : 'white' }]}>Settings</Text>
                                </View>
                            )
                        }
                    }}
                /> */}
            </Tabs.Navigator>
        </NavigationContainer>
    )
}

export default AppNavigator

const styles = StyleSheet.create({
    activeTabContainer: {
        alignItems: 'center',
        flexDirection: 'row',
        gap: 8,
        borderColor: Colors.primaryColor,
        borderWidth: 1,
        borderRadius: 50,
        paddingHorizontal: 11,
        paddingVertical: 6,
        marginTop: 15,

    },
    inactiveTabContainer: {
        marginTop: 15,
    }
})