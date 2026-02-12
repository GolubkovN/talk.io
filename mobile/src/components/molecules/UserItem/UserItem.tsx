import { TUser } from "@/src/types";
import { Pressable, View } from "react-native"
import { Avatar, Caption, Paragraph2 } from "../../atoms";
import { stylesheet } from "./styles";

type UserItemProps = {
  user: TUser;
  onPress: () => void;
  disabled: boolean;
}

export const UserItem = ({ user, onPress, disabled }: UserItemProps) => {
  return (
    <Pressable 
      onPress={onPress} 
      disabled={disabled}
      style={stylesheet.userItem}>
      <Avatar source={user.avatar ?? ''} width={40} height={40} />
      <View style={stylesheet.userItemContent}>
        <Caption>{user.name}</Caption>
        <Paragraph2>{user.email}</Paragraph2>
      </View>
    </Pressable>
  )
}