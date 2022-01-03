import { StyleSheet, Text, SafeAreaView } from "react-native";

export default function Order() {
  return (
    <SafeAreaView style={styles.container}>
      <Text>Order</Text>
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
