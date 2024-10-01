import { useRouter } from "expo-router"
import { useEffect } from "react"
import { Text, View } from "react-native"

import Authorization from "@/src/hooks/Authorization"

export default function HomeIndex() {
  const router = useRouter()

  useEffect(() => {
    Authorization.isAuthorized(router)
  }, [router])

  return (
    <View>
      <Text>vou ser a home com os dados de nutrição</Text>
    </View>
  )
}
