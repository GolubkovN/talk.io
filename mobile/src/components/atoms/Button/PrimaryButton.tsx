import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const PrimaryButton = (props: AppButtonProps) => {
  return <BaseButton variant="primary" {...props} />;
};
