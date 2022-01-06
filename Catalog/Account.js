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
      await AsyncStorage.setItem("token", value);
    } catch (e) {
      console.log("cant save token" + e);
    }
  };

  const clearToken = async function () {
    try {
      await AsyncStorage.removeItem("token");
    } catch (error) {
      console.error("Error clearing app data.");
    }
  };

  function submitHandler() {
    const requestOptions = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: username,
        password: password,
      }),
    };
    fetch("http://potcat.test/api/auth/token", requestOptions)
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        if (res.access_token !== "" && res.error !== "Unauthorized") {
          storeToken(res.access_token);
          console.log("GOT TOKEN!");
        } else {
          console.log("GOT ERROR OR EMPTY RESULT");
        }
      })
      .catch(function (error) {
        console.log("GOT ERROR " + error);
      });
  }

  return (
    <SafeAreaView style={styles.container}>
      <TextInput
        defaultValue={username}
        onChangeText={(text) => setUsername(text)}
        placeholder="Username"
        autoCorrect={false}
        autoCapitalize="none"
        style={styles.input}
      ></TextInput>
      <TextInput
        defaultValue={password}
        autoCapitalize="none"
        autoCorrect={false}
        onChangeText={(text) => setPassword(text)}
        placeholder="Password"
        style={styles.input}
        secureTextEntry={true}
      ></TextInput>
      <Button title="Login" onPress={submitHandler}></Button>
      <Button title="Logout" onPress={clearToken}></Button>
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
    borderColor: "#6b6b6b",
    marginBottom: 10,
    borderRadius: 8,
  },
});
