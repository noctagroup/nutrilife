import "react-native-reanimated"

import {
  Inter_400Regular,
  Inter_500Medium,
  Inter_600SemiBold,
  Inter_700Bold,
  useFonts
} from "@expo-google-fonts/inter"
import { SplashScreen, Stack } from "expo-router"
import { useEffect } from "react"
import { SafeAreaView, StyleSheet } from "react-native"

export { ErrorBoundary } from "expo-router"

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  return <RootLayoutNav />
}

function RootLayoutNav() {
  const [loaded, error] = useFonts({
    Inter_400Regular,
    Inter_500Medium,
    Inter_600SemiBold,
    Inter_700Bold
  })

  useEffect(() => {
    if (loaded || error) {
      SplashScreen.hideAsync()
    }
  }, [loaded, error])

  if (!(loaded || error)) {
    return null
  }

  return (
    <SafeAreaView style={RootLayoutNavStyles.container}>
      <Stack screenOptions={{ headerShown: false }} />
    </SafeAreaView>
  )
}

const RootLayoutNavStyles = StyleSheet.create({
  container: {
    flex: 1
  }
})
