
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";
import store from "../getir-clone/src/redux/store"
import Provider from  "react-redux"
export default function App() {

  return (
    <Provider store={store}>
    <NavigationContainer >
        <RootNavigator />
      </NavigationContainer>
    </Provider>
  

  );
}

