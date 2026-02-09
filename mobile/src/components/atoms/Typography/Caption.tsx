import { ETextVariant } from "@/src/design/types/tokens"
import { BaseText, BaseTextProps } from "./BaseText/BaseText"

export const Caption = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.CAPTION} {...props}>
      {children}
    </BaseText>
  )
}