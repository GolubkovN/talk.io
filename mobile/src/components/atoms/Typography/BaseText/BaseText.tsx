import { TextVariant } from "@/src/design/tokens";
import { StyleProp, Text, TextProps, TextStyle } from "react-native"
import { StyleSheet } from "react-native-unistyles";
import { stylesheet } from "./styles";

export type BaseTextProps = Omit<TextProps, 'style'> & {
  variant?: TextVariant;
  overrideStyle?: StyleProp<TextStyle>;
  children: React.ReactNode;
}

export const BaseText = ({ children, variant = 'paragraph', overrideStyle, ...props }: BaseTextProps) => {
  stylesheet.useVariants({ variant });
  const styles = StyleSheet.flatten([stylesheet.baseText, overrideStyle]);
  return (
    <Text style={styles} {...props}>
      {children}
    </Text>
  )
}