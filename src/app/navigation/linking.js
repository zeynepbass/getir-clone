import * as Linking from "expo-linking";

const linking = {
  prefixes: [Linking.createURL("/")],
  config: {
    screens: {
      Cart: {
        path: "cartScreen/:message",
        parse: {
          message: (message) => `parametreli-${message}`,
        },
      },
    },
  },
};

export default linking;
