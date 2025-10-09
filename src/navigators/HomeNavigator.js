import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';

import { Dimensions, Image, Text, TouchableOpacity, View } from "react-native";
import { Ionicons, Foundation } from "@expo/vector-icons";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import { ProductDetailsScreen } from "../screens/ProductDetailsScreen";
import { useNavigation } from "@react-navigation/native";
import {CartScreen} from "../screens/CartScreen"
const Stack = createStackNavigator();
const tabHiddenRoutes = ["ProductDetails","CartSreen"];
const { width, height } = Dimensions.get("window");
function MyStack() {
  const navigation = useNavigation();
  React.useLayoutEffect(() => {
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log("Route Name is ", routeName);
    if (tabHiddenRoutes.includes(routeName)) {
      console.log("Kapat ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "none" } });
    } else {
      console.log("Aç ", routeName);
      navigation.setOptions({ tabBarStyle: { display: "true" } });
    }
  }, [navigation, route]);
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
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 15, color: "white" }}>
              Ürünler
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
            onPress={()=>navigation.navigate("CartScreen")}
              style={{
                width: width * 0.2,
                height: 30,
                backgroundColor: "white",
                marginRight: width * 0.03,
                borderRadius: 9,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                source={"../../assets/cart.png"}
                style={{ width: 23, height: 24, marginLeft: 6 }}
              />
              <View
                style={{ height: 33, width: 4, backgroundColor: "white" }}
              ></View>
              <View
                style={{
                  flex: 1,
                  justifyContent: "center",
                  height: 33,
                  backgroundColor: "red",
                  borderTopRightRadius: 9,
                  backgroundColor: "#F3EFFE",
                  borderBottomRightRadius: 9,
                }}
              >
                <Text
                  style={{ color: "#5D3EBD", fontWeight: "bold", fontSize: 12 }}
                >
                  <Text>{"\u20BA"}</Text>
                  23
                </Text>
              </View>
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
            <TouchableOpacity
              onPress={() => navigation.goBack()}
              style={{ paddingLeft: 8 }}
            >
              <Ionicons
                style={{ marginLeft: 4 }}
                name="close"
                size={26}
                color="white"
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() =>clearCart()} style={{ paddingRight: 10 }}> 
              <Ionicons style={{marginRight:8}} name="trash" size={24} color="white" />
            </TouchableOpacity>
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
            <TouchableOpacity
              style={{ paddingLeft: 12 }}
              onPress={() => navigation.goBack()}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", color: "red", fontSize: "15" }}>
              Ürün Detayı
            </Text>
          ),
          headerRight: () => (
            <TouchableOpacity
              style={{ paddingLeft: 12 }}
              onPress={() => navigation.goBack()}
            >
              <Foundation name="heart" size={24} color="#32177a" />
            </TouchableOpacity>
          ),
        }}
      ></Stack.Screen>
    </Stack.Navigator>
  );
}

export default function HomeNavigator({ navigation, route }) {
  return <MyStack navigation={navigation} route={route} />;
}
