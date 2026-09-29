import { memo, useCallback, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import AppImage from "@/shared/components/AppImage";
import banners, { BANNER_ASPECT_RATIO } from "../data/banners";

function BannerCarousel() {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const height = width / BANNER_ASPECT_RATIO;

  const onMomentumScrollEnd = useCallback(
    (event) => setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width)),
    [width]
  );

  return (
    <View>
      <FlatList
        testID="banner-carousel"
        data={banners}
        keyExtractor={(item) => item.id}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        initialNumToRender={1}
        windowSize={2}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
        renderItem={({ item, index }) => (
          <AppImage
            source={item.image}
            style={{ width, height }}
            priority={index === 0 ? "high" : "low"}
            transition={index === 0 ? 0 : 150}
            accessibilityLabel="Kampanya"
          />
        )}
      />
      <View className="absolute bottom-2 left-0 right-0 flex-row justify-center" pointerEvents="none">
        {banners.map((banner, index) => (
          <View
            key={banner.id}
            className={`mx-[3px] h-1.5 rounded-full ${index === activeIndex ? "w-4 bg-secondary" : "w-1.5 bg-white/60"}`}
          />
        ))}
      </View>
    </View>
  );
}

export default memo(BannerCarousel);
