import { router } from "expo-router";
import { useEffect, useState } from "react";
import { StyleSheet, View, Text, FlatList, SectionList, ActivityIndicator, TouchableOpacity, Image } from "react-native";

type Item = { id: string; title: string };
type Section = { title: string; data: Item[] };

export default function ListScreen() {
  const [loading, setLoading] = useState(true);
  const [flatData, setFlatData] = useState<Item[]>([]);
  const [sectionData, setSectionData] = useState<Section[]>([]);

  useEffect(() => {
    setTimeout(() => {
      const items: Item[] = Array.from({ length: 10 }, (_, i) => ({
        id: (i + 1).toString(),
        title: `Item ${i + 1}`,
      }));
      setFlatData(items);
      setSectionData([
        { title: "Grupo A", data: items.slice(0, 5) },
        { title: "Grupo B", data: items.slice(5) },
      ]);
      setLoading(false);
    }, 1500);
  }, []);

  if (loading) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#606c38" />
        <Text>Carregando dados...</Text>
      </View>
    );
  }

  return (
    <>
    
        <View style={styles.strip}>
            <Text style={styles.mainTitle}>List Components</Text>
        </View>
      
      <FlatList
              data={flatData}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => (
                  <View style={styles.item}>
                      <Text>{item.title}</Text>
                  </View>
              )}
              ListHeaderComponent={<>


                  <Text style={styles.title}>SectionList</Text>
                  <SectionList
                      sections={sectionData}
                      keyExtractor={(item) => item.id}
                      renderItem={({ item }) => (
                          <View style={styles.item}>
                              <Text>{item.title}</Text>
                          </View>
                      )}
                      renderSectionHeader={({ section: { title } }) => (
                          <View style={styles.sectionHeader}>
                              <Text style={styles.sectionHeaderText}>{title}</Text>
                          </View>
                      )} />

                  <View style={styles.return}>
                      <TouchableOpacity onPress={() => router.push("/")}>
                          <Image source={require("@/assets/images/return.png")} />
                      </TouchableOpacity>
                  </View>
              </>}
              contentContainerStyle={{ paddingHorizontal: 16, paddingBottom: 40 }} /></>
  );
}

const styles = StyleSheet.create({
  strip: {
    padding: 20,
    backgroundColor: "#283618",
    width: "100%",
    marginBottom: 10,
  },
  mainTitle: { fontSize: 30, color: "#fff", textAlign: "center" },
  item: {
    padding: 15,
    backgroundColor: "#f0f0f0",
    marginVertical: 5,
    borderRadius: 8,
  },
  sectionHeader: { backgroundColor: "#d9d9d9", padding: 10, borderRadius: 6 },
  sectionHeaderText: { fontWeight: "bold" },
  title: { fontSize: 24, fontWeight: "bold", marginVertical: 10 },
  return: { paddingVertical: 30, alignItems: "center" },
  loadingContainer: { flex: 1, justifyContent: "center", alignItems: "center" },
});
