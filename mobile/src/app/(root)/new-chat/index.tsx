import { Caption } from '@/src/components/atoms/Typography/Caption';
import { ActivityIndicator, FlatList, View } from 'react-native'
import { stylesheet } from './styles';
import { EmptyState, IconButton, Input, Paragraph2, UserItem } from '@/src/components';
import { useRouter } from 'expo-router';
import { useUnistyles } from 'react-native-unistyles';
import { useState } from 'react';
import { useGetOrCreateChatMutation, useGetUsersQuery } from '@/src/store';
import { TUser } from '@/src/types';
import { useDebounce } from '@/src/hooks/useDebounce';

const NewChatScreen = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const { data: users, isFetching, isError } = useGetUsersQuery(debouncedSearchTerm, {
    skip: debouncedSearchTerm.length < 1,
  });
  const [getOrCreateChat, { isLoading: isCreatingChat, isError: isCreateChatError }] = useGetOrCreateChatMutation();
  const handleCreateChat = async (user: TUser) => {
    const participantId = user._id;
    try {
      const { data: chat, error } = await getOrCreateChat({ participantId: participantId });
      if (error) {
        throw error;
      }
      router.dismiss();
      router.push({
        pathname: "/chat/[id]",
        params: { 
          id: chat._id,
          participantId: chat.participant._id,
          name: chat.participant.name,
          avatar: chat.participant.avatar,
        },
      });
    } catch (error) {
      console.error("Error in handleCreateChat", error);
    }
  }
  const router = useRouter();
  const { theme } = useUnistyles();

  const userNotFound = debouncedSearchTerm?.length! > 0 && users?.length! === 0 && !isFetching;

  const ListHeaderComponent = () => {
    return (
      <View>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: theme.spacing[16] }}>
        <Caption>Users</Caption>
        {isFetching || isCreatingChat && <ActivityIndicator size="small" color={theme.colors.textPrimary} />}
      </View>
      {isError || isCreateChatError && <Paragraph2 overrideStyle={{ color: theme.colors.danger }}>Error {isCreateChatError ? "creating chat" : "loading users"}</Paragraph2>}
      </View>
    )
  }
  
  return (
    <View style={stylesheet.container}>
      <View style={stylesheet.header}>
        <IconButton iconName="close-outline" onPress={() => router.back()} containerStyle={stylesheet.closeButton} iconSize={24} iconColor={theme.colors.textPrimary} />
        <View style={stylesheet.headerContent}>
          <Caption>New Chat</Caption>
          <Paragraph2 overrideStyle={stylesheet.headerDescription}>Search for a user to start a new chat</Paragraph2>
        </View>
      </View>

      <Input 
        placeholder='Search for a user' 
        value={searchTerm} 
        onChangeText={setSearchTerm} 
        autoFocus={true} 
        onClear={() => setSearchTerm('')} 
        autoCapitalize='none' 
        autoCorrect={false} 
        autoComplete='off' 
      />

      <FlatList
        data={users}
        ListHeaderComponent={<ListHeaderComponent />}
        keyExtractor={(item) => item.clerkId}
        renderItem={({ item }) => <UserItem user={item} onPress={() => handleCreateChat(item)} disabled={isCreatingChat} />}
        ListEmptyComponent={
          () => {
            return (
              <EmptyState 
              title={ userNotFound ? "No users found" : "There is no result yet"} 
                description={ userNotFound ? "Try searching for a different user" : "Start typing to search for a user."} 
                iconName={"search-outline"} 
                iconSize={100}
              />
            )
          }
        }
      />
    </View>
  )
}

export default NewChatScreen;