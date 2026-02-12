import { Pressable, Switch, View } from 'react-native'
import React, { ComponentProps, useState } from 'react'
import { Ionicons } from '@expo/vector-icons'
import { Paragraph2 } from '../../atoms'
import { stylesheet } from './styles'
import { useUnistyles } from 'react-native-unistyles'


type SettingItemProps = {
  control: 'link' | 'switch';
  item: {
    icon: string;
    label: string;
    value?: string;
    color: string;
  }
  switchValue?: boolean;
  onPress: () => void;
}
export const SettingItem = ({ item, control = 'link', onPress, switchValue }: SettingItemProps) => {
  const { theme } = useUnistyles();

  if (control === 'link') {
    return (
      <Pressable style={({ pressed }) => [stylesheet.menuItem, pressed && stylesheet.menuItemPressed]} onPress={onPress}>
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
    )
  }

  return (
    <View style={stylesheet.menuItem}>
      <View style={[stylesheet.menuItemIcon, { backgroundColor: `${item.color}20` }]}>
        <Ionicons name={item.icon as ComponentProps<typeof Ionicons>['name']} size={24} color={item.color} />
      </View>
      <View style={stylesheet.menuItemContent}>
        <Paragraph2>{item.label}</Paragraph2>
        <View style={stylesheet.menuItemValue}>
          <Switch value={switchValue} onValueChange={onPress} />
        </View>
      </View>
    </View>
  )
  
}