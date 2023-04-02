import React, { useEffect, useState } from "react";
import {
  Text,
  View,
  Image,
  StyleSheet,
  TouchableOpacity,  
  Alert,
  TextInput
} from "react-native";

import { Camera } from "expo-camera";
import * as Location from "expo-location";

const CreatePostScreen = ({ navigation }) => {
  const [camera, setCamera] = useState(null);
  const [photo, setPhoto] = useState("");

  const takePhoto = React.useCallback(async () => {
    const photo = await camera.takePictureAsync();
    const location = await Location.getCurrentPositionAsync();
    // console.log("latitude", location.coords.latitude);
    // console.log("longitude", location.coords.longitude);
    
    console.log(photo.uri);
    console.log(location);    
    setPhoto(photo.uri);
  }); 

  const sendPhoto = () => {
    // console.log("navigation", navigation);
    if (photo)
      navigation.navigate("DefaultScreen", { photo }
    );
  };

  useEffect(() => {
    (async () => {
      const { status } = await Location.requestForegroundPermissionsAsync();
      console.log(status);
      if (status !== "granted") {
        console.log("Permission to access location was denied");
        Alert.alert("Permission to access location was denied!");
      }
    })();
  }, []); 

  return (
    <View style={styles.container}>
      <View style={styles.cameraWrap}>
        <Camera style={styles.camera} ref={setCamera}>
          <TouchableOpacity
            style={styles.snapWrap}
            activeOpacity={0.6}
            onPress={takePhoto}
          >
            <Image source={require("../../assets/camera.png")} />
          </TouchableOpacity>
        </Camera>        
      </View>

      <TouchableOpacity style={styles.btn} onPress={sendPhoto} 
        activeOpacity={0.8}       
      >
        <Text style={styles.btnText}>Опубликовать</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginHorizontal: 16,    
  },
  cameraWrap: {
    height: 240,
    marginTop: 32,
    borderRadius: 8,
    overflow: "hidden",
  },
  camera: {
    height: 240,
    justifyContent: "center",
    alignItems: "center",
  },
  snapWrap: {
    justifyContent: "center",
    alignItems: "center",
    width: 60,
    height: 60,
    backgroundColor: "rgba(255, 255, 255, 0.3)",
    borderRadius: 50,
  },
  btn: {
    backgroundColor: "#FF6C00",
    borderRadius: 100,
    padding: 16,
    marginTop: 43,
    alignItems: "center",
  },
  btnText: {
    color: "#FFFFFF",
  }, 
});

export default CreatePostScreen;

