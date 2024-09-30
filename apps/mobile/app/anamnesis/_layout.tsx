import { Stack } from "expo-router"

import { AnamnesisProvider } from "@/context/AmnesisContext"

export default function AnamnesisLayout() {
  return (
    <AnamnesisProvider>
      <Stack screenOptions={{ headerShown: false }} />
    </AnamnesisProvider>
  )
}
