// View is for organizing layouts similiar to div in HTML
// Text is a component for displaying text
/**
 * adding a layout
 */

import { Text, View, StyleSheet } from "react-native";
import {Link} from 'expo-router';
import ImageViewer from "@/components/ImageViewer";
import { useState } from 'react';

import Button from "@/components/Button";
// epxo library which grabs image from System
import * as ImagePicker from 'expo-image-picker';

// cross image support component
import {Image} from "expo-image";

// @ is a custom path alias, meaning its a path shortcut for the root directory
// defined in tsconfig.json
const PlaceholderImage = require('@/assets/images/background-image.png')


export default function Index() {

  // the <> represent a Type generic for the state variable. Use state returns an array of two values
  // state var, function to change it. The (undefined) is the intial value for the state variable
  const [selectedImage, setSelectedImage] = useState< string | undefined>(undefined);

  const pickImageAsync = async () => {
    // launchImageLibraryAsync returns an object about the selected image
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ['images'],
      allowsEditing: true,
      quality: 1,
    });

    // result of launchImageLibraryAsync returns info on the image including
    // the uri of the image
    if (!result.canceled) {
      console.log(result);
      // accessing the uri from the returned image object
      setSelectedImage(result.assets[0].uri)
    } else {
      alert("You did not select any image")
    };

  }


  // setting the Image picker which connects to the system UI>
  return (

    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <ImageViewer imgSource={PlaceholderImage} selectedImage = {selectedImage}/>
      </View>
      <View style={styles.footerContainer}>
        <Button label= "Choose a photo" theme="primary" onPress={pickImageAsync} />
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
