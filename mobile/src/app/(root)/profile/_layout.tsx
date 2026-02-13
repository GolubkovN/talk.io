import { AppHeader } from "@/src/components";
import { Stack, useRouter } from "expo-router";

export default function ProfileLayout() {
  const { back } = useRouter();

  return (
    <Stack 
      screenOptions={{ 
        header: () => (
        <AppHeader 
          onLeftPress={back} 
          leftIconName="arrow-back-outline" 
          title="" 
        /> )
      }} />
  );
}