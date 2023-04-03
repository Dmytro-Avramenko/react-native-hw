import React from "react";
import { useFonts } from "expo-font";
import { Provider } from "react-redux";
import { store } from "./redux/store";

import { Main } from "./components/Main";

export default function App() {
  const [loaded] = useFonts({
    "Roboto-Medium": require("./assets/fonts/Roboto-Medium.ttf"),
    "Roboto-Regular": require("./assets/fonts/Roboto-Regular.ttf"),
    "Roboto-Bold": require("./assets/fonts/Roboto-Bold.ttf"),    
  });

  if (!loaded) {
    return null;
  }

  return (
    <Provider store={store}>
      <Main />
    </Provider>
  );
}