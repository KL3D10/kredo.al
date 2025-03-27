import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font'
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useCallback } from 'react';
import * as SplashScreen from 'expo-splash-screen'
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import AppNavigator from './navigation/app-navigator';

SplashScreen.preventAutoHideAsync();

export default function App() {

  const [fontsLoaded, fontError] = useFonts({
    'DMSans': require('@/assets/fonts/DMSans-Regular.ttf'),
    'DMSansBold': require('@/assets/fonts/DMSans-Bold.ttf'),
    'DMSansSemiBold': require('@/assets/fonts/DMSans-SemiBold.ttf'),
    'DMSansItalic': require('@/assets/fonts/DMSans-Italic.ttf'),
    ...FontAwesome.font,
  })

  const onLayoutRootView = useCallback(async () => {
    if (fontsLoaded || fontError) {
      await SplashScreen.hideAsync()
    }
  }, [fontsLoaded, fontError])

  if (!fontsLoaded && !fontError) {
    return null;
  }

  return (
    <GestureHandlerRootView style={{ flex: 1 }} onLayout={onLayoutRootView}>
      <AppNavigator/>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
