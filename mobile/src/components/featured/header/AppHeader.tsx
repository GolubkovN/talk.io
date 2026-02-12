import { View } from "react-native";
import { Avatar, BluredView, Caption, IconButton } from "../../atoms";
import { useUnistyles } from "react-native-unistyles";
import { stylesheet } from "./styles";
import { LinearGradient } from "expo-linear-gradient";
import { ComponentProps } from "react";

type ChatsHeaderProps = {
  onLeftPress?: () => void;
  onRightPress?: () => void;
  rightIconName?: ComponentProps<typeof IconButton>['iconName'];
  leftIconName?: ComponentProps<typeof IconButton>['iconName'];
  title?: string;
  withAvatar?: boolean;
  avatar?: ComponentProps<typeof Avatar>['source'];
}

export const AppHeader = ({ onLeftPress, onRightPress, rightIconName, leftIconName, title, withAvatar = false, avatar = '' }: ChatsHeaderProps) => {
  const { theme } = useUnistyles();
  return (
    <LinearGradient colors={[theme.colors.bg, 'transparent']} start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} locations={[0, 0, 0.5, 0.5]} style={stylesheet.header}>
      <BluredView>
        <IconButton iconName={leftIconName} iconColor={theme.colors.textPrimary} onPress={onLeftPress} />
      </BluredView>

      <BluredView>
        <View style={stylesheet.titleContainer}>
          <Caption overrideStyle={stylesheet.title}>{title}</Caption>
        </View>
      </BluredView>

      { !withAvatar && (
        <BluredView>
          <IconButton iconName={rightIconName} iconColor={theme.colors.textPrimary} onPress={onRightPress} />
        </BluredView>
        )
      }
      { withAvatar && (
        <BluredView>
          <Avatar source={avatar} width={48} height={48} onPress={onRightPress} />
        </BluredView>
      ) }
    </LinearGradient>
  );
}