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

SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
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

  return <Stack screenOptions={{ headerShown: false }} />
}

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"
