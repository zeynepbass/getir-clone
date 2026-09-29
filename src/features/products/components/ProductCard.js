import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import { useNavigation } from "@react-navigation/native";
import Icon from "@/shared/components/Icon";
import AppImage from "@/shared/components/AppImage";
import Price from "@/shared/components/Price";
import colors from "@/shared/theme/colors";
import { useCartItem } from "@/features/cart/hooks";

function ProductCard({ product, style }) {
  const navigation = useNavigation();
  const { quantity, increment } = useCartItem(product.id);
  const inCart = quantity > 0;

  return (
    <View className="p-2" style={style}>
      <Pressable
        onPress={() => navigation.navigate("ProductDetails", { productId: product.id })}
        accessibilityRole="button"
        accessibilityLabel={`${product.name}, ${product.amount}`}
      >
        <AppImage
          source={product.image}
          className={`aspect-square w-full rounded-xl border bg-surface ${inCart ? "border-primary-soft" : "border-border-soft"}`}
          accessibilityLabel={product.name}
          recyclingKey={product.id}
        />
        <View className="mt-2">
          <Price price={product.price} discountedPrice={product.discountedPrice} />
        </View>
        <Text className="mt-0.5 text-[13px] font-semibold text-ink" numberOfLines={2}>
          {product.name}
        </Text>
        <Text className="mt-0.5 text-xs font-semibold text-ink-subtle">{product.amount}</Text>
      </Pressable>
      <Pressable
        onPress={increment}
        hitSlop={8}
        className={`absolute right-0.5 top-0.5 h-8 w-8 items-center justify-center rounded-md border shadow-sm ${
          inCart ? "border-primary bg-primary" : "border-border bg-surface"
        }`}
        accessibilityRole="button"
        accessibilityLabel={`${product.name} sepete ekle`}
      >
        {inCart ? (
          <Text className="text-[13px] font-bold text-white">{quantity}</Text>
        ) : (
          <Icon name="add" size={22} color={colors.primary} />
        )}
      </Pressable>
    </View>
  );
}

export default memo(ProductCard);
