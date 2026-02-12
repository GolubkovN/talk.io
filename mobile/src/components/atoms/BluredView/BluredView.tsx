import { BlurView } from "expo-blur";
import { View } from "react-native";
import { stylesheet } from "./styles";
import { PropsWithChildren } from "react";

type BluredViewProps = {
  intensity?: number;
}

export const BluredView = ({ children, intensity = 10 }: PropsWithChildren<BluredViewProps>) => {
  return (
    <View style={stylesheet.blurWrapper}>
      <BlurView intensity={intensity} style={stylesheet.bluredContainer}>
        {children}
      </BlurView>
    </View>
  );
}