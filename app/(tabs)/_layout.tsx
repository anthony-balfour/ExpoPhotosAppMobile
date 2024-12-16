/**
 * Sets the bottom bar tabs for the lyaout. Ionicons is a popular icon set
 * Tabs is a navigation tool to manage the bottom tab
 *
 * Tabs.Screen is a marker for each screen/tab and an options param can be passed in
 * for configurations. One of them can be tabBarIcon, which is a function that takes in
 * params like color and focused whenever a tab is updated or onload, and passes those
 * params into Ionicons to render the corresponding icon
 */

import { Ionicons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';



export default function TabLayout() {
  return (
  <Tabs
    screenOptions={{
      tabBarActiveTintColor: '#ffd33d',
      headerStyle: {
        backgroundColor: '#25292e',
      },
      headerShadowVisible: false,
      headerTintColor: '#fff',
      tabBarStyle: {
        backgroundColor: '#25292e',
      }
    }}
  >
    <Tabs.Screen
      name="index"
      options={{
        title: 'Home',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'home-sharp' : 'home-outline'} color={color} size={24} />
        )
      }}
    />
    <Tabs.Screen
     name="about"
      options={{
        title: 'About',
        tabBarIcon: ({color, focused}) => (
          <Ionicons name={focused ? 'information-circle' : 'information-circle-outline'} color ={color} size={24} />
        )
      }}
    />
  </Tabs>
  )
}