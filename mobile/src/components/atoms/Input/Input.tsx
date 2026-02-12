import { Ionicons } from "@expo/vector-icons"
import { TextInput, TextInputProps, View } from "react-native"
import { useUnistyles } from "react-native-unistyles";
import { stylesheet } from "./styles";

type InputProps = TextInputProps & {
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
  autoFocus: boolean;
  onClear?: () => void;
}
export const Input = ({ placeholder, value, onChangeText, autoFocus, onClear, ...props }: InputProps) => {
  const { theme } = useUnistyles();
  return (
    <View style={stylesheet.searchInputWrapper}>
      <Ionicons name="search-outline" size={24} color={theme.colors.textPrimary} />
        <TextInput 
          placeholder={placeholder} 
          value={value} 
          onChangeText={onChangeText} 
          style={stylesheet.searchInput} 
          autoFocus 
          {...props}
      />
      { onClear && <Ionicons name="close-circle-outline" size={24} color={theme.colors.textPrimary} onPress={onClear} /> }
    </View>
  )
}