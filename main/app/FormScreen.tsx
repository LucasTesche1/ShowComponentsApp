import { router } from "expo-router";
import { useState } from "react";
import { StyleSheet, View, Text, ScrollView, Button, TextInput, Alert, Switch, Image, Pressable, TouchableOpacity } from "react-native";

export default function FormScreen() {
  const [isEnabled, setIsEnabled] = useState(false);
  const toggleSwitch = () => setIsEnabled(previousState => !previousState);
  const returnAlert = () =>
    Alert.alert(
      "Voltar?",
      "Deseja realmente voltar para a tela inicial?",
      [
        {
          text: "Não",
          style: "cancel",
        },
        {
          text: "Sim",
          onPress: () => router.push("/"),
        },
      ],
      { cancelable: true }
    );



  return (
    <ScrollView contentContainerStyle={styles.container}>
    
        <View style={styles.strip}>
            <Text style={styles.mainTitle}>Form Components</Text>
        </View>

      <View style={styles.container}>
        <View style={{padding:20}}><Text style={styles.title}>Text Input</Text></View>        
        <TextInput
          style={styles.input}
          placeholder="Entrada 1"
          keyboardType="default"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Entrada 2"
          keyboardType="email-address"
          autoCapitalize="none"
        />

        <TextInput
          style={styles.input}
          placeholder="Entrada 3"
          keyboardType="email-address"
          autoCapitalize="none"
        />
        
      </View>

      <View style={styles.container}>        
        <View style={{padding:20}}><Text style={styles.title}>Switch</Text></View>
          <Switch
          trackColor={{false: '#bc6c25', true: '#606c38'}}
          thumbColor={isEnabled ? '#fff' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          onValueChange={toggleSwitch}
          value={isEnabled}
        />
      </View>
      
      
      <View style={styles.container}>        
        <View style={{padding:20}}><Text style={styles.title}>Button e Alert</Text></View>
        <Button onPress={returnAlert} title="Voltar" color="#606c38" />
      </View>

      <View style={{padding:50}}>
        <TouchableOpacity
        onPress={() => router.push('/')}
        >
        <Image
        source={require('@/assets/images/return.png')}
        /> 
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    display:'flex',
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    
  },
  input: {
    width: 350,
    height: 60,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#283618",
    padding: 12,
    marginBottom: 50,
    backgroundColor: "#fefae0",
  },

  mainTitle:{
    fontSize:30,
    color:'#fff',
    textAlign:'center'
  },

  title: {
    fontSize: 20,
    top: 10,
  },

  strip:{
    padding:20,
    backgroundColor:"#283618",
    width:'100%',

  }

});
