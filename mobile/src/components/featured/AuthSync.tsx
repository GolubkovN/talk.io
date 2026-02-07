import { useAuthCallbackMutation } from "@/src/store";
import { useAuth, useUser } from "@clerk/clerk-expo";
import { useEffect, useRef } from "react";

export const AuthSync = () => {
  const { isSignedIn } = useAuth();
  const { user } = useUser()
  const isSyncked = useRef(false);
  const [triggerAuthCallback] = useAuthCallbackMutation();

  useEffect(() => {
    if (isSignedIn && user && !isSyncked.current) {      
      triggerAuthCallback(undefined);
      isSyncked.current = true;
    }

    if (!isSignedIn) {
      isSyncked.current = false;
    }
  }, [isSignedIn, user, triggerAuthCallback]);

  return null;
}