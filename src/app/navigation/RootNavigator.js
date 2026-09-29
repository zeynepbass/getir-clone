import { Pressable } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Icon from "@/shared/components/Icon";
import HeaderTitle from "@/shared/components/HeaderTitle";
import lazyScreen from "@/shared/lib/lazyScreen";
import colors from "@/shared/theme/colors";
import { ClearCartButton } from "@/features/cart";
import TabNavigator from "./TabNavigator";
import { headerOptions } from "./screenOptions";

const ProductDetailsScreen = lazyScreen(() => import("@/features/products/screens/ProductDetailsScreen"));
const CartScreen = lazyScreen(() => import("@/features/cart/screens/CartScreen"));

const Stack = createNativeStackNavigator();

function CloseButton({ navigation }) {
  const close = () => (navigation.canGoBack() ? navigation.goBack() : navigation.navigate("Tabs"));

  return (
    <Pressable onPress={close} hitSlop={8} className="px-2" accessibilityRole="button" accessibilityLabel="Kapat">
      <Icon name="close" size={26} color={colors.textOnPrimary} />
    </Pressable>
  );
}

function FavoriteIcon() {
  return <Icon name="heart" size={24} color={colors.primaryDark} style={{ paddingHorizontal: 8 }} />;
}

const overlayOptions = ({ navigation }) => ({
  ...headerOptions,
  animation: "slide_from_bottom",
  headerLeft: () => <CloseButton navigation={navigation} />,
});

export default function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Tabs" component={TabNavigator} options={{ headerShown: false }} />
      <Stack.Group screenOptions={overlayOptions}>
        <Stack.Screen
          name="ProductDetails"
          component={ProductDetailsScreen}
          options={{
            headerTitle: () => <HeaderTitle>Ürün Detayı</HeaderTitle>,
            headerRight: FavoriteIcon,
          }}
        />
        <Stack.Screen
          name="Cart"
          component={CartScreen}
          options={{
            headerTitle: () => <HeaderTitle>Sepetim</HeaderTitle>,
            headerRight: () => <ClearCartButton />,
          }}
        />
      </Stack.Group>
    </Stack.Navigator>
  );
}
