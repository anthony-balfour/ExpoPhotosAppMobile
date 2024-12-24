/**
 * This component is the Button component which uses the Pressable component from
 * React Native and uses icons from FontAwesome
 */

import {StyleSheet, View, Pressable, Text} from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome'

/**
 * Sets a new type called Props to an object with types set for each attribute
 */
type Props = {
  label: string;
  theme?: 'primary'
  onPress?: () => void;
};

export default function Button({label, theme, onPress} : Props) {
  if (theme === 'primary'){
    return (
      <View
      // the style prop takes in an array of styles, with the rightmost the highest priority
        style={[
          styles.buttonContainer, {borderWidth: 4, borderColor: '#ffd33d', borderRadius: 18},
        ]}>
        <Pressable
          style={[styles.button, {backgroundColor: '#fff'}]}
          onPress={onPress}
        >
          <FontAwesome name="picture-o" size={18} color="@25292e" style={styles.buttonIcon} />
          <Text style={[styles.buttonLabel, { color: '#2529e'}]}>{label}</Text>

        </Pressable>
      </View>
    )
  }
  return (
    <View style={styles.buttonContainer}>
      <Pressable style={styles.button} onPress={() => alert("You pressed a button.")}>
        <Text style={styles.buttonLabel}>{label}</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    width: 320,
    height: 68,
    marginHorizontal: 20,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 3,
  },
  button: {
    borderRadius: 10,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',

  },
  buttonIcon: {
    paddingRight: 8,
  },
  buttonLabel: {
    color: '#fff',
    fontSize: 16,
  },
});