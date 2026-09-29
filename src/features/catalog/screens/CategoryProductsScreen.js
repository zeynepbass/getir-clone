import { useCallback, useState } from "react";
import { FlatList, Text, View } from "react-native";
import { getProducts, ProductCard } from "@/features/products";
import CategoryTabs from "../components/CategoryTabs";
import SubCategoryChips from "../components/SubCategoryChips";
import { getCategories, getCategoryById } from "../data/categories";

const NUM_COLUMNS = 3;
const cardStyle = { width: `${100 / NUM_COLUMNS}%` };

export default function CategoryProductsScreen({ route, navigation }) {
  const category = getCategoryById(route.params?.categoryId);
  const [subCategory, setSubCategory] = useState(category.subCategories[0]);

  const changeCategory = useCallback(
    (categoryId) => {
      navigation.setParams({ categoryId });
      setSubCategory(getCategoryById(categoryId).subCategories[0]);
    },
    [navigation]
  );

  const renderItem = useCallback(({ item }) => <ProductCard product={item} style={cardStyle} />, []);

  return (
    <View className="flex-1 bg-background">
      <CategoryTabs categories={getCategories()} activeId={category.id} onChange={changeCategory} />
      <SubCategoryChips items={category.subCategories} active={subCategory} onChange={setSubCategory} />
      <FlatList
        data={getProducts()}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        renderItem={renderItem}
        initialNumToRender={9}
        maxToRenderPerBatch={9}
        windowSize={5}
        className="mt-2 bg-surface"
        contentContainerClassName="px-1 pb-6"
        ListHeaderComponent={<Text className="px-2 pt-3 text-sm font-bold text-ink-muted">{subCategory}</Text>}
      />
    </View>
  );
}
