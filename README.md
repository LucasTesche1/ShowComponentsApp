# ShowComponentsApp

## Descritivo
Aplicativo desenvolvido para exemplificar o uso de componentes nativos do React Native: View, Text, TextInput, Button, Alert, Image, Modal, ActivityIndicator, FlatList, SafeAreaView, ScrollView, SectionList, StatusBar, Switch, TouchableOpacity e Pressable.

## Estrutura de telas (onde cada componente foi utilizado)
- **HomeScreen**: View, Text, TouchableOpacity (navegação).
- **FormScreen**: TextInput (campo nome, email), Button/TouchableOpacity (enviar), Alert (confirmação), Switch (opções).
- **ListScreen**: FlatList (lista de itens), ActivityIndicator (loading).
- **SectionScreen**: SectionList (itens por seção).
- **ModalScreen**: Modal, TouchableOpacity (abrir/fechar).
- **ImageScreen**: Image (galeria), ActivityIndicator (placeholder/carregando).
- **ScrollScreen**: ScrollView, SafeAreaView.
- **StatusScreen**: StatusBar (demo de temas).
- **AccessibilityScreen**: exemplos de accessibilityLabel e foco.

## Notas sobre depreciação e substituições
- **Button**: funcional, mas limitado visualmente. Prefira `Pressable` ou botões de UI libraries para apps reais.
- **TouchableOpacity**: válido; `Pressable` é sugerido para novos componentes por maior flexibilidade.
- **ListView**: (antigo) — não usado; `FlatList` / `SectionList` são recomendados.
- **Image**: para melhor cache/performance usar libs nativas (ex.: react-native-fast-image), porém verificar compatibilidade com Expo.

## Como rodar
1. `npm install`
2. `npx expo start`


