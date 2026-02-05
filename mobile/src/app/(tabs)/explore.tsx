import { StyleSheet } from 'react-native';

import { BaseText } from '@/src/components/BaseText';
import ParallaxScrollView from '@/src/components/ParalaxScrollView';
import { ThemedView } from '@/src/components/ThemedView';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { Fonts } from '@/src/constants/theme';

export default function TabTwoScreen() {
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#0FB9B1', dark: '#0FB9B1' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#6EE7B7"
          name="chevron.left.forwardslash.chevron.right"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <BaseText
          type="title"
          style={{
            fontFamily: Fonts.rounded,
          }}>
          Explore
        </BaseText>
      </ThemedView>
      <BaseText>This app includes example code to help you get started.</BaseText>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#808080',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
});
