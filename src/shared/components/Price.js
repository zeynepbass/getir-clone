import { memo } from "react";
import { Text, View } from "react-native";
import { formatPrice } from "../utils/formatPrice";

function Price({ price, discountedPrice, size = "sm", align = "start" }) {
  const hasDiscount = discountedPrice != null && discountedPrice < price;
  const current = hasDiscount ? discountedPrice : price;
  const large = size === "lg";

  return (
    <View className={`flex-row flex-wrap items-center ${align === "center" ? "justify-center" : "justify-start"}`}>
      {hasDiscount && (
        <Text className={`font-semibold text-ink-subtle line-through ${large ? "mr-2 text-sm" : "mr-1 text-[11px]"}`}>
          {formatPrice(price)}
        </Text>
      )}
      <Text className={`font-bold text-primary ${large ? "text-xl" : "text-[13px]"}`}>{formatPrice(current)}</Text>
    </View>
  );
}

export default memo(Price);
