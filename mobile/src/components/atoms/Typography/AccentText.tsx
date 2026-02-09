import { ETextVariant } from "@/src/design/types/tokens"
import { BaseText, BaseTextProps } from "./BaseText/BaseText"

export const AccentText = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.ACCENT_TEXT} {...props}>
      {children}
    </BaseText>
  )
}