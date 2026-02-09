import { BaseText, BaseTextProps } from "./BaseText/BaseText"
import { ETextVariant } from "@/src/design/types/tokens"


export const Title1 = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.TITLE_1} {...props}>
      {children}
    </BaseText>
  )
}