# ShowComponentsApp

## Descritivo
Aplicativo desenvolvido para exemplificar o uso de componentes nativos do React Native: View, Text, TextInput, Button, Alert, Image, Modal, ActivityIndicator, FlatList, SafeAreaView, ScrollView, SectionList, StatusBar, Switch, TouchableOpacity e Pressable.

## Estrutura de telas (onde cada componente foi utilizado)
- **Index**: View, Text, TouchableOpacity, StatusBar.
- **FormScreen**: TextInput (campo nome, email), Button/TouchableOpacity (enviar), Alert (confirmação), Switch (opções).
- **ListScreen**: FlatList (lista de itens), ActivityIndicator (loading).
- **SectionScreen**: SectionList (itens por seção).
- **ModalScreen**: Modal, TouchableOpacity, SafeAreaView (abrir/fechar), Pressable.
- **ImageScreen**: Image (galeria), ScrollView.

## O que cada componente faz?

🔹 View

- Serve como um contêiner básico para estruturar a interface.
- Pode ser comparado a uma "div" no HTML.

🔹 Text

- Usado para exibir textos na tela.
- Permite estilização como tamanho, cor e alinhamento.

🔹 TextInput

- Campo de entrada para o usuário digitar informações (como formulários e login).
- Aceita configurações como tipo de teclado e placeholders.

🔹 Button

- Botão padrão do React Native.
- Dispara ações ao ser pressionado, como navegar para outra tela ou enviar dados.

🔹 Alert

- Exibe uma janela de alerta nativa (pop-up) com mensagens e botões de ação.

🔹 Image

- Responsável por exibir imagens no aplicativo.
- Suporta imagens locais ou da internet.

🔹 Modal

- Cria uma janela sobreposta à tela principal.
- Útil para diálogos, formulários e confirmações.

🔹 ActivityIndicator

- Mostra um ícone de carregamento animado (loading spinner).
- Usado para indicar processos em andamento.

🔹 FlatList

- Lista otimizada para grandes quantidades de dados.
- Renderiza apenas os itens visíveis, melhorando a performance.

🔹 SafeAreaView

- Garante que o conteúdo não seja exibido em áreas "sensíveis" da tela (como notch ou barra de status).
- Muito usado em iOS.

🔹 ScrollView

- Permite rolagem do conteúdo quando ele ultrapassa o tamanho da tela.
- Ideal para formulários ou páginas longas.

🔹 SectionList

- Lista dividida em seções, cada uma com seu cabeçalho.
- Útil para exibir dados agrupados, como contatos por letra.

🔹 StatusBar

- Controla a barra de status do dispositivo.
- Permite alterar estilo, cor e visibilidade.

🔹 Switch

- Um botão de alternância (liga/desliga).
- Muito usado para configurações e preferências.

🔹 TouchableOpacity

- Um botão personalizável que altera a opacidade ao ser pressionado.
- Muito usado quando se deseja customizar botões além do padrão.

## Como rodar
1. `npm install`
2. `npx expo start`


