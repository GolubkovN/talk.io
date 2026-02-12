import { Stack, useRouter } from 'expo-router';
import { AppHeader } from '@/src/components';

export default function ChatsLayout() {
  const router = useRouter();
  const handleStartNewChat = () => {
    router.push({
      pathname: "/new-chat",
    })
  }
  
  return (
    <Stack screenOptions={{ header: () => <AppHeader onRightPress={handleStartNewChat} rightIconName="person-add-outline" title="All Conversations" leftIconName="qr-code-outline" /> }}>
      <Stack.Screen
        name="index"
      />
    </Stack>
  );
}
