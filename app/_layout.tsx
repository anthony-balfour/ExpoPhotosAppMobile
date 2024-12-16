// expo-router enables file based routing so routing is inferred from the file structure
/**
 * stucture of the project
 * so files within pages/ directory become accessible as screens
 * The Stack component - organizes the apps screens in a stack based manner
 * Stack acts as a container for all the child screens
 * No need to define routes like with react router its all done by file
 *
 * Stylesheets are typically defined as a styles object containg object styles
 *
 * const styles = StyleSheet.create({
 *
 * })
 *
 *  Every file inside app directory is either a layout file or a route file.
 */

import { Stack } from "expo-router";

// library for popular icon sets
import {Ionicons} from "@expo/vector-icons";

// Root Layout is the starting point for navigation and screens for the app, defining
// the navigation structure
// can add theme and styling such as headers to all screens from root
export default function RootLayout() {
  return (
  <Stack>
    <Stack.Screen name="(tabs)" options ={{ headerShown: false}} />
    <Stack.Screen name="+not-found" />
  </Stack>
  )
}
