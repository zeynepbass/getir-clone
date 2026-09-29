import { memo } from "react";
import { Pressable, ScrollView, Text } from "react-native";

function SubCategoryChips({ items, active, onChange }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      className="h-[52px] shrink-0 grow-0 bg-surface"
      contentContainerClassName="items-center px-3"
    >
      {items.map((item) => {
        const isActive = item === active;
        return (
          <Pressable
            key={item}
            onPress={() => onChange(item)}
            className={`mr-2 h-8 justify-center rounded-md border px-3 ${
              isActive ? "border-primary bg-primary" : "border-border-soft"
            }`}
            accessibilityRole="button"
            accessibilityState={{ selected: isActive }}
          >
            <Text className={`text-xs font-semibold ${isActive ? "text-white" : "text-primary-light"}`}>{item}</Text>
          </Pressable>
        );
      })}
    </ScrollView>
  );
}

export default memo(SubCategoryChips);
