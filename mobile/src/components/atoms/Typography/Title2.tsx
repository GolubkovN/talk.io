import { BaseText, BaseTextProps } from "./BaseText/BaseText";
import { ETextVariant } from "@/src/design/types/tokens";

export const Title2 = ({ children, ...props }: BaseTextProps) => {
  return (
    <BaseText variant={ETextVariant.TITLE_2} {...props}>
      {children}
    </BaseText>
  )
}