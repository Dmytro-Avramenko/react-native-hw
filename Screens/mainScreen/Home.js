import React from "react";
import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

const MainTabScreen = createBottomTabNavigator();

import PostsScreen from "./PostsScreen";
import CreatePostScreen from "./CreatePostsScreen";
import ProfileScreen from "./ProfileScreen";

export default function MainScreen({ navigation }) {
  return (
    <MainTabScreen.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        headerTitleAlign: "center",
        headerTitleStyle: {
          fontFamily: "Roboto-Medium",
          fontSize: 17,
          color: "#212121",
        },
      }}
    >

      <MainTabScreen.Screen
        options={{
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require("../../assets/posts.png")} />
          ),
          headerShown: false,
          // title: "Публикации",
          // headerRight: () => (
          //   <TouchableOpacity
          //     style={styles.logOutBtn}
          //     onPress={() => navigation.navigate("Login")}
          //   >
          //     <Image source={require("../../assets/logOut.png")} />
          //   </TouchableOpacity>
          // ),
        }}
        name="Posts"
        component={PostsScreen}
      />

      <MainTabScreen.Screen
        options={{
          title: "Создать публикацию",
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require("../../assets/addPost.png")} />
          ),
        }}
        name="Create"
        component={CreatePostScreen}
      />
      
      <MainTabScreen.Screen
        options={{
          title: "Профиль",
          tabBarIcon: ({ focused, size, color }) => (
            <Image source={require("../../assets/user.png")} />
          ),
        }}
        name="Profile"
        component={ProfileScreen}
      />
    </MainTabScreen.Navigator>
  );
}

// const styles = StyleSheet.create({
//   logOutBtn: {
//     marginRight: 19,
//   },
// });