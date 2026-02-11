import { View } from "react-native";
import { AccentText, IconButton } from "../../atoms";
import { useUnistyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

type ChatsHeaderProps = {
  onScanPress?: () => void;
  onAddPress?: () => void;
}

export const ChatsHeader = ({ onScanPress, onAddPress }: ChatsHeaderProps) => {
  const { theme } = useUnistyles();
  return (
    <View style={stylesheet.header}>
      <IconButton iconName="qr-code-outline" iconColor={theme.colors.textPrimary} onPress={onScanPress} />
      <View>
       <AccentText overrideStyle={stylesheet.title}>All Conversations</AccentText>
      </View>
      <IconButton iconName="person-add-outline" iconColor={theme.colors.textPrimary} onPress={onAddPress} />
    </View>
  );
}