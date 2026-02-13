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
  const { data: chats, isLoading, isFetching, refetch, isError } = useGetChatsQuery(undefined,{
    refetchOnMountOrArgChange: true,
    refetchOnFocus: true,
    refetchOnReconnect: true,
  });

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

  const handleStartNewChat = () => {
    router.push({
      pathname: "/new-chat",
    })
  }

  const renderEmptyState = () => {
    return (
      <View style={stylesheet.emptyStateContainer}>
        <EmptyState 
          title="No conversations yet" 
          description="Start a new conversation." 
          onPress={handleStartNewChat}  
          buttonLabel="Start a new conversation"
          iconSize={100}
          iconName="chatbubbles-outline"
        />
      </View>
    );
  };

  if (isLoading || isFetching) return (
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
    <View style={stylesheet.container}>
      <FlatList
      contentInsetAdjustmentBehavior="automatic"
      contentContainerStyle={ stylesheet.listContainer }
      showsVerticalScrollIndicator={false}
      data={chats ?? []}
      scrollEnabled={(chats?.length ?? 0) > 0}
      renderItem={({item: chat}) => <ChatCard chat={chat} onPress={() => onChatPressHandler(chat)}/>}
      keyExtractor={({_id}) => _id}
      ListEmptyComponent={() => renderEmptyState()} />
    </View>
  );
}

      