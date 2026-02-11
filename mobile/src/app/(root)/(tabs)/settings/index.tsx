import { PrimaryButton, Title1 } from '@/src/components/atoms';
import { useAppDispatch, useAppSelector } from '@/src/hooks/store';
import { clearCurrentUser, selectCurrentUser } from '@/src/store';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { stylesheet } from './styles';

export default function SettingsScreen() {
  const [ signOutLoading, setSignOutLoading ] = useState(false);
  const { signOut } = useAuth();
  const currentUser = useAppSelector(selectCurrentUser);
  const dispatch = useAppDispatch();
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
   <ScrollView contentInsetAdjustmentBehavior='automatic' contentContainerStyle={stylesheet.container}>
    <View style={stylesheet.header}>
      <Image source={{ uri: avatar ?? '' }} style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Title1 overrideStyle={stylesheet.headerTitle}>{currentUser?.name}</Title1>
    </View>

    <PrimaryButton isLoading={signOutLoading} onPress={logout} containerStyle={stylesheet.buttonContent} disabled={signOutLoading} label="Sign Out" iconName="log-out-outline" />
   </ScrollView>
  );
}