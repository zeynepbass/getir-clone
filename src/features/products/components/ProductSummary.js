import { memo } from "react";
import { Text, View } from "react-native";
import Price from "@/shared/components/Price";

function ProductSummary({ product }) {
  return (
    <View className="items-center border-t border-border bg-surface px-4 pb-4 pt-3">
      <Price price={product.price} discountedPrice={product.discountedPrice} size="lg" align="center" />
      <Text className="mt-2 text-center text-base font-bold text-ink">{product.name}</Text>
      <Text className="mt-1 text-[13px] font-semibold text-ink-subtle">{product.amount}</Text>
    </View>
  );
}

export default memo(ProductSummary);
