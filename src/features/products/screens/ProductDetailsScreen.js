import { ScrollView, Text, View } from "react-native";
import ComingSoonScreen from "@/shared/components/ComingSoonScreen";
import ImageCarousel from "../components/ImageCarousel";
import ProductSummary from "../components/ProductSummary";
import ProductDetailList from "../components/ProductDetailList";
import AddToCartBar from "../components/AddToCartBar";
import { getProductById, getProductImages } from "../data/products";

export default function ProductDetailsScreen({ route }) {
  const product = getProductById(route.params?.productId);

  if (!product) return <ComingSoonScreen />;

  return (
    <View className="flex-1 bg-background">
      <ScrollView>
        <ImageCarousel images={getProductImages(product)} alt={product.name} />
        <ProductSummary product={product} />
        <Text className="px-4 py-3 text-sm font-semibold text-ink-muted">Detaylar</Text>
        <ProductDetailList />
      </ScrollView>
      <AddToCartBar productId={product.id} />
    </View>
  );
}
