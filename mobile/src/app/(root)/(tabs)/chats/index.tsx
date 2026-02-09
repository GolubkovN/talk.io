import { Title1 } from "@/src/components/atoms";

import { View } from "react-native";
import { stylesheet } from "./styles";

export default function ChatsScreen() {
  return (
    <View style={stylesheet.container}>
      <Title1>Chats</Title1>
    </View>

  );
}
