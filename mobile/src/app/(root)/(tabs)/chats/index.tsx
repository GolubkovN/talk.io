import { FlatList, View } from "react-native";
import { stylesheet } from "./styles";

import { EmptyState } from "@/src/components";

export default function ChatsScreen() {

  const data: any[] = [];

  const renderEmptyState = () => {
    return (
      <View style={stylesheet.emptyStateContainer}>
        <EmptyState 
          title="No conversations yet" 
          description="Start a new conversation by tapping the plus button at the top right corner." 
          onPress={() => {}}  
          buttonLabel="Start a new conversation"
        />
      </View>
    );
  };

  return (
    <FlatList
      contentContainerStyle={stylesheet.container}
      showsVerticalScrollIndicator={false}
      style={stylesheet.inner}
      data={data}
      scrollEnabled={data.length > 0}
      renderItem={() => <View />}
      ListEmptyComponent={() => renderEmptyState()} />
  );
}

      