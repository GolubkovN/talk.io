import { ActivityIndicator, Pressable, View } from "react-native";
import { Image } from "expo-image";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { useAuthSocial } from "@/src/hooks/useAuthSocial";
import styles from './styles';
import { useUnistyles } from "react-native-unistyles";
import { AccentText, Paragraph2, Title1 } from "@/src/components/atoms/Typography";

export default function Login() {
  const { handleSocialAuth, loadingStrategy } = useAuthSocial();
  const { theme } = useUnistyles();
  
  const isLoading = loadingStrategy !== null;

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
            <Pressable
              style={styles.buttonContent}
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Google"
              onPress={() => handleSocialAuth("oauth_google")}
            >
             <View style={styles.buttonContent}>
             {loadingStrategy === "oauth_google" ? (
                <ActivityIndicator size="small" color={theme.colors.textPrimary} />
              ) : (
                <Image
                    source={require("../../../assets/images/google.png")}
                    style={{ width: 20, height: 20 }}
                    contentFit="contain"
                  />
              )}
              <Paragraph2 overrideStyle={styles.buttonText}>Google</Paragraph2>
             </View>
            </Pressable>

            {/* APPLE BTN */}
            <Pressable
              disabled={isLoading}
              accessibilityRole="button"
              accessibilityLabel="Continue with Apple"
              onPress={() => handleSocialAuth("oauth_apple")}
            >
              <View style={styles.buttonContent}>
              {loadingStrategy === "oauth_apple" ? (
                <ActivityIndicator size="small" color={theme.colors.textPrimary} />
              ) : (
                <>
                  <Ionicons name="logo-apple" size={20} color={theme.colors.textPrimary} />
                </>
              )}
              <Paragraph2 overrideStyle={styles.buttonText}>Apple</Paragraph2>
              </View>
            </Pressable>
          </View>
        </View>
      </SafeAreaView>

    </View>
  );
}

