import { View, Text, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from "react";
import { Entypo } from '@expo/vector-icons'; 
import { useNavigation } from "@react-navigation/native";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/actions/cardActions";

const { height, width } = Dimensions.get("window");

export default function ProductItem({ item }) {
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const handleAddToCart = () => {
    dispatch(addToCart({ quantity: 1, product: item }));
  }

  return (
    <TouchableOpacity
      onPress={() => navigation.navigate("ProductDetails", { product: item })}
      style={{
        width: width * 0.285,
        marginTop: 12,
        height: height * 0.25,
        flexDirection: "column",
        alignItems: "flex-start",
        marginLeft: 12,
        marginBottom: 10,
      }}
    >
      <Image
        style={{
          width: width * 0.285,
          height: width * 0.285,
          borderRadius: 12,
          borderWidth: 0.1,
          borderColor: "gray",
        }}
        source={{ uri: item.image }}
      />
      <View style={{ flexDirection: "row", marginTop: 10, alignItems: 'center' }}>
        <Text
          style={{
            textDecorationLine: "line-through",
            color: "#747990",
            fontWeight: "bold",
            fontSize: 10,
          }}
        >
          {"\u20BA"}{item.fiyat}
        </Text>
        <Text
          style={{
            color: "#5D3EBD",
            fontWeight: "bold",
            fontSize: 12,
            marginLeft: 4,
          }}
        >
          {"\u20BA"}{item.fiyatIndirimli}
        </Text>
      </View>
      <Text style={{ fontWeight: '600', fontSize: 13, marginTop: 4 }}>{item.name}</Text>
      <Text style={{ color: '#747990', fontSize: 12, marginTop: 4, fontWeight: '600' }}>{item.miktar}</Text>

      <TouchableOpacity
        onPress={handleAddToCart}
        style={{
          position: 'absolute',
          borderWidth: 0.3,
          right: -10,
          top: -10,
          borderRadius: 5,
          shadowRadius: 3.8,
          shadowOpacity: 0.05,
          borderColor: 'lightgrey',
          backgroundColor: 'white',
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
          width: 30,
          height: 30,
        }}
      >
        <Entypo name="plus" size={22} color="#5D3EBD" />
      </TouchableOpacity>
    </TouchableOpacity>
  );
}
