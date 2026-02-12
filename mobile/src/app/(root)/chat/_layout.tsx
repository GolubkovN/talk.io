import { AppHeader } from "@/src/components";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function ChatLayout() {

  const { back } = useRouter();
  const { id, participantId, name, avatar } = useLocalSearchParams();

  return (
    <Stack screenOptions={{ header: () => <AppHeader onLeftPress={back} leftIconName="arrow-back-outline" title={name as string} withAvatar={true} avatar={avatar as string} /> }} />
  )
}