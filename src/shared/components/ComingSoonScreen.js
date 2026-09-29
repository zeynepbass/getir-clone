import { Text, View } from "react-native";
import Icon from "./Icon";
import colors from "../theme/colors";

export default function ComingSoonScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-background p-6">
      <Icon name="time-outline" size={48} color={colors.primary} />
      <Text className="mt-3 text-[17px] font-bold text-ink">Çok yakında</Text>
      <Text className="mt-1 text-[13px] text-ink-muted">Bu bölüm üzerinde çalışıyoruz.</Text>
    </View>
  );
}
