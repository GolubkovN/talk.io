import { useLocalSearchParams } from "expo-router";
import { ScrollView, View } from "react-native";
import { Image } from "expo-image";
import { useUnistyles } from "react-native-unistyles";
import { Title2 } from "@/src/components";

export default function ProfileScreen() {
  const { avatar, name } = useLocalSearchParams();
  const { theme } = useUnistyles();
  return (
    <ScrollView contentInsetAdjustmentBehavior="automatic" style={{ backgroundColor: theme.colors.bg }} contentContainerStyle={{ flex: 1 }}>
      <View style={{ alignItems: 'center', justifyContent: 'center', gap: 10, paddingTop: theme.spacing[48] }}>
        <Image source={{ uri: avatar as string }} style={{ width: 150, height: 150, borderRadius: 100 }} />
        <Title2>{name as string}</Title2>
      </View>
    </ScrollView>
  );
}