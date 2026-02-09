import { BaseButton, ButtonProps } from "./BaseButton";

export type PrimaryButtonProps = Omit<ButtonProps, "variant">;

export const PrimaryButton = (props: PrimaryButtonProps) => {
  return <BaseButton variant="primary" {...props} />;
};
