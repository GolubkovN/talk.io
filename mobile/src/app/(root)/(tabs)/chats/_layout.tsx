import { Stack } from 'expo-router';
import { ChatsHeader } from '@/src/components';

export default function ChatsLayout() {
  
  return (
    <Stack screenOptions={{ header: () => <ChatsHeader /> }}>
      <Stack.Screen
        name="index"
      />
    </Stack>
  );
}
