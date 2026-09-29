import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "./Icon";
import colors from "../theme/colors";

function QuantityStepper({ quantity, onIncrement, onDecrement, size = "md" }) {
  const large = size === "lg";
  const iconSize = large ? 22 : 16;

  return (
    <View
      className={`flex-row items-stretch overflow-hidden rounded-[10px] border border-border bg-surface ${
        large ? "h-12 w-full" : "h-8 w-24"
      }`}
    >
      <Pressable
        onPress={onDecrement}
        hitSlop={6}
        className="flex-1 items-center justify-center"
        accessibilityRole="button"
        accessibilityLabel="Adedi azalt"
      >
        <Icon name={quantity > 1 ? "remove" : "trash-outline"} size={iconSize - 2} color={colors.primary} />
      </Pressable>
      <View className="flex-1 items-center justify-center bg-primary">
        <Text className={`font-bold text-white ${large ? "text-base" : "text-[13px]"}`}>{quantity}</Text>
      </View>
      <Pressable
        onPress={onIncrement}
        hitSlop={6}
        className="flex-1 items-center justify-center"
        accessibilityRole="button"
        accessibilityLabel="Adedi artır"
      >
        <Icon name="add" size={iconSize} color={colors.primary} />
      </Pressable>
    </View>
  );
}

export default memo(QuantityStepper);
