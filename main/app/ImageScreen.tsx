import AntDesign from "@expo/vector-icons/AntDesign";
import { router } from "expo-router";
import React, { useState } from "react";
import { View, Text, StyleSheet, Image, ActivityIndicator, ScrollView, TouchableOpacity, Alert } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";


export default function FormScreen() {
  const [loading, setLoading] = useState(true);

  const imageUrl = "https://picsum.photos/400/300";
  const placeholder = "https://via.placeholder.com/400x300.png?text=Carregando...";

  const returnAlertQuestion = () => {
        Alert.alert(
        "Curiosidades",
        `IMAGE: Resposável por exibir imagens no app. Suporta imagens locais ou web.
  
SCROLLVIEW: Permite rolagem do conteúdo quando ele ultrapassa o tamanho da tela.
  
    `,
          [
            {
    
            },
    
          ],
          { cancelable: true }
        );
      };



  return (
    <SafeAreaProvider>

    <View style={styles.strip}>
        <Text style={styles.mainTitle}>Image Components</Text>
    </View>
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Imagens com placeholder</Text>

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

      <Text style={styles.subtitle}>resizeMode: center</Text>
      <View style={styles.subtitle}></View>
      <View style={styles.returnContainer}>
        <TouchableOpacity
        onPress={() => router.push('/')}
        >
        <Image
        source={require('@/assets/images/return.png')}
        /> 
        </TouchableOpacity>

        <TouchableOpacity
        onPress={returnAlertQuestion}>
        <AntDesign name="question-circle" size={35} color={'#606c38'}/>
        </TouchableOpacity>
      </View>
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

  
  mainTitle:{
    fontSize:30,
    color:'#fff',
    textAlign:'center'
  },

  strip:{
    padding:20,
    backgroundColor:"#283618",
    width:'100%',

  },

 returnContainer:{
    alignItems:'center',
    justifyContent:'center',
    padding:50,
    flexDirection:'row',
    gap:8

  },
});