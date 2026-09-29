import { memo, useCallback, useState } from "react";
import { FlatList, useWindowDimensions, View } from "react-native";
import AppImage from "@/shared/components/AppImage";

const IMAGE_RATIO = 0.55;

function ImageCarousel({ images, alt }) {
  const { width } = useWindowDimensions();
  const [activeIndex, setActiveIndex] = useState(0);
  const size = Math.min(width * IMAGE_RATIO, 320);

  const onMomentumScrollEnd = useCallback(
    (event) => setActiveIndex(Math.round(event.nativeEvent.contentOffset.x / width)),
    [width]
  );

  return (
    <View className="bg-surface py-4">
      <FlatList
        data={images}
        keyExtractor={(_, index) => String(index)}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onMomentumScrollEnd={onMomentumScrollEnd}
        getItemLayout={(_, index) => ({ length: width, offset: width * index, index })}
        renderItem={({ item, index }) => (
          <View className="items-center justify-center" style={{ width }}>
            <AppImage
              source={item}
              style={{ width: size, height: size }}
              contentFit="contain"
              priority={index === 0 ? "high" : "low"}
              accessibilityLabel={alt}
            />
          </View>
        )}
      />
      {images.length > 1 && (
        <View className="mt-3 flex-row justify-center">
          {images.map((_, index) => (
            <View
              key={index}
              className={`mx-1 h-2 w-2 rounded-full ${index === activeIndex ? "bg-primary" : "bg-primary-soft"}`}
            />
          ))}
        </View>
      )}
    </View>
  );
}

export default memo(ImageCarousel);
