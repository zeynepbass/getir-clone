import { useCallback } from "react";
import { FlatList, View } from "react-native";
import { getCategories } from "@/features/catalog";
import AddressBar from "../components/AddressBar";
import BannerCarousel from "../components/BannerCarousel";
import CategoryTile from "../components/CategoryTile";

const NUM_COLUMNS = 4;
const tileStyle = { width: `${100 / NUM_COLUMNS}%` };

export default function HomeScreen() {
  const renderItem = useCallback(({ item }) => <CategoryTile category={item} style={tileStyle} />, []);

  return (
    <View className="flex-1 bg-background">
      <AddressBar />
      <FlatList
        data={getCategories()}
        keyExtractor={(item) => item.id}
        numColumns={NUM_COLUMNS}
        renderItem={renderItem}
        initialNumToRender={12}
        ListHeaderComponent={BannerCarousel}
        contentContainerClassName="pb-4"
      />
    </View>
  );
}
