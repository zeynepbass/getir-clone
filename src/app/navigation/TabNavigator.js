import { View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "@/shared/components/Icon";
import lazyScreen from "@/shared/lib/lazyScreen";
import colors from "@/shared/theme/colors";
import HomeStack from "./HomeStack";

const ComingSoonScreen = lazyScreen(() => import("@/shared/components/ComingSoonScreen"));

const Tab = createBottomTabNavigator();

function CenterTabIcon() {
  return (
    <View className="-mt-[18px] h-[52px] w-[52px] items-center justify-center rounded-full border-[3px] border-surface bg-primary">
      <Icon name="list" size={26} color={colors.secondary} />
    </View>
  );
}

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
  tabBarHideOnKeyboard: true,
  tabBarActiveTintColor: colors.primary,
  tabBarInactiveTintColor: colors.iconInactive,
  freezeOnBlur: true,
};

const tabs = [
  { name: "HomeTab", label: "Ana Sayfa", icon: "home", component: HomeStack },
  { name: "SearchTab", label: "Arama", icon: "search", component: ComingSoonScreen },
  { name: "ListTab", label: "Listelerim", component: ComingSoonScreen, tabBarIcon: CenterTabIcon },
  { name: "ProfileTab", label: "Profil", icon: "person", component: ComingSoonScreen },
  { name: "GiftTab", label: "Kampanyalar", icon: "gift", component: ComingSoonScreen },
];

export default function TabNavigator() {
  return (
    <Tab.Navigator initialRouteName="HomeTab" screenOptions={screenOptions}>
      {tabs.map(({ name, label, icon, component, tabBarIcon }) => (
        <Tab.Screen
          key={name}
          name={name}
          component={component}
          options={{
            tabBarAccessibilityLabel: label,
            tabBarIcon: tabBarIcon ?? (({ color }) => <Icon name={icon} size={24} color={color} />),
          }}
        />
      ))}
    </Tab.Navigator>
  );
}
