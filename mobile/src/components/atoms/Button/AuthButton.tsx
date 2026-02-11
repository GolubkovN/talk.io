import { BaseButton } from "./BaseButton";
import { AppButtonProps } from "./types";

export const AuthButton = (props: AppButtonProps) => {
  return <BaseButton variant="auth" {...props} />;
};
