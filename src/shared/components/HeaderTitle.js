import { Text } from "react-native";

export default function HeaderTitle({ children }) {
  return (
    <Text className="text-[15px] font-bold text-white" accessibilityRole="header" numberOfLines={1}>
      {children}
    </Text>
  );
}
