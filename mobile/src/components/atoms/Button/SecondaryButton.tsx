import { BaseButton, ButtonProps } from "./BaseButton";

export type SecondaryButtonProps = Omit<ButtonProps, "variant">;

export const SecondaryButton = (props: SecondaryButtonProps) => {
  return <BaseButton variant="secondary" {...props} />;
};
