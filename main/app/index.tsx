import { StyleSheet, View, TouchableOpacity, Text, ScrollView, StatusBar, StatusBarStyle, Button, Platform } from "react-native";
import { router } from "expo-router";
import { useState } from "react";

const STYLES = ['default', 'dark-content', 'light-content'] as const;
const TRANSITIONS = ['fade', 'slide', 'none'] as const;

export default function Navigation() {

  const [hidden, setHidden] = useState(false);
  const [statusBarStyle, setStatusBarStyle] = useState<StatusBarStyle>(
    STYLES[0],
  );
  const [bgColor, setBgColor] = useState("#fff");


  const changeStatusBarVisibility = () => setHidden(!hidden);


  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    const newStyle = styleId === STYLES.length ? STYLES[0] : STYLES[styleId];
    setStatusBarStyle(newStyle);

    if (newStyle === "light-content") {
      setBgColor("#283618"); // fundo escuro
    } else {
      setBgColor("#fefae0"); // fundo claro
    }
  };

return (
  
  <ScrollView contentContainerStyle={styles.container}>
    
    <StatusBar
      animated={true}
      backgroundColor={bgColor}
      barStyle={statusBarStyle}
      hidden={hidden}
    />
    
    <View style={styles.cardContainer}>
      <TouchableOpacity style={styles.card} onPress={() => router.push('/FormScreen')}>            
        <Text style={styles.cardText}>Formulários</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/ListScreen')}>            
        <Text style={styles.cardText}>Listas</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/modal')}>            
        <Text style={styles.cardText}>Modal</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.card} onPress={() => router.push('/ImageScreen')}>            
        <Text style={styles.cardText}>Imagens</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.cardStatus} onPress={changeStatusBarVisibility}>            
        <Text style={styles.cardText}>Visibilidade StatusBar</Text>
      </TouchableOpacity>
            
      <TouchableOpacity style={styles.cardStatus} onPress={changeStatusBarStyle}>            
        <Text style={styles.cardText}>Estilos StatusBar</Text>
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
  cardStatus:{
    width: 150,
    height: 60,
    borderRadius: 12,
    borderWidth: 1,
    borderColor: "#d2d2d2",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#283618",

  },
  cardText: {
    width:100,
    textAlign:'center',
    fontSize: 16,
    fontWeight: "bold",
    color:'#fff'
  },
    buttonsContainer: {
    padding: 10,
  },
  textStyle: {
    textAlign: 'center',
    marginBottom: 8,

  },

});