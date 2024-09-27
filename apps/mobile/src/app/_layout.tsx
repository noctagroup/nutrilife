import "react-native-reanimated"

import { SplashScreen, Stack } from "expo-router"

import { AnamnesisProvider } from "@/context/AmnesisContext"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

export const unstable_settings = {
  initialRouteName: "(home)"
}

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  return (
    <AnamnesisProvider>
      <RootLayoutNav />
    </AnamnesisProvider>
  )
}

function RootLayoutNav() {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="anamnesis/index">
      <Stack.Screen name="(home)" />
      <Stack.Screen name="anamnesis" />
      <Stack.Screen name="auth" />
    </Stack>
  )
}
