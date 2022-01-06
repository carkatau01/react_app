import { StyleSheet, Text, SafeAreaView } from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Order() {
  const [token, setToken] = useState("");
  const [userData, setUserData] = useState("{}");

  useEffect(() => {
    AsyncStorage.getItem("token").then((value) => {
      if (value) {
        setToken(value);
      }
    });
  });

  useEffect(() => {
    if (token !== "") {
      getPersonalInfo();
    }
  }, [token]);

  const getPersonalInfo = () => {
    let URL = "http://potcat.test/api/auth/me";
    fetch(URL, {
      headers: {
        "Content-Type": "application/json",
        Authorization: "Bearer " + token,
      },
      method: "GET",
    })
      .then((res) => {
        return res.json();
      })
      .then((res) => {
        setUserData(res[0]);
      })
      .catch(function (error) {
        console.log("GOT ERROR " + error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      {token !== null ? (
        <>
          <Text>Hello {userData.name}</Text>
          <Text>{userData.email}</Text>
        </>
      ) : (
        <>
          <Text>You are not loged in</Text>
        </>
      )}
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
});
