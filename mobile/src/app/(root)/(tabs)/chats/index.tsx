import { ActivityIndicator, FlatList, View } from "react-native";
import { stylesheet } from "./styles";

import { ChatCard, EmptyState } from "@/src/components";
import { useGetChatsQuery } from "@/src/store";
import { useUnistyles } from "react-native-unistyles";
import { Chat } from "@/src/types";
import { useRouter } from "expo-router";

export default function ChatsScreen() {

  const router = useRouter();
  const { theme } = useUnistyles();
  const { data: chats, isLoading, refetch, isError } = useGetChatsQuery();

  const onChatPressHandler = (chat: Chat) => {
    router.push({
      pathname: "/chat/[id]",
      params: {
        id: chat._id,
        participantId: chat.participant._id,
        name: chat.participant.name,
        avatar: chat.participant.avatar,
      },
    })
  };

  const renderEmptyState = () => {
    return (
      <View style={stylesheet.emptyStateContainer}>
        <EmptyState 
          title="No conversations yet" 
          description="Start a new conversation." 
          onPress={() => {}}  
          buttonLabel="Start a new conversation"
          iconSize={100}
          iconName="chatbubbles-outline"
        />
      </View>
    );
  };

  if (isLoading) return (
    <View style={stylesheet.emptyStateContainer}>
      <ActivityIndicator color={theme.colors.primary} size="large"/>
    </View>
  );

  if (isError) return (
    <View style={stylesheet.emptyStateContainer}>
      <EmptyState 
        title="Error loading chats" 
        description="Please try again later." 
        onPress={refetch}  
        buttonLabel="Retry"
        iconSize={100}
        iconName="alert-circle-outline"
        />
    </View>
  );

  return (
    <FlatList
      contentContainerStyle={stylesheet.container}
      showsVerticalScrollIndicator={false}
      style={stylesheet.inner}
      data={chats ?? []}
      scrollEnabled={(chats?.length ?? 0) > 0}
      renderItem={({item: chat}) => <ChatCard chat={chat} onPress={() => onChatPressHandler(chat)}/>}
      keyExtractor={({_id}) => _id}
      ListEmptyComponent={() => renderEmptyState()} />
  );
}

      