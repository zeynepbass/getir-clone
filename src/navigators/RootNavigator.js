
import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import {  TouchableOpacity } from "react-native";
import HomeNavigator from "./HomeNavgiator";
import { Entypo,MaterialCommunityIcons} from '@expo/vector-icons'; 

const Tab = createBottomTabNavigator();
function Main() {
const CustomTabBarButton=()=>{
  return(
    <TouchableOpacity style={{
      width:50,
      height:50,
      backgroundColor:"#5C3EBC",
      justifyContent:"center",
      alignContent:"center",
      borderRadius:33,
      margintop:-8,
      borderWidth:3,
      borderColor:"white"
    }}>
      <Entypo name="list" size={32} color="#FFD00C"/>
    </TouchableOpacity>
  )
}
    return (
      <Tab.Navigator
        initialRouteName="Ana Sayfa"
        screenOptions={{
          tabBarHideOnKeyboard: true,
          tabBarShowLabel: false,
          tabBarActiveTintColor: "#5C3EBC",
          tabBarInactiveTintColor: "#959595",
          headerShown: false,
          tabBarStyle: {
            height: 80,
          },
        }}
      >
        <Tab.Screen
          name="Ana Sayfa"
          component={HomeNavigator}
          options={{
            tabBarIcon: ({ color }) => (
              <Entypo name="home" size={24} color={color} />
            ),
          }}
        />     
           <Tab.Screen
        name="Search"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="search" size={24} color={color} />
          ),
        }}
      />           <Tab.Screen
      name="list"
      component={HomeNavigator}
      options={{
        tabBarIcon: (props) => <CustomTabBarButton {...props}/>
      }}
    />
           <Tab.Screen
        name="User"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <Entypo name="users" size={24} color={color} />
          ),
        }}
      />
                 <Tab.Screen
        name="Gift"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="gift" size={24} color={color} />
          ),
        }}
      />
      </Tab.Navigator>
    );
  }
  export default Main;
  