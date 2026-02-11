import { Pressable, View } from "react-native";
import { Chat } from "@/src/types";
import { formatDistanceToNow } from "date-fns";
import { Paragraph2 } from "../../atoms";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Caption } from "../../atoms/Typography/Caption";
import { stylesheet } from "./styles";
import { useUnistyles } from "react-native-unistyles";

type ChatCardProps = {
  chat: Chat;
  onPress: () => void;
}

export const ChatCard = ({ chat, onPress }: ChatCardProps) => {
  const { theme } = useUnistyles();
  const isOnline = false;
  const isTyping = false;
  const hasUnreadMessages = false;

  return (
   <Pressable onPress={onPress} style={stylesheet.container}>
    <Avatar source={chat.participant.avatar} isOnline={isOnline} />

    <View style={stylesheet.textContent}>
      <View>
       <View style={stylesheet.nameContainer}>
        <Caption numberOfLines={1} ellipsizeMode="tail">
            {chat.participant.name}
          </Caption>

          <View style={[stylesheet.onlineIndicator, { backgroundColor: isOnline ? theme.colors.success : theme.colors.textTertiary }]} />
       </View>

        <Paragraph2 numberOfLines={2} ellipsizeMode="tail">
          {isTyping ? 'Typing...' : chat.lastMessage?.content}
        </Paragraph2>
      </View>

      <View style={stylesheet.lastMessageAtContainer}>
        <Paragraph2>
          {chat.lastMessageAt ? formatDistanceToNow(new Date(chat.lastMessageAt), { addSuffix: true }) : ''}
        </Paragraph2>
        {
          hasUnreadMessages && (
            <View style={stylesheet.unreadMessagesIndicator} />
          )
        }
      </View>
    </View>
   </Pressable>
  );
}
