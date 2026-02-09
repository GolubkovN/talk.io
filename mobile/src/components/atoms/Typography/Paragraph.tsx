import { BaseText, BaseTextProps } from "./BaseText/BaseText";
import { ETextVariant } from "@/src/design/types/tokens";

export const Paragraph = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.PARAGRAPH} {...props}>
      {children}
    </BaseText>
  )
}