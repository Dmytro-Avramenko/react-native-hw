import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import DefaultPostsScreen from "../nestedScreens/DefaultScreenPosts";
import CommentsScreen from "../nestedScreens/CommentsScreen";
import MapScreen from "../nestedScreens/MapScreen";

import { Image, StyleSheet, TouchableOpacity } from "react-native";

const PostedScreen = createStackNavigator();
// const NestedScreen = createStackNavigator();

const PostsScreen = ({ navigation }) => {
  return (
    <PostedScreen.Navigator>
      <PostedScreen.Screen
        name="DefaultScreen"
        component={DefaultPostsScreen}
        options={{
          title: "Публикации",
          headerTitleAlign: "center",

          headerRight: () => (
            <TouchableOpacity
              style={styles.logOutBtn}
              onPress={() => navigation.navigate("Login")}
            >
              <Image source={require("../../assets/logOut.png")} />
            </TouchableOpacity>
          ),
          headerLeft: () => null,
        }}
      />

      <PostedScreen.Screen
        name="Comments"
        component={CommentsScreen}
        options={{
          title: "Комментарии",
          headerTitleAlign: "center",
          headerBackTitleVisible: false,
        }}
      />

      <PostedScreen.Screen
        name="Map"
        component={MapScreen}
        options={{
          title: "Карта",
          headerBackTitleVisible: false,
          headerTitleAlign: "center",
        }}
      />
    </PostedScreen.Navigator>
  );
};

const styles = StyleSheet.create({
  logOutBtn: {
    marginRight: 19,
  },
});

export default PostsScreen;