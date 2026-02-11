import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const ActionButton = (props: AppButtonProps) => {
  return <BaseButton {...props} variant="action" />;
};
