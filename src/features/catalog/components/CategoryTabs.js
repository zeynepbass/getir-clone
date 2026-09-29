import { memo, useCallback, useEffect, useRef } from "react";
import { FlatList, Pressable, Text } from "react-native";

function CategoryTabs({ categories, activeId, onChange }) {
  const listRef = useRef(null);
  const activeIndex = categories.findIndex((category) => category.id === activeId);

  const scrollToActive = useCallback(
    (animated = true) => {
      if (activeIndex < 0) return;
      listRef.current?.scrollToIndex({ index: activeIndex, viewPosition: 0.5, animated });
    },
    [activeIndex]
  );

  useEffect(() => {
    scrollToActive();
  }, [scrollToActive]);

  const onScrollToIndexFailed = useCallback(({ averageItemLength, index }) => {
    listRef.current?.scrollToOffset({ offset: averageItemLength * index, animated: false });
    requestAnimationFrame(() => listRef.current?.scrollToIndex({ index, viewPosition: 0.5, animated: false }));
  }, []);

  return (
    <FlatList
      ref={listRef}
      data={categories}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      className="h-[46px] shrink-0 grow-0 bg-primary-light"
      contentContainerClassName="px-1"
      initialNumToRender={categories.length}
      onContentSizeChange={() => scrollToActive(false)}
      onScrollToIndexFailed={onScrollToIndexFailed}
      renderItem={({ item }) => {
        const isActive = item.id === activeId;
        return (
          <Pressable
            onPress={() => onChange(item.id)}
            className={`h-[46px] justify-center border-b-[3px] px-3 ${isActive ? "border-secondary" : "border-transparent"}`}
            accessibilityRole="tab"
            accessibilityState={{ selected: isActive }}
          >
            <Text className={`text-sm ${isActive ? "font-bold text-white" : "font-semibold text-white/80"}`}>
              {item.name}
            </Text>
          </Pressable>
        );
      }}
    />
  );
}

export default memo(CategoryTabs);
