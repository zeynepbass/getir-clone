import { ActivityIndicator, View } from "react-native";
import colors from "../theme/colors";

export default function ScreenLoader() {
  return (
    <View className="flex-1 items-center justify-center bg-background">
      <ActivityIndicator color={colors.primary} />
    </View>
  );
}
