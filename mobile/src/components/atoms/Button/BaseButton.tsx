import { ComponentProps } from "react";
import { ActivityIndicator, ImageSourcePropType, Pressable, PressableProps, StyleProp, ViewStyle } from "react-native";
import { StyleSheet, useUnistyles } from "react-native-unistyles";
import { Ionicons } from "@expo/vector-icons";
import { Image } from "expo-image";
import { Paragraph2 } from "../Typography";
import { stylesheet } from "./styles";

export type ButtonVariant = "primary" | "action" | "danger" | "secondary" | "auth" | "icon";

export type ButtonProps = Omit<PressableProps, "style"> & {
  label?: string;
  variant?: ButtonVariant;
  containerStyle?: StyleProp<ViewStyle>;
  iconName?: ComponentProps<typeof Ionicons>['name'];
  iconSize?: number;
  iconColor?: string;
  iconPosition?: "left" | "right";
  imageSource?: ImageSourcePropType;
  isLoading?: boolean;
};

export const BaseButton = ({
  label,
  variant = "primary",
  containerStyle,
  iconName,
  iconSize = 20,
  iconPosition = "left",
  imageSource,
  isLoading = false,
  iconColor,
  ...props
}: ButtonProps) => {
  const { theme } = useUnistyles();
  stylesheet.useVariants({ variant });

  const variantLoadColor = {
    'primary': theme.colors.onPrimary,
    'action': theme.colors.onAction,
    'danger': theme.colors.onDanger,
    'secondary': theme.colors.primary,
    'auth': theme.colors.textPrimary,
    'icon': theme.colors.textSecondary,
  }

  const variantLoadColorByVariant = variantLoadColor[variant];

  const isIcon = !isLoading && !imageSource && iconName;
  const isImage = !isLoading && imageSource;

  const icColor = iconColor || variantLoadColorByVariant;

  const isIconLeft = isIcon && iconPosition === "left";
  const isIconRight = isIcon && iconPosition === "right";

  const isIconButton = variant === "icon";

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

      {
        isLoading && <ActivityIndicator size="small" color={variantLoadColorByVariant} />
      }

      {
        isImage && (
        <Image
          source={imageSource}
          style={{ width: iconSize, height: iconSize }}
          contentFit="contain"
        />
        )
      }
      { isIconLeft && (
        <Ionicons
          size={iconSize}
          color={icColor}
          name={iconName}
        />
      )}
      {!isIconButton && label && (
        <Paragraph2 overrideStyle={stylesheet.label}>
          {label}
        </Paragraph2>
      )}
      { isIconRight && (
        <Ionicons
          size={iconSize}
          color={icColor}
          name={iconName}
        />
      )}
    </Pressable>
  );
};
