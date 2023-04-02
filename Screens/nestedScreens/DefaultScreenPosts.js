import React, { useEffect, useState } from "react";
import {
  View,
  StyleSheet,
  FlatList,
  Image,
  TouchableOpacity,
} from "react-native";

const DefaultPostsScreen = ({ route, navigation }) => {
  const [posts, setPosts] = useState([]);
  // console.log("route.params", route.params);
  console.log(posts);
    
  useEffect(() => {
    if (route.params) {
      setPosts((prevState) => [...prevState, route.params]);
    }
  }, [route.params]);
  // console.log("posts", posts);
    
    return (
        <View style={styles.container}>
          <FlatList
              data={posts}
              keyExtractor={(item, indx) => indx.toString()}
              renderItem={({ item }) => (
                <View
                  style={{
                    marginBottom: 10
                  }}>
                  <Image
                    source={{ uri: item.photo }}
                    style={{ width: 300, height: 200 }}
                  />
                  
                  <TouchableOpacity
                    onPress={() => navigation.navigate("Comments")}>
                    <Image source={require("../../assets/message.png")}
                    />
                  </TouchableOpacity>
                  
                  <TouchableOpacity
                    onPress={() => { navigation.navigate("Map"); }}>
                    <Image source={require("../../assets/map-pin.png")} />
                  </TouchableOpacity>
                </View>
              )}
          />
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

export default DefaultPostsScreen;