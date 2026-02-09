import { ETextVariant } from "@/src/design/types/tokens"
import { BaseText, BaseTextProps } from "./BaseText/BaseText"

export const Title3 = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.TITLE_3} {...props}>
      {children}
    </BaseText>
  )
}