import { useState } from "react";
import {  
  StyleSheet,
  Text,
  View,
  ImageBackground,
  TextInput,
  TouchableOpacity,
  Platform,
  KeyboardAvoidingView,
  Keyboard, 
  TouchableWithoutFeedback,  
} from "react-native";

import { authSignIn } from "../../redux/auth/authOperations";
import { useDispatch } from "react-redux";

export default function LoginScreen({ navigation }) {
  const [isShowKeyboard, setIsShowKeyboard] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSecurePassword, setIsSecurePassword] = useState(true);
  const [isFocusedEmail, setIsFocusedEmail] = useState(false);
  const [isFocusedPass, setIsFocusedPass] = useState(false);

  const emailHandler = (text) => setEmail(text);
  const passwordHandler = (text) => setPassword(text);

  const dispatch = useDispatch();

  const onSubmit = () => {
    const userData = { email, password };
    console.log(userData);
    dispatch(authSignIn(userData));
    setEmail("");
    setPassword("");
    keyboardHide();    
  };

  const keyboardHide = () => {
    setIsShowKeyboard(false);
    Keyboard.dismiss();
  };

  return (
    <TouchableWithoutFeedback onPress={keyboardHide}>
      <View style={styles.container}>
        <ImageBackground
          style={styles.image}
          source={require("../../assets/img/PhotoBG.png")}
        >
          <KeyboardAvoidingView
            behavior={Platform.OS == "ios" && "padding"}
          >
            <View
              style={{
                ...styles.form,
                paddingBottom: isShowKeyboard ? 0 : 116,
              }}
            >
              <View style={styles.wrapper}>
                <Text style={styles.formTitle}>Войти</Text>
              </View>
              <View>
                <TextInput
                  style={{
                    ...styles.input,
                    borderColor: isFocusedEmail ? "#FF6C00" : "#E8E8E8",
                  }}                  
                  onFocus={() => {
                    setIsShowKeyboard(true), setIsFocusedEmail(true);
                  }}
                  onBlur={() => setIsFocusedEmail(false)}
                  onChangeText={emailHandler}
                  value={email}
                  placeholder={"Адрес электронной почты"}
                  placeholderTextColor={"#BDBDBD"}
                />
                <View style={styles.inputWrap}>
                  <TextInput
                    style={{
                      ...styles.input,
                      borderColor: isFocusedPass ? "#FF6C00" : "#E8E8E8",
                    }}
                                        
                    onFocus={() => {
                      setIsShowKeyboard(true), setIsFocusedPass(true);
                    }}
                    onBlur={() => setIsFocusedPass(false)}
                    onChangeText={passwordHandler}
                    value={password}
                    secureTextEntry={isSecurePassword}
                    placeholder={"Пароль"}
                    placeholderTextColor={"#BDBDBD"}
                  />
                  <TouchableOpacity
                    style={styles.bthShowWrap}
                    activeOpacity={0.5}
                    onPress={() => setIsSecurePassword(!isSecurePassword)}
                  >
                    <Text style={styles.btnShowPass}>
                      {isSecurePassword ? "Показать" : "Скрыть"}
                    </Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity
                  activeOpacity={0.8}
                  style={{
                    ...styles.btn,
                    marginBottom: isShowKeyboard ? 20 : 0,
                  }}
                  onPress={onSubmit}
                >
                  <Text style={styles.btnText}>Войти</Text>
                </TouchableOpacity>
              </View>

              {!isShowKeyboard && (
                <TouchableOpacity
                  activeOpacity={0.6}
                  style={styles.wrapper}
                  onPress={() => navigation.navigate("Registration")}
                >
                  <Text style={styles.linkLogin}>
                    Нет аккаунта? Зарегистрироваться
                  </Text>
                </TouchableOpacity>
              )}
            </View>
          </KeyboardAvoidingView>
        </ImageBackground>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "flex-end",
  },
  form: {
    position: "relative",
    backgroundColor: "#fff",
    paddingLeft: 16,
    paddingRight: 16,
    paddingTop: 32,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
  },

  formTitle: {
    fontFamily: "Roboto-Medium",
    fontSize: 30,
  },
  wrapper: {
    alignItems: "center",
    marginTop: 16,
    marginBottom: 16,
  },

  input: {
    backgroundColor: "#F6F6F6",
    borderWidth: 1,
    borderRadius: 8,
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#212121",
    height: 50,
    marginTop: 16,
    padding: 16,
  },
  inputWrap: {
    position: "relative",
  },
  bthShowWrap: {
    position: "absolute",
    right: 16,
    top: 29,
  },
  btnShowPass: {
    fontFamily: "Roboto-Regular",
    fontSize: 16,
    color: "#1B4371",
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
  linkLogin: {
    fontSize: 16,
    color: "#1B4371",
  },
});

