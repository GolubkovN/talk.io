import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const DangerButton = (props: AppButtonProps) => {
  return <BaseButton {...props} variant="danger" />;
};
