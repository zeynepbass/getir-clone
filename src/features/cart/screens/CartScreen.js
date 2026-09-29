import { useCallback } from "react";
import { FlatList, Text, View } from "react-native";
import { useSelector } from "react-redux";
import Icon from "@/shared/components/Icon";
import colors from "@/shared/theme/colors";
import { getProducts, ProductCard } from "@/features/products";
import CartItem from "../components/CartItem";
import CheckoutBar from "../components/CheckoutBar";
import { selectCartIds } from "../cartSlice";

const RECOMMENDED_CARD_WIDTH = 124;

function EmptyCart() {
  return (
    <View className="items-center bg-surface px-6 py-9">
      <Icon name="basket-outline" size={48} color={colors.primary} />
      <Text className="mt-3 text-base font-bold text-ink">Sepetin şu an boş</Text>
      <Text className="mt-1 text-center text-[13px] text-ink-muted">
        Aşağıdaki önerilerden ekleyerek başlayabilirsin.
      </Text>
    </View>
  );
}

function RecommendedProducts() {
  return (
    <View className="mt-2 bg-surface pb-4">
      <Text className="px-4 pb-1 pt-4 text-sm font-bold text-primary">Önerilen Ürünler</Text>
      <FlatList
        data={getProducts()}
        keyExtractor={(item) => item.id}
        horizontal
        showsHorizontalScrollIndicator={false}
        initialNumToRender={4}
        windowSize={3}
        contentContainerClassName="px-2"
        getItemLayout={(_, index) => ({
          length: RECOMMENDED_CARD_WIDTH,
          offset: RECOMMENDED_CARD_WIDTH * index,
          index,
        })}
        renderItem={({ item }) => <ProductCard product={item} style={{ width: RECOMMENDED_CARD_WIDTH }} />}
      />
    </View>
  );
}

export default function CartScreen() {
  const ids = useSelector(selectCartIds);
  const renderItem = useCallback(({ item }) => <CartItem productId={item} />, []);

  return (
    <View className="flex-1 bg-background">
      <FlatList
        data={ids}
        keyExtractor={(id) => id}
        renderItem={renderItem}
        ListEmptyComponent={EmptyCart}
        ListFooterComponent={RecommendedProducts}
      />
      {ids.length > 0 && <CheckoutBar />}
    </View>
  );
}
