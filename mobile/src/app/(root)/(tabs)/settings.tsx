import { BaseText } from '@/src/components/BaseText';
import ParallaxScrollView from '@/src/components/ParalaxScrollView';
import { ThemedView } from '@/src/components/ThemedView';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { Fonts } from '@/src/constants/theme';
import { useAppDispatch, useAppSelector } from '@/src/hooks/store';
import { clearCurrentUser, selectCurrentUser } from '@/src/store';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { Pressable, ScrollView, StyleSheet, Text, View } from 'react-native';

export default function SettingsScreen() {
  const { signOut } = useAuth();
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { avatar } = currentUser ?? {};

  const logout = () => {
    signOut();
    dispatch(clearCurrentUser());
  }

  return (
   <ScrollView contentInsetAdjustmentBehavior='automatic'>
    <View className="items-center justify-center gap-2 py-10 mb-10">
      <Image source={{ uri: avatar ?? '' }} style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Text className="text-2xl font-bold">{currentUser?.name}</Text>
    </View>
    <View className="px-4">
      <Pressable
        onPress={logout}
        className="bg-red-500 p-4 rounded-md flex-row-reverse items-center justify-center gap-2">
        <Text className="text-white">Sign Out</Text>
        <IconSymbol
          size={20}
          color="#FFFFFF"
          name="power"
        />
      </Pressable>
    </View>
   </ScrollView>
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