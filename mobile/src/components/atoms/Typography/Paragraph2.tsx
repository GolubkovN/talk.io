import { ETextVariant } from "@/src/design/types/tokens"
import { BaseText, BaseTextProps } from "./BaseText/BaseText"

export const Paragraph2 = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.PARAGRAPH2} {...props}>
      {children}
    </BaseText>
  )
}