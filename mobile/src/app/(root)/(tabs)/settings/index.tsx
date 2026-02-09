import { Paragraph2, Title1 } from '@/src/components/atoms';
import { IconSymbol } from '@/src/components/ui/IconSymbol';
import { useAppDispatch, useAppSelector } from '@/src/hooks/store';
import { clearCurrentUser, selectCurrentUser } from '@/src/store';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ActivityIndicator, Pressable, ScrollView, View } from 'react-native';
import { stylesheet } from './styles';
import { useUnistyles } from 'react-native-unistyles';

export default function SettingsScreen() {
  const [ signOutLoading, setSignOutLoading ] = useState(false);
  const { signOut } = useAuth();
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
  const { theme } = useUnistyles();
  const { avatar } = currentUser ?? {};

  const logout =  async () => {
    setSignOutLoading(true);
    try {
        await signOut();
        dispatch(clearCurrentUser());
      } finally {
        setSignOutLoading(false);
      }
  }

  return (
   <ScrollView contentInsetAdjustmentBehavior='automatic'>
    <View style={stylesheet.header}>
      <Image source={{ uri: avatar ?? '' }} style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Title1 overrideStyle={stylesheet.headerTitle}>{currentUser?.name}</Title1>
    </View>
    <View>
      <Pressable
        disabled={signOutLoading}
        onPress={logout}
      >
        <View style={stylesheet.buttonContent}>
          {signOutLoading ? <ActivityIndicator size="small" color={theme.colors.textSecondary} /> : (
            <IconSymbol
              size={20}
              color={theme.colors.textSecondary}
              name="power"
            />
          )}
          <Paragraph2 overrideStyle={stylesheet.buttonText}>Sign Out</Paragraph2>
        </View>
      </Pressable>
    </View>
   </ScrollView>
  );
}