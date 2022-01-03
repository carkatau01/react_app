import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function Companies() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Companies</Text>
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
