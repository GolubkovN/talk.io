import { BaseText } from '@/src/components/BaseText';
import ParallaxScrollView from '@/src/components/ParalaxScrollView';
import { ThemedView } from '@/src/components/ThemedView';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { Fonts } from '@/src/constants/theme';
import { useAuth } from '@clerk/clerk-expo';
import { Pressable, StyleSheet, Text } from 'react-native';

export default function SettingsScreen() {
  const { signOut } = useAuth();
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#353636' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#808080"
          name="gear"
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
      <Pressable
        onPress={() => signOut()}
        className="bg-red-500 p-4 rounded-md flex-row-reverse items-center justify-center gap-2">
        <Text className="text-white">Sign Out</Text>
        <IconSymbol
          size={20}
          color="#FFFFFF"
          name="power"
        />
      </Pressable>
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