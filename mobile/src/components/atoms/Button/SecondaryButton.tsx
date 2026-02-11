import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const SecondaryButton = (props: AppButtonProps) => {
  return <BaseButton variant="secondary" {...props} />;
};
