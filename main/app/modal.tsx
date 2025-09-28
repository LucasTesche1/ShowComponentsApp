import AntDesign from '@expo/vector-icons/AntDesign';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Alert, Modal, StyleSheet, Text, Pressable, View, TouchableOpacity, Image } from 'react-native';
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';

const App = () => {
  const returnAlertQuestion = () => {
      Alert.alert(
      "Curiosidades",
      `SAFEAREAVIEW: Garante que o conteúdo não seja exibido em áreas "sensíveis" da tela (como notch ou barra de status). Muito usado em iOS.

MODAL: Cria uma janela sobreposta a original, útil para diálogos e informações.

VIEW: Serve como um contêiner para estruturar a interface.

TEXT: Usado para exibir textos na tela.

TOUCHABLE OPACITY: Um botão personalizável que altera a opacidade ao ser pressionado. Muito usado quando se deseja customizar botões além do padrão.
  
  `,
        [
          {
  
          },
  
        ],
        { cancelable: true }
      );
    };
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <SafeAreaProvider>
      <View style={styles.strip}>
        <Text style={styles.mainTitle}>Modal Component</Text>
      </View>
      <SafeAreaView style={styles.centeredView}>
        <Modal
          animationType="fade"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal fechou.');
            setModalVisible(!modalVisible);
          }}>
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>Isso é uma modal!</Text>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(!modalVisible)}>
                <Text style={styles.textStyle}>Voltar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
        <Pressable
          style={[styles.button, styles.buttonOpen]}
          onPress={() => setModalVisible(true)}>
          <Text style={styles.textStyle}>Abrir</Text>
        </Pressable>
      </SafeAreaView>

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
    </SafeAreaProvider>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 10,
    padding: 30,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#606c38',
  },
  buttonClose: {
    backgroundColor: '#bc6c25',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  strip: {
    padding: 20,
    backgroundColor: "#283618",
    width: "100%",
    marginBottom: 10,
  },
  mainTitle: { fontSize: 30, color: "#fff", textAlign: "center" },
  
  returnContainer:{
    alignItems:'center',
    justifyContent:'center',
    padding:50,
    flexDirection:'row',
    gap:8

  },
});

export default App;