/**
 * All components take in an object as a parameter called props,
 */

import {StyleSheet} from 'react-native';
import {Image, type ImageSource} from "expo-image";

// defines the type Props so that whenever an object is passed into
// ImageViewer, which are props, it type checks the params
// it allows easy additions if more params need to be added as
// well as a central location to manage imgSource type
//
type Props = {
  imgSource: ImageSource;
}

export default function ImageViewer({imgSource}: Props) {
  return <Image source={imgSource} style={styles.image} />
}

const styles = StyleSheet.create({
  image: {
    width: 320,
    height: 440,
    borderRadius: 18,
  }
})