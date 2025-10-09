
import "react-native-gesture-handler"
import { NavigationContainer } from "@react-navigation/native";
import RootNavigator from "./src/navigators/RootNavigator";


export default function App() {

  return (
      <NavigationContainer >
        <RootNavigator />
      </NavigationContainer>

  );
}

