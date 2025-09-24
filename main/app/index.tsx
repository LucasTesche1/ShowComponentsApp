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
  const [statusBarTransition, setStatusBarTransition] = useState<
    'fade' | 'slide' | 'none'
  >(TRANSITIONS[0]);

  const changeStatusBarVisibility = () => setHidden(!hidden);

  const changeStatusBarStyle = () => {
    const styleId = STYLES.indexOf(statusBarStyle) + 1;
    if (styleId === STYLES.length) {
      setStatusBarStyle(STYLES[0]);
    } else {
      setStatusBarStyle(STYLES[styleId]);
    }
  };

  const changeStatusBarTransition = () => {
    const transition = TRANSITIONS.indexOf(statusBarTransition) + 1;
    if (transition === TRANSITIONS.length) {
      setStatusBarTransition(TRANSITIONS[0]);
    } else {
      setStatusBarTransition(TRANSITIONS[transition]);
    }
  };



return (
  
  <ScrollView contentContainerStyle={styles.container}>
    
    <StatusBar
      animated={true}
      backgroundColor="#606c38"
      barStyle={statusBarStyle}
      showHideTransition={statusBarTransition}
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