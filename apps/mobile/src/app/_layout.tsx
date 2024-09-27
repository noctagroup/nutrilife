import "react-native-reanimated"

// import { SplashScreen } from "expo-router"
import { Stack } from "expo-router"
import { SafeAreaView } from "react-native-safe-area-context"

import { AnamnesisProvider } from "@/context/AmnesisContext"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

// Prevent the splash screen from auto-hiding before asset loading is complete.
// TODO: isso aqui não tá escondendo nunca a splash screen
// SplashScreen.preventAutoHideAsync()

export default function RootLayout() {
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.

  return (
    <AnamnesisProvider>
      <Stack />
    </AnamnesisProvider>
  )
}
