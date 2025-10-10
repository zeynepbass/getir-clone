
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import store from "./src/redux/store"
import {Provider} from  "react-redux"
import * as Linking from "expo-linking"
const prefix=Linking.createURL('/')
export default function App() {
  const linking={
    prefixes:[prefix],
    config:{
      screens:{
        Search:{
          screens:{
            CartScreen:{
              path:"cartScreen/:message",
             parse:{
              message:(message)=>`parametreli-${message}`
             }
            }
          }
        }
      }
    }
  }
  //! bu linke eriştiğimizde otomatık olarak ekledıgımız 
  //!sayfaya yonlenıcek yani application açılınca orayı acıcak
  //? parametreli olarak   message",  
  //? parse:{  message:(message)=>`parametreli-${message}` }
  return (
    <Provider store={store}>
    <NavigationContainer linking={linking}>
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  

  );
}

