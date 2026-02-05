import ParallaxScrollView from "@/src/components/ParalaxScrollView";
import { IconSymbol } from "@/src/components/ui/IconSymbol";
import { Image } from "expo-image";
import { useLocalSearchParams, useRouter } from "expo-router";
import { PressableScale, PressablesConfig } from "pressto";
import { Text, View } from "react-native";

export default function UserScreen() {
  const { name, text, image } = useLocalSearchParams<{
    id: string;
    name: string;
    text: string;
    image: string;
  }>();
  const { canGoBack, back } = useRouter();

  const headerImage = () => {
    return (
      <View style={{ flex: 1 }}>
        <View
          style={{
            zIndex: 1000,
            position: "absolute",
            top: 50,
            paddingHorizontal: 16,
          }}
        >
          {canGoBack() && (
            <PressablesConfig
              animationType="timing"
              config={{
                minScale: 1.25,
              }}
            >
              <PressableScale
                onPress={back}
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  gap: 8,
                  borderWidth: 1,
                  borderColor: "white",
                  padding: 8,
                  borderRadius: 24,
                }}
              >
                <IconSymbol name="chevron.left" size={24} color="white" />
              </PressableScale>
            </PressablesConfig>
          )}
        </View>
        <Image
          source={{ uri: image }}
          style={{
            height: "100%",
            width: "100%",
            bottom: 0,
            left: 0,
            position: "absolute",
            zIndex: 0,
          }}
        />
      </View>
    );
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: "#A1CEDC", dark: "#1D3D47" }}
      headerImage={headerImage()}
    >
      <View>
        <Text>name: {name}</Text>
        <Text>text: {text}</Text>
      </View>
    </ParallaxScrollView>
  );
}
