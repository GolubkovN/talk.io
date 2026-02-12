import { Image } from "expo-image";
import { Pressable } from "react-native";
import { stylesheet } from "./styles";

type AvatarProps = {
  source: string;
  isOnline?: boolean;
  width?: number;
  height?: number;
  onPress?: () => void;
}

export const Avatar = ({ source, isOnline = true, width = 60, height = 60, onPress }: AvatarProps) => {
  return (
    <Pressable onPress={onPress} style={stylesheet.avatarContainer}>
      <Image source={{ uri: source }} style={[stylesheet.avatar, { width, height }]} />
    </Pressable>
  );
}