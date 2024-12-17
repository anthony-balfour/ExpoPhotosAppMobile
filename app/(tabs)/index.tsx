// View is for organizing layouts similiar to div in HTML
// Text is a component for displaying text
/**
 * adding a layout
 */

import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import ImageViewer from "@/components/ImageViewer";
import Button from "@/components/Button";

// cross image support component
import {Image} from "expo-image";

// @ is a custom path alias, meaning its a path shortcut for the root directory
// defined in tsconfig.json
const PlaceholderImage = require('@/assets/images/background-image.png')

export default function Index() {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} />
      </View>
      <View style={styles.footerContainer}>
        <Button label= "Choose a photo" />
        <Button label="Use this photo" />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#25292e',
    alignItems: 'center',
  },
  imageContainer : {
    flex: 1,
    paddingTop: 28,
  },
  footerContainer :{
    flex: 1 / 3,
    alignItems: 'center',
  }
});
