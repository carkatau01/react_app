import {
  StyleSheet,
  Text,
  SafeAreaView,
  TextInput,
  Button,
} from "react-native";
import React, { useState } from "react";
// encrypt the data
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function Account() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const storeToken = async (value) => {
    try {
      await AsyncStorage.setitem("token", value);
    } catch (e) {
      console.log("cant save token");
    }
  };

  async function clearToken() {
    AsyncStorage.removeItem("token");
  }

  function submitHandler() {}

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
        style={styles.input}
      ></TextInput>
      <TextInput
        defaultValue={password}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      ></TextInput>
      <Button title="Login"></Button>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  input: {
    width: 300,
    height: 48,
    padding: 10,
    borderWidth: 1,
    borderColor: "black",
    marginBottom: 10,
    borderRadius: 8,
  },
});
