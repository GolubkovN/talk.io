import { Image } from "expo-image";
import { Pressable, StyleProp, ViewStyle } from "react-native";
import { stylesheet } from "./styles";
import { StyleSheet, useUnistyles } from "react-native-unistyles";

type AvatarProps = {
  source: string;
  isOnline?: boolean;
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const Avatar = ({ source, isOnline = true, width = 60, height = 60, onPress }: AvatarProps) => {
  const { theme } = useUnistyles();

  const avatarContainerStyle: StyleProp<ViewStyle> = StyleSheet.compose(stylesheet.avatarContainer, { borderColor: isOnline ?  theme.colors.success : theme.colors.border });
  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) =>
        StyleSheet.flatten([
          avatarContainerStyle,
          pressed && stylesheet.pressed,
        ])
      }
    >
      <Image source={{ uri: source }} style={[stylesheet.avatar, { width, height }]} />
    </Pressable>
  );
}