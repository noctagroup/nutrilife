/**
 * @param {import("expo/config").ConfigContext} context
 * @returns {import("expo/config").ExpoConfig}
 */
export default (context) => ({
  ...context.config,
  name: "NutriLife",
  slug: "nutrilife",
  scheme: "nutrilife",
  version: "0.1.0",
  orientation: "portrait",
  icon: "./src/assets/images/icon.png",
  userInterfaceStyle: "automatic",
  splash: {
    image: "./src/assets/images/splash.png",
    resizeMode: "contain",
    backgroundColor: "#1F104A"
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
      foregroundImage: "./src/assets/images/adaptive-icon.png",
      backgroundColor: "#1F104A"
    }
  },
  // web: {
  //   bundler: "metro",
  //   output: "static",
  //   favicon: "./src/assets/images/favicon.png"
  // },
  experiments: {
    tsconfigPaths: true,
    typedRoutes: true
  },
  plugins: ["expo-router"]
})
