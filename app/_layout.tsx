// expo-router enables file based routing so routing is inferred from the file
/**
 * stucture of the project
 * so files within pages/ directory become accessible as screens
 * The Stack component - organizes the apps screens ina stack based manner
 * Stack acts as a container for all the child screen
 * No need to define routes with react router its all done by file
 *
 * Stylesheets are typically defined as a styles object containg object styles
 *
 * const styles = StyleSheet.create({
 * con
 * })
 */

import { Stack } from "expo-router";

// Root Layout is the starting point for navigation and screens for the app, defining
// the navigation structure
// can add theme and styling such as headers to all screens
export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options ={{ headerShown: false}} />
    <Stack.Screen name="+not-found" />
  </Stack>
  )
}
