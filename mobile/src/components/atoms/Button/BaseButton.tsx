import { ETextVariant } from "@/src/design/types/tokens";
import { BaseText } from "../Typography";
import { Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { stylesheet } from "./styles";

export type ButtonVariant = "primary" | "secondary";

export type ButtonProps = Omit<PressableProps, "style"> & {
  label: string;
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
};

export const BaseButton = ({
  label,
  variant = "primary",
  containerStyle,
  ...props
}: ButtonProps) => {
  stylesheet.useVariants({ variant });
  return (
    <Pressable
      {...props}
      style={({ pressed }) =>
        StyleSheet.flatten([
          stylesheet.button,
          pressed && stylesheet.pressed,
          containerStyle,
        ])
      }
    >
      <BaseText variant={ETextVariant.PARAGRAPH2} overrideStyle={stylesheet.label}>
        {label}
      </BaseText>
    </Pressable>
  );
};
