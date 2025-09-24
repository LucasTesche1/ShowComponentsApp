import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function FormScreen() {
  const [loading, setLoading] = useState(true);

  const imageUrl = "https://picsum.photos/400/300";
  const placeholder = "https://via.placeholder.com/400x300.png?text=Carregando...";


  return (
    <SafeAreaProvider>

    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Imagem com placeholder</Text>

      <View style={styles.imageContainer}>
        {loading && (
          <ActivityIndicator size="large" color="#606c38" style={styles.activity} />
        )}

        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="cover"
          onLoadEnd={() => setLoading(false)}
          defaultSource={{ uri: placeholder }} 
        />
      </View>

      <Text style={styles.subtitle}>resizeMode: cover</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="contain"
        />
      </View>
      <Text style={styles.subtitle}>resizeMode: contain</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="stretch"
        />
      </View>
      <Text style={styles.subtitle}>resizeMode: stretch</Text>

      <View style={styles.imageContainer}>
        <Image
          source={{ uri: imageUrl }}
          style={styles.image}
          resizeMode="center"
        />
      </View>

      <Text style={styles.lastSubtitle}>resizeMode: center</Text>
      <View style={styles.lastSubtitle}></View>
 
    </ScrollView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  title: { fontSize: 28, fontWeight: "bold", marginVertical: 20 },
  subtitle: { fontSize: 18, marginTop: 10, marginBottom: 20 },
  lastSubtitle:{
    fontSize:18,
    marginTop:10,
    marginBottom:500
  },
  imageContainer: {
    width: 350,
    height: 200,
    backgroundColor: "#f0f0f0",
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  image: { width: "100%", height: "100%", borderRadius: 10 },
  activity: { position: "absolute" },
});