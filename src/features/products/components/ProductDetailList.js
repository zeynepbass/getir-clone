import { memo, useState } from "react";
import { Pressable, Text, View } from "react-native";
import Icon from "@/shared/components/Icon";
import colors from "@/shared/theme/colors";

const DESCRIPTION = "Sütlü kıtır çikolata ve badem parçacıklarıyla kaplı vanilya lezzeti";
const SECTIONS = ["İçindekiler", "Besin Değerleri", "Kullanım", "Ek Bilgiler"];

function ProductDetailList() {
  const [openSection, setOpenSection] = useState(null);

  return (
    <View className="bg-surface px-4">
      <Text className="py-3 text-[13px] text-ink">{DESCRIPTION}</Text>
      {SECTIONS.map((section) => {
        const isOpen = openSection === section;
        return (
          <View key={section} className="border-t border-border">
            <Pressable
              onPress={() => setOpenSection(isOpen ? null : section)}
              className="flex-row items-center justify-between py-3"
              accessibilityRole="button"
              accessibilityState={{ expanded: isOpen }}
            >
              <Text className="text-[13px] font-semibold text-ink-muted">{section}</Text>
              <Icon name={isOpen ? "chevron-up" : "chevron-down"} size={20} color={colors.iconInactive} />
            </Pressable>
            {isOpen && (
              <Text className="pb-3 text-xs text-ink-subtle">
                Bu ürün için {section.toLowerCase()} bilgisi yakında eklenecek.
              </Text>
            )}
          </View>
        );
      })}
    </View>
  );
}

export default memo(ProductDetailList);
