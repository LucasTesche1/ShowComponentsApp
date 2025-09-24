import { StyleSheet, View, TouchableOpacity, Text, ScrollView } from "react-native";
import { router } from "expo-router";

export default function Navigation() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.cardContainer}>
        <TouchableOpacity style={styles.card} onPress={() => router.push('/FormScreen')}>            
          <Text style={styles.cardText}>FormScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>FormScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>ListScreen</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.card}>
          <Text style={styles.cardText}>ModalScreen</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: "center", 
    alignItems: "center", 
    backgroundColor: "#fff",
    paddingVertical: 20,
  },
  cardContainer: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center", 
    gap: 15,
  },
  card: {
    width: 150,
    height: 200,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#606c38",
  },
  cardText: {
    fontSize: 16,
    fontWeight: "bold",
    color:'#fff'
  },
});