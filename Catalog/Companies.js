import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

export default function Companies() {
  const [companies, setCompanies] = useState([]);

  const renderItem = ({ item }) => (
    <Text>
      {item.id} - {item.name}
    </Text>
  );

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    let URL = "http://potcat.test/api/companies";
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setCompanies(json.data))
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={companies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      ></FlatList>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    // alignItems: "center",
    justifyContent: "center",
  },
});
