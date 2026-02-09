import { typography } from "../tokens";

export type TextVariant = keyof typeof typography;

export enum ETextVariant {
  TITLE_1 = "title1",
  TITLE_2 = "title2",
  TITLE_3 = "title3",
  PARAGRAPH = "paragraph",
  PARAGRAPH2 = "paragraph2",
  CAPTION = "caption",
  ACCENT_TEXT = "accentText",
}