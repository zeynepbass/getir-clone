import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CartScreen from "../screens/CartScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { Ionicons, Foundation } from "@expo/vector-icons";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";
import ProductDetailsScreen from "../../src/screens/ProductDetailsScreen";
import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../redux/actions/cartActions";

const { height, width } = Dimensions.get("window");
const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails", "CartScreen"];

function MyStack({ navigation, route, cartItems, clearCart }) {
  const [totalPrice, setTotalPrice] = useState(0);

  useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    if (tabHiddenRoutes.includes(routeName)) {
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      navigation.setOptions({ tabBarStyle: { display: "flex" } });
    }
  }, [navigation, route]);

  const getProductsPrice = () => {
    let total = 0;
    cartItems.forEach((product) => {
      total += product.product.fiyat;
    });
    setTotalPrice(total);
  };

  useEffect(() => {
    getProductsPrice();
    return () => setTotalPrice(0);
  }, [cartItems]);

  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Image
              resizeMode="contain"
              style={{ width: 70, height: 30 }}
              source={require("../../assets/getirlogo.png")}
            />
          ),
        }}
      />

      <Stack.Screen
        name="CategoryDetails"
        component={CategoryFilterScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerRight: () => (
            <TouchableOpacity
              onPress={() => navigation.navigate("CartScreen")}
              style={{
                width: width * 0.22,
                height: 33,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{ width: 23, height: 23, marginLeft: 6 }}
                source={require("../../assets/cart.png")}
              />
              <View style={{ flex: 1, backgroundColor: "#F3EFFE", height: 30, borderTopRightRadius: 10, borderBottomRightRadius: 10, justifyContent: "center", alignItems: "center" }}>
                <Text style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}>
                  <Text>{"\u20BA"}</Text>
                  {totalPrice.toFixed(2)}
                </Text>
              </View>
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
        }}
      />

      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 8 }}>
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity style={{ paddingRight: 10 }}>
              <Foundation name="heart" size={26} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      />

      <Stack.Screen
        name="CartScreen"
        component={CartScreen}
        options={{
          headerTintColor: "white",
          headerBackTitleVisible: false,
          headerStyle: { backgroundColor: "#5C3EBC" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Sepetim
            </Text>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => navigation.goBack()} style={{ paddingLeft: 8 }}>
              <Ionicons name="close" size={26} color="white" />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={clearCart} style={{ paddingRight: 10 }}>
              <Ionicons name="trash" size={24} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cartItems);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  return (
    <MyStack
      navigation={navigation}
      route={route}
      cartItems={cartItems}
      clearCart={handleClearCart}
    />
  );
}
