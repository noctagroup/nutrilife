import "react-native-reanimated"

import { Stack } from "expo-router"

import { AnamnesisProvider } from "@/context/AmnesisContext"

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router"

export default function RootLayout() {
  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  return <RootLayoutNav />
}

function RootLayoutNav() {
  return (
    <AnamnesisProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AnamnesisProvider>
  )
}
