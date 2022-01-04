import { useEffect, useState } from "react";
import { StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

export default function Companies() {
  const [companies, setCompanies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const renderItem = ({ item }) => (
    <Text>
      {item.id} - {item.name}
    </Text>
  );

  useEffect(() => {
    getCompanies();
  }, []);

  const getCompanies = () => {
    setIsLoading(true);
    let URL = "http://potcat.test/api/companies";
    fetch(URL)
      .then((response) => response.json())
      .then((json) => setCompanies(json.data))
      .catch((error) => {
        console.error(error);
      })
      .finally(() => setIsLoading(false));
  };

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={companies}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
        onRefresh={getCompanies}
        refreshing={isLoading}
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
