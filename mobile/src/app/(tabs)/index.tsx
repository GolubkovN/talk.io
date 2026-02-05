import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Platform, StyleSheet } from 'react-native';

import { BaseText } from '@/src/components/BaseText';
import ParallaxScrollView from '@/src/components/ParalaxScrollView';
import { ThemedView } from '@/src/components/ThemedView';

export default function HomeScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#A1CEDC', dark: '#1D3D47' }}
      headerImage={
        <Image
          source={require('@/src/assets/images/partial-react-logo.png')}
          style={styles.reactLogo}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <BaseText type="title">Welcome!</BaseText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <BaseText type="subtitle">Step 1: Try it</BaseText>
        <BaseText>
          Edit <BaseText type="defaultSemiBold">app/(tabs)/index.tsx</BaseText> to see changes.
          Press{' '}
          <BaseText type="defaultSemiBold">
            {Platform.select({
              ios: 'cmd + d',
              android: 'cmd + m',
              web: 'F12',
            })}
          </BaseText>{' '}
          to open developer tools.
        </BaseText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <Link href="/modal">
          <Link.Trigger>
            <BaseText type="subtitle">Step 2: Explore</BaseText>
          </Link.Trigger>
          <Link.Preview />
          <Link.Menu>
            <Link.MenuAction title="Action" icon="cube" onPress={() => alert('Action pressed')} />
            <Link.MenuAction
              title="Share"
              icon="square.and.arrow.up"
              onPress={() => alert('Share pressed')}
            />
            <Link.Menu title="More" icon="ellipsis">
              <Link.MenuAction
                title="Delete"
                icon="trash"
                destructive
                onPress={() => alert('Delete pressed')}
              />
            </Link.Menu>
          </Link.Menu>
        </Link>

        <BaseText>
          {`Tap the Explore tab to learn more about what's included in this starter app.`}
        </BaseText>
      </ThemedView>
      <ThemedView style={styles.stepContainer}>
        <BaseText type="subtitle">Step 3: Get a fresh start</BaseText>
        <BaseText>
          {`When you're ready, run `}
          <BaseText type="defaultSemiBold">npm run reset-project</BaseText> to get a fresh{' '}
          <BaseText type="defaultSemiBold">app</BaseText> directory. This will move the current{' '}
          <BaseText type="defaultSemiBold">app</BaseText> to{' '}
          <BaseText type="defaultSemiBold">app-example</BaseText>.
        </BaseText>
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
  },
  stepContainer: {
    gap: 8,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: 'absolute',
  },
});
