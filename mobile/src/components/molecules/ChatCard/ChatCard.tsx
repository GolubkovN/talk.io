import { Pressable, View } from "react-native";
import { Chat } from "@/src/types";
import { formatDistanceToNow } from "date-fns";
import { Paragraph2 } from "../../atoms";
import { Avatar } from "../../atoms/Avatar/Avatar";
import { Caption } from "../../atoms/Typography/Caption";
import { stylesheet } from "./styles";

type ChatCardProps = {
  chat: Chat;
  onPress: () => void;
}

export const ChatCard = ({ chat, onPress }: ChatCardProps) => {
  const isOnline = true;
  const isTyping = false;
  const hasUnreadMessages = false;

  return (
   <Pressable onPress={onPress} style={stylesheet.container}>
    <Avatar source={chat.participant.avatar} isOnline={isOnline} onPress={onPress} />

    <View style={stylesheet.textContent}>
      <View>
       <View style={stylesheet.nameContainer}>
        <Caption numberOfLines={1} ellipsizeMode="tail">
            {chat.participant.name}
          </Caption>
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
