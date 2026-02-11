import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const IconButton = (props: AppButtonProps) => {
  return <BaseButton variant="icon" {...props} />;
};
