import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

import { BaseText } from '@/src/components/BaseText';
import { ThemedView } from '@/src/components/ThemedView';

export default function ModalScreen() {
  return (
    <ThemedView style={styles.container}>
      <BaseText type="title">This is a modal</BaseText>
      <Link href="/" dismissTo style={styles.link}>
        <BaseText type="link">Go to home screen</BaseText>
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
});
