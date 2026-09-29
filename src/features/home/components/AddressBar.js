import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "@/shared/components/Icon";
import AppImage from "@/shared/components/AppImage";
import colors from "@/shared/theme/colors";

const houseIcon = require("@assets/images/icons/house.png");

function AddressBar() {
  return (
    <View testID="header-main" className="h-[52px] flex-row items-center bg-secondary-dark">
      <Pressable
        className="h-full flex-1 flex-row items-center rounded-r-[26px] bg-surface px-3"
        accessibilityRole="button"
        accessibilityLabel="Teslimat adresini değiştir"
      >
        <AppImage source={houseIcon} className="h-7 w-7" transition={0} alt="Ev" />
        <View className="ml-2 flex-1 flex-row items-center border-l-2 border-primary-soft pl-2">
          <Text testID="place-text" className="text-[15px] font-bold text-ink">
            Ev
          </Text>
          <Text className="ml-1.5 mr-0.5 shrink text-xs font-medium text-ink-muted" numberOfLines={1}>
            Dedepaşa Blv. Yenişehir Mahallesi
          </Text>
          <Icon testID="right-icon" name="chevron-forward" size={18} color={colors.primary} />
        </View>
      </Pressable>

      <View className="w-[72px] items-center justify-center" accessibilityLabel="Tahmini teslimat süresi 13 dakika">
        <Text className="text-[10px] font-bold text-primary">TVS</Text>
        <Text className="text-xl font-extrabold text-primary">
          13<Text className="text-sm">dk</Text>
        </Text>
      </View>
    </View>
  );
}

export default memo(AddressBar);
