import { router } from "expo-router";
import { StyleSheet, View, Text, ScrollView, Button, TextInput, Alert } from "react-native";

export default function FormScreen() {
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
          onPress: () => router.push("/"), // aqui você define a rota de destino
        },
      ],
      { cancelable: true }
    );

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>FORM</Text>
      <View style={styles.container}>
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

        <Button onPress={returnAlert} title="Voltar" color="#606c38" />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: 50,
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
  title: {
    fontSize: 40,
    top: 10,
  },
});
