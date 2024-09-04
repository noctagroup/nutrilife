import "react-native-reanimated"
import "../tamagui-web.css"

import { DarkTheme, DefaultTheme, ThemeProvider } from "@react-navigation/native"
import { Stack } from "expo-router"
import * as SplashScreen from "expo-splash-screen"
import { useColorScheme } from "react-native"
import { TamaguiProvider } from "tamagui"

import { tamaguiConfig } from "@@/tamagui.config"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

export const unstable_settings = {
  initialRouteName: "(anamnesis)"
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  return <RootLayoutNav />
}

function RootLayoutNav() {
  const colorScheme = useColorScheme()

  return (
    <TamaguiProvider config={tamaguiConfig} defaultTheme={colorScheme!}>
      <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack>
          <Stack.Screen name="(anamnesis)" options={{ headerShown: false }} />
        </Stack>
      </ThemeProvider>
    </TamaguiProvider>
  )
}
