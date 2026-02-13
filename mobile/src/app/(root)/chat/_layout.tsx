import { AppHeader } from "@/src/components";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";

export default function ChatLayout() {
  const { back, push } = useRouter();
  const { id, name, avatar } = useLocalSearchParams();
  const handleProfilePress = () => {
    push({
      pathname: "/profile/[id]",
      params: { id: id as string, name: name as string, avatar: avatar as string },
    });
  }
  return (
    <Stack 
      screenOptions={{ 
        header: () => 
          <AppHeader 
            onLeftPress={back} 
            leftIconName="arrow-back-outline" 
            title={name as string} 
            withAvatar={true} 
            avatar={avatar as string} 
            onRightPress={handleProfilePress} 
            rightIconName="person-outline" 
        /> 
      }} 
    />
  )
}