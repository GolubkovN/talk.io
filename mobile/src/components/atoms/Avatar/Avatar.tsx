import { Image } from "expo-image";
import { View } from "react-native";
import { stylesheet } from "./styles";

type AvatarProps = {
  source: string;
  isOnline?: boolean;
}

export const Avatar = ({ source, isOnline = true }: AvatarProps) => {
  return (
    <View style={stylesheet.avatarContainer}>
      <Image source={{ uri: source }} style={stylesheet.avatar} />
    </View>
  );
}