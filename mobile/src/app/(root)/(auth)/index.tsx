import { View } from "react-native";
import { Image } from "expo-image";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthSocial } from "@/src/hooks/useAuthSocial";
import styles from './styles';
import { useUnistyles } from "react-native-unistyles";
import { AccentText, Title1 } from "@/src/components/atoms/Typography";
import { AuthButton } from "@/src/components";

export default function Login() {
  const { handleSocialAuth, loadingStrategy } = useAuthSocial();
  const { theme } = useUnistyles();
  
  return (
    <View style={styles.container}>
      <View style={styles.background}></View>

      <SafeAreaView>
        {/* Top Section - Branding */}
        <View style={styles.topSection}>
          <Image
            source={require("../../../assets/images/logo.png")}
            style={styles.logoImage}
            contentFit="contain"
          />
          <Title1 overrideStyle={styles.title}>
            Talk.io
          </Title1>
        </View>

        {/* CENTER SECTION - HERO IMG */}
        <View style={styles.centerSection}>
          <Image
            source={require("../../../assets/images/auth.png")}
            style={styles.heroImage}
            contentFit="contain"
          />

          {/* Headline */}
          <View style={styles.headlineSection}>
            <AccentText overrideStyle={styles.headlineTitle}>
              Connect & Chat
            </AccentText>
            <AccentText overrideStyle={styles.headlineText}>Seamlessly</AccentText>
          </View>

          {/* AUTH BUTTONS */}
          <View style={styles.authButtonsSection}>
            {/* GOOGLE BTN */}
            <AuthButton
              label="Google"
              accessibilityRole="button"
              accessibilityLabel="Continue with Google"
              isLoading={loadingStrategy === "oauth_google"}
              imageSource={require("../../../assets/images/google.png")}
              onPress={() => handleSocialAuth("oauth_google")}
            />

            {/* APPLE BTN */}
            <AuthButton
              label="Apple"
              accessibilityRole="button"
              accessibilityLabel="Continue with Apple"
              isLoading={loadingStrategy === "oauth_apple"}
              iconName="logo-apple"
              iconColor={theme.colors.textPrimary}
              onPress={() => handleSocialAuth("oauth_apple")}
            />
            {/* GITHUB BTN */}          
            <AuthButton
              label="GitHub"
              accessibilityRole="button"
              accessibilityLabel="Continue with GitHub"
              isLoading={loadingStrategy === "oauth_github"}
              iconName="logo-github"
              iconColor={theme.colors.textPrimary}
              onPress={() => handleSocialAuth("oauth_github")}
            />    
          </View>
        </View>
      </SafeAreaView>

    </View>
  );
}

