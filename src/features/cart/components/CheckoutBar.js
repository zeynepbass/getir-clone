import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { formatPrice } from "@/shared/utils/formatPrice";
import { selectCartTotal } from "../cartSlice";

function CheckoutBar() {
  const total = useSelector(selectCartTotal);
  const { bottom } = useSafeAreaInsets();

  return (
    <View
      className="flex-row border-t border-border bg-surface px-4 pt-3"
      style={{ paddingBottom: Math.max(bottom, 12) }}
    >
      <Pressable
        className="h-[50px] flex-[3] items-center justify-center rounded-l-[10px] bg-primary"
        accessibilityRole="button"
        accessibilityLabel="Siparişe devam et"
      >
        <Text className="text-[15px] font-bold text-white">Devam</Text>
      </Pressable>
      <View className="h-[50px] flex-[1.4] items-center justify-center rounded-r-[10px] bg-primary-soft">
        <Text className="text-[15px] font-bold text-primary">{formatPrice(total)}</Text>
      </View>
    </View>
  );
}

export default memo(CheckoutBar);
