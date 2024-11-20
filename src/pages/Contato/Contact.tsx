import React from "react";
import { SafeAreaView, View, Text, Image, StyleSheet, TouchableOpacity } from "react-native";
import ChatBox from "../../components/ChatBot/Chatbox";
import useModal from "../../utils/funcao";

export default function Contact() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <View style={styles.viewContacts}>
      <TouchableOpacity onPress={closeModal}>
        <Text style={styles.titleViewContact}>Meios de Contato disponiveis</Text>
        <View style={styles.contentSup}>
          <Image style={styles.imageSup} source={require('../../assets/sup.png')} />
          <View>
            <Text style={styles.telAndEmail}>Tel: (ddd)xxxxx-xxxx</Text>
            <Text style={styles.telAndEmail}>E-mail: exemplo@email.com</Text>
          </View>
        </View>
        </TouchableOpacity>
        
        {isOpen ? (
          <ChatBox  /> 
        ) : (
          <View style={styles.chatClosedContainer}> 
            <Text style={styles.textChat}>Nos envie sua mensagem através do Chat</Text>
            <Image style={styles.imageChat} source={require('../../assets/chat.png')} />
            <TouchableOpacity testID="button-chat" onPress={openModal} style={styles.chatButton}>
              <Text style={styles.chatButtonText}>Iniciar Chat</Text>
            </TouchableOpacity>      
          </View>
        )}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#f0f4f8',
    justifyContent: 'center',
    alignItems: 'center',
    width: 520,
    right: 18
  },
  viewContacts: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center', 
    padding: 30,
    backgroundColor: '#ffffff',
    borderRadius: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: -3 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 5,
    marginHorizontal: 20, 
  },
  titleViewContact: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#2c3e50',
    textAlign: 'center',
    marginBottom: 30,
    top: -50
  },
  contentSup: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: '#e8f0fe',
    padding: 20,
    borderRadius: 15,
    width: '100%',
    marginBottom: 30,
  },
  telAndEmail: {
    fontSize: 16,
    color: '#34495e',
    marginBottom: 5,
    marginLeft: 10,
    right:60, 
  },
  chatClosedContainer: {
    alignItems: 'center',
    marginTop: 20,
    top: 140
  },
  textChat: {
    fontSize: 20,
    fontWeight: '600',
    color: '#2c3e50',
    marginBottom: 20,
    textAlign: 'center',
  },
  imageSup: {
    width: 60,
    height: 60,
    marginRight: 20,
    left: 20
  },
  imageChat: {
    width: 70,
    height: 70,
    alignSelf: 'center',
  },
  chatButton: {
    backgroundColor: '#3498db',
    padding: 15,
    borderRadius: 25,
    alignItems: 'center',
    marginTop: 20,
  },
  chatButtonText: {
    color: '#ffffff',
    fontSize: 18,
    fontWeight: '600',
  },
});

