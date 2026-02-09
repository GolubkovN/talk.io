import { typography } from "@/src/design/tokens";
import { StyleSheet } from "react-native-unistyles";

export const stylesheet = StyleSheet.create({
  baseText: {
    variants: {
      variant: {
        title1: {
          ...typography.title1,
        },
        title2: {
          ...typography.title2,
        },
        title3: {
          ...typography.title3,
        },
        paragraph: {
          ...typography.paragraph,
        },
        paragraph2: {
          ...typography.paragraph2,
        },
        caption: {
          ...typography.caption,
        },
        accentText: {
          ...typography.accentText,
        },
      }
    }
  },
});