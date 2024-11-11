import { useState } from 'react'
import { SafeAreaView, View, StyleSheet, Text, Image, TextInput, TouchableOpacity, ScrollView } from "react-native";

// Tipagem das mensagens
interface Message {
  text: string;
  sender: 'user' | 'bot';
  type: 'response';  // O campo 'type' é obrigatório
}

const respostas = [
  {
    id: 1,
    texto: 'Olá tudo bem ?... em que posso ajudar?',
    tipo: 'response',
  },
  {
    id: 2,
    texto: 'Sim, só um momento, vou encaminhar você para um de nossos atendentes disponíveis.',
    tipo: 'response',
  },
  {
    id: 3,
    texto: 'Qualquer dúvida é só me chamar.',
    tipo: 'response',
  }
];

const ChatBox = () => {
  const [message, setMessage] = useState<string>('');  // Mensagem atual que está sendo digitada
  const [messages, setMessages] = useState<Message[]>([]);  // Estado para armazenar as mensagens

  // Função para enviar a mensagem
  const handleMessage = () => {
    // Adiciona a mensagem do usuário ao estado
    setMessages(prevMessages => [
      ...prevMessages,
      { text: message, sender: 'user', type: 'response' },  // Inclui o campo 'type'
    ]);
    
    setMessage(''); // Limpa o campo de entrada

    // Simula uma resposta automática com atraso
    setTimeout(() => {
      // Usamos um switch para verificar o conteúdo da mensagem
      let responseMessage = '';
      switch (message.toLowerCase()) {
        case 'ola':
          responseMessage = respostas[0].texto; // Responde com a id 1
          break;
        case 'atendente':
          responseMessage = respostas[1].texto; // Responde com a id 2
          break;
        case 'dúvidas':
          responseMessage = respostas[2].texto; // Responde com a id 3
          break;
        default:
          responseMessage = 'Desculpe, não entendi sua mensagem. Pode reformular?'; // Resposta padrão
          break;
      }

      // Adiciona a resposta do bot ao estado
      setMessages(prevMessages => [
        ...prevMessages,
        { text: responseMessage, sender: 'bot', type: 'response' },  // Inclui o campo 'type'
      ]);
    }, 1000); // Resposta automática após 1 segundo
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <Image source={require('../../assets/wallpapper.webp')} style={styles.wallpapper} />
      <View style={styles.headerChatbox}>
        <Text style={styles.headerTitleChatbox}>Bem-vindo ao nosso Chat</Text>
        <Text style={{ left: 75, bottom: 3, fontSize: 22, fontWeight: '700' }}>{'X'}</Text>
      </View>

      {/* Exibição das mensagens dentro de um ScrollView */}
      <View style={styles.messageContainerWrapper}>
        <ScrollView contentContainerStyle={styles.messageContainer}>
          {messages.map((msg, index) => (
            <View
              key={index}
              style={[
                styles.messageBox,
                msg.sender === 'user' ? styles.userMessage : styles.botMessage, // Distinção entre as mensagens
              ]}
            >
              <Text style={styles.messageText}>{msg.text}</Text>
            </View>
          ))}
        </ScrollView>
      </View>

      <View style={styles.footerChabox}>
        <TextInput
          value={message}
          style={styles.footerInput}
          placeholder="Digite sua mensagem"
          onChangeText={(text) => setMessage(text)}
        />
        <TouchableOpacity onPress={handleMessage}>
          <Image style={styles.imageSendMessage} source={require('../../assets/send.png')} />
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
    borderWidth: 3,
    width: 400,
    maxHeight: 500,
    borderColor: '#8a817c',
    borderRadius: 15,
    position: 'relative',
    top: 20,
  },
  headerChatbox: {
    backgroundColor: '#e8f0fe',
    maxHeight: 80,
    width: '100%',
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    flexDirection: 'row',
  },
  headerTitleChatbox: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 10,
  },
  wallpapper: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    opacity: 0.2,
  },
  messageContainerWrapper: {
    flex: 1,
    width: '100%',
    padding: 10,
  },
  messageContainer: {
    paddingBottom: 80, // Ajuste para evitar sobreposição com a barra de entrada
  },
  messageBox: {
    maxWidth: '80%',
    padding: 10,
    marginBottom: 10,
    borderRadius: 10,
  },
  userMessage: {
    backgroundColor: '#3498db',
    alignSelf: 'flex-start',
    marginLeft: 10, // Ajuste para que as mensagens do usuário fiquem mais à esquerda
  },
  botMessage: {
    backgroundColor: '#f39c12',
    alignSelf: 'flex-end',
    marginRight: 10, // Ajuste para que as mensagens do bot fiquem mais à direita
  },
  messageText: {
    color: '#fff',
    fontSize: 16,
  },
  footerChabox: {
    backgroundColor: '#fafaf0',
    position: 'absolute',
    bottom: 0,
    left: 0,
    padding: 8,
    width: '100%',
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 60, // Definindo a altura do campo de entrada
  },
  footerInput: {
    backgroundColor: '#ffff',
    borderRadius: 10,
    width: '80%',
    height: 50,
    marginTop: 10,
    padding: 10,
  },
  imageSendMessage: {
    width: 35,
    height: 35,
    top: 8,
    right: 10,
  },
});

export default ChatBox;
