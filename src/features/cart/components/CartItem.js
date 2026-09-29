import { memo } from "react";
import { Text, View } from "react-native";
import AppImage from "@/shared/components/AppImage";
import Price from "@/shared/components/Price";
import QuantityStepper from "@/shared/components/QuantityStepper";
import { getProductById } from "@/features/products/data/products";
import { useCartItem } from "../hooks";

function CartItem({ productId }) {
  const product = getProductById(productId);
  const { quantity, increment, decrement } = useCartItem(productId);

  if (!product) return null;

  return (
    <View className="flex-row items-center border-b border-border bg-surface px-4 py-3">
      <AppImage
        source={product.image}
        className="h-[72px] w-[72px] rounded-[10px] border border-border"
        accessibilityLabel={product.name}
      />
      <View className="mx-3 flex-1">
        <Text className="text-[13px] font-semibold text-ink" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="my-1 text-xs font-semibold text-ink-subtle">{product.amount}</Text>
        <Price price={product.price} discountedPrice={product.discountedPrice} />
      </View>
      <QuantityStepper quantity={quantity} onIncrement={increment} onDecrement={decrement} />
    </View>
  );
}

export default memo(CartItem);
