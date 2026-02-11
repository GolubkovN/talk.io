import { Paragraph2, DangerButton, Title1 } from '@/src/components/atoms';
import { useAppDispatch, useAppSelector } from '@/src/hooks/store';
import { clearCurrentUser, selectCurrentUser } from '@/src/store';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { ComponentProps, useState } from 'react';
import { Pressable, ScrollView, View } from 'react-native';
import { stylesheet } from './styles';
import { MENU_SECTIONS } from '@/src/constats';
import { Paragraph } from '@/src/components/atoms/Typography/Paragraph';
import { Ionicons } from '@expo/vector-icons';
import { useUnistyles } from 'react-native-unistyles';

export default function SettingsScreen() {
  const [ signOutLoading, setSignOutLoading ] = useState(false);

  const { theme } = useUnistyles();
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
   <ScrollView 
    showsVerticalScrollIndicator={false} 
    contentContainerStyle={stylesheet.container} 
    style={stylesheet.inner}>
    <View style={stylesheet.header}>
      <Image source={{ uri: avatar ?? '' }} style={{ width: 150, height: 150, borderRadius: 100 }} />
      <Title1 overrideStyle={stylesheet.headerTitle}>{currentUser?.name}</Title1>
    </View>

    <View style={stylesheet.menuSections}>
      {MENU_SECTIONS.map((section) => (
        <View key={section.title}>
          <Paragraph>{section.title}</Paragraph>
          <View style={stylesheet.menuItems}>
            {section.items.map((item) => (
              <Pressable key={item.label} style={({ pressed }) => [stylesheet.menuItem, pressed && stylesheet.menuItemPressed]} onPress={() => {}}>
                <View style={[stylesheet.menuItemIcon, { backgroundColor: `${item.color}20` }]}>
                  <Ionicons name={item.icon as ComponentProps<typeof Ionicons>['name']} size={24} color={item.color} />
                </View>
                <View style={stylesheet.menuItemContent}>
                  <Paragraph2>{item.label}</Paragraph2>
                  <View style={stylesheet.menuItemValue}>
                    <Paragraph2>{item.value}</Paragraph2>
                    <Ionicons name="chevron-forward-outline" size={24} color={theme.colors.textPrimary} />
                  </View>
                </View>
              </Pressable>
            ))}
          </View>
        </View>
      ))}
    </View>

    <DangerButton 
      isLoading={signOutLoading} 
      onPress={logout} 
      containerStyle={stylesheet.buttonContent}   
      disabled={signOutLoading}
      label="Sign Out" 
      iconName="log-out-outline"
      iconColor={theme.colors.onDanger}
    />
   </ScrollView>
  );
}