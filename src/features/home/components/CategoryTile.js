import { memo } from "react";
import { Pressable, Text } from "react-native";
import { useNavigation } from "@react-navigation/native";
import AppImage from "@/shared/components/AppImage";

function CategoryTile({ category, style }) {
  const navigation = useNavigation();

  return (
    <Pressable
      testID="category-item"
      onPress={() => navigation.navigate("CategoryProducts", { categoryId: category.id })}
      className="items-center px-1 py-2"
      style={style}
      accessibilityRole="button"
      accessibilityLabel={category.name}
    >
      <AppImage
        source={category.image}
        className="aspect-square w-[78%] rounded-xl bg-surface"
        recyclingKey={category.id}
        alt={`${category.name} kategori görseli`}
      />
      <Text className="mt-1.5 text-center text-xs font-medium text-ink" numberOfLines={2}>
        {category.name}
      </Text>
    </Pressable>
  );
}

export default memo(CategoryTile);
