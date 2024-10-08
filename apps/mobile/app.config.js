/**
 * @param {import("expo/config").ConfigContext} context
 * @returns {import("expo/config").ExpoConfig}
 */
export default (context) => ({
  ...context.config,
  name: "NutriLife",
  slug: "nutrilife",
  scheme: "nutrilife",
  version: "1.0.0",
  orientation: "portrait",
  icon: "./assets/images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#ffffff"
  },
  updates: {
    fallbackToCacheTimeout: 0
  },
  assetBundlePatterns: ["**/*"],
  ios: {
    bundleIdentifier: "com.noctagroup.nutrilife",
    supportsTablet: true
  },
  android: {
    package: "com.noctagroup.nutrilife",
    adaptiveIcon: {
      foregroundImage: "./assets/images/adaptive-icon.png",
      backgroundColor: "#ffffff"
    }
  },
  web: {
    bundler: "metro",
    output: "static",
    favicon: "./assets/images/favicon.png"
  },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true
  },
  plugins: ["expo-router"]
})
