import React from "react";
import { Text, View, StyleSheet } from "react-native";

const CommentsScreen = () => {
  return (
    <View style={styles.container}>
      <Text>Тут коментарі</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default CommentsScreen;