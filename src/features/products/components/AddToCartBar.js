import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import QuantityStepper from "@/shared/components/QuantityStepper";
import { useCartItem } from "@/features/cart/hooks";

function AddToCartBar({ productId }) {
  const { bottom } = useSafeAreaInsets();
  const { quantity, increment, decrement } = useCartItem(productId);

  return (
    <View className="border-t border-border bg-surface px-4 pt-3" style={{ paddingBottom: Math.max(bottom, 12) }}>
      {quantity > 0 ? (
        <QuantityStepper quantity={quantity} onIncrement={increment} onDecrement={decrement} size="lg" />
      ) : (
        <Pressable
          onPress={increment}
          className="h-12 items-center justify-center rounded-[10px] bg-primary"
          accessibilityRole="button"
        >
          <Text className="text-[15px] font-bold text-white">Sepete Ekle</Text>
        </Pressable>
      )}
    </View>
  );
}

export default memo(AddToCartBar);
