import { DangerButton, Title1 } from '@/src/components/atoms';
import { useAppDispatch, useAppSelector } from '@/src/hooks/store';
import { clearCurrentUser, selectCurrentUser } from '@/src/store';
import { useAuth } from '@clerk/clerk-expo';
import { Image } from 'expo-image';
import { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { stylesheet } from './styles';
import { MENU_SECTIONS } from '@/src/constats';
import { Paragraph } from '@/src/components/atoms/Typography/Paragraph';
import { UnistylesRuntime, useUnistyles } from 'react-native-unistyles';
import { SettingItem } from '@/src/components';
import { save } from '@/src/utils';

export default function SettingsScreen() {
  const { theme } = useUnistyles();
  const [ signOutLoading, setSignOutLoading ] = useState(false);
  const [ darkMode, setDarkMode ] = useState<boolean>(theme.name === 'dark');

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

  const handlersMap = {
    'notifications': () => {
      console.log('notifications');
    },
    'darkMode': () => {
      const currentTheme = theme.name === 'light' ? 'dark' : 'light';
      UnistylesRuntime.setTheme(currentTheme);
      setDarkMode(currentTheme === 'dark');
      save('theme', currentTheme);
    },
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
      {MENU_SECTIONS.map((section) => {
        return (
        <View key={section.title}>
          <Paragraph>{section.title}</Paragraph>
          <View style={stylesheet.menuItems}>
            {section.items.map((item) => {
              const handler =
                'option' in item && typeof item.option === 'string'
                  ? handlersMap[item.option]
                  : undefined;
                  
              const switchValue = 'option' in item && item.option === 'darkMode' ? darkMode : false;
              return (
                <SettingItem
                  switchValue={switchValue}
                  control={item.type}
                  key={item.label}
                  item={item}
                  onPress={handler ? handler : () => {}}
                />
              );
            })}
          </View>
        </View>
      )})}
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