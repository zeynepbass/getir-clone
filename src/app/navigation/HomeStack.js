import { createNativeStackNavigator } from "@react-navigation/native-stack";
import AppImage from "@/shared/components/AppImage";
import HeaderTitle from "@/shared/components/HeaderTitle";
import lazyScreen from "@/shared/lib/lazyScreen";
import { CartHeaderButton } from "@/features/cart";
import HomeScreen from "@/features/home/screens/HomeScreen";
import { headerOptions } from "./screenOptions";

const CategoryProductsScreen = lazyScreen(() => import("@/features/catalog/screens/CategoryProductsScreen"));

const logo = require("@assets/images/getir-logo.png");

const Stack = createNativeStackNavigator();

function LogoTitle() {
  return <AppImage source={logo} className="h-[30px] w-[70px]" contentFit="contain" transition={0} priority="high" alt="getir" />;
}

export default function HomeStack() {
  return (
    <Stack.Navigator screenOptions={headerOptions}>
      <Stack.Screen name="Home" component={HomeScreen} options={{ headerTitle: LogoTitle }} />
      <Stack.Screen
        name="CategoryProducts"
        component={CategoryProductsScreen}
        options={{
          headerTitle: () => <HeaderTitle>Ürünler</HeaderTitle>,
          headerRight: () => <CartHeaderButton />,
        }}
      />
    </Stack.Navigator>
  );
}
