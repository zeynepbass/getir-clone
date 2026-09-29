import { memo } from "react";
import { Pressable, Text, View } from "react-native";
import { useSelector } from "react-redux";
import { useNavigation } from "@react-navigation/native";
import AppImage from "@/shared/components/AppImage";
import { formatPrice } from "@/shared/utils/formatPrice";
import { selectCartTotal } from "../cartSlice";

const cartIcon = require("@assets/images/icons/cart.png");

function CartHeaderButton() {
  const navigation = useNavigation();
  const total = useSelector(selectCartTotal);

  return (
    <Pressable
      onPress={() => navigation.navigate("Cart")}
      className="mr-3 h-[34px] flex-row items-center overflow-hidden rounded-[10px] bg-surface"
      accessibilityRole="button"
      accessibilityLabel={`Sepete git, toplam ${formatPrice(total)}`}
    >
      <View className="px-2">
        <AppImage source={cartIcon} className="h-[22px] w-[22px]" transition={0} alt="Sepet" />
      </View>
      <View className="h-full min-w-[64px] items-center justify-center bg-primary-soft px-2">
        <Text className="text-[13px] font-bold text-primary" numberOfLines={1}>
          {formatPrice(total)}
        </Text>
      </View>
    </Pressable>
  );
}

export default memo(CartHeaderButton);
