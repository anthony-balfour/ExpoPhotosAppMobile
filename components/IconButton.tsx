/**
 *
 * This function accepts three props: icon - icon name
 * label - text above button
 * onPress - what to do
 */

import { Pressable, StyleSheet, Text } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';


/**
 *
 * typeof is a TypeScript operator that gets the type of a value or object.
MaterialIcons.glyphMap is an object provided by the @expo/vector-icons library that maps icon names (e.g., "add", "delete") to their corresponding codes or values.
For example, MaterialIcons.glyphMap might look like:

typescript
Copy
Edit
{
  add: 59648,
  delete: 59649,
  edit: 59650,
  // ...more icon names
}
 */
type Props = {
  icon: keyof typeof MaterialIcons.glyphMap;
  label: string;
  onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
  return (
    <Pressable style={styles.iconButton} onPress={onPress}>
      <MaterialIcons name={icon} size={24} color="#fff" />
      <Text style={styles.iconButtonLabel}>{label}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconButtonLabel: {
    color: '#fff',
    marginTop: 12,
  },
});
