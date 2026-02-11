import { Ionicons } from "@expo/vector-icons";
import { View } from "react-native";
import { useUnistyles } from "react-native-unistyles";
import { Paragraph2, AccentText, SecondaryButton } from "../../atoms";
import { stylesheet } from "./styles";
import { ComponentProps } from "react";


type EmptyStateProps = {
  title: string;
  description: string;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  onPress?: () => void;
  buttonLabel?: string;
}
export const EmptyState = ({ title, description, iconName = "chatbox-ellipses-outline", iconSize = 150, onPress, buttonLabel}: EmptyStateProps) => {
  const { theme } = useUnistyles();
  return (
    <View style={stylesheet.container}>
      <Ionicons
        name={iconName}
        size={iconSize}
        color={theme.colors.textTertiary}
      />
      <AccentText overrideStyle={stylesheet.title}>{title}</AccentText>
      <Paragraph2 overrideStyle={stylesheet.description}>{description}</Paragraph2>

      {buttonLabel && (
        <SecondaryButton
          label={buttonLabel}
          onPress={onPress}
        />
      )}
    </View>
  );
};