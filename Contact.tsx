import { useState } from "react";
import { SafeAreaView, View, Text,Image, StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function Contact(){
    const [chatOpen, setChatOpen] = useState('')

    return(
        <SafeAreaView style={styles.containerSafeArea}>
            <View style={styles.viewContacts}>
                <Text style={styles.titleViewContact}>Fale Conosco Atravez dos canais de comunicação</Text>
                <View style={styles.contentSup}>
                    <Image style={styles.imageSup} source={require('./assets/sup.png')}/>
                    <View>
                        <Text style={styles.telAndEmail}>Tel: (ddd)xxxxx-xxxx</Text>
                        <Text style={styles.telAndEmail}>E-mail: exemplo@email.com</Text>
                    </View>
                </View>
                <View>
                    <Text style={styles.textChat}>Nos envie sua mensagem atraves do Chat</Text>
                    <Image style={styles.imageChat}  source={require('./assets/chat.png')}/>
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        top: 0,
        alignItems: 'center',
        justifyContent: 'flex-start',
        borderWidth: 4,
        borderColor: '#8a817c',
        borderRadius: 2,
    },
    titleViewContact: {
        top: -220,
        fontSize: 22,
        fontWeight: '700'
    },
    viewContacts: {
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        top: 0,
        backgroundColor: '#bab3a8',
        width:480,
    },
    contentSup:{
        flex: 1,
        flexDirection: 'row',
        alignItems:'center',
        justifyContent: 'center',
        maxHeight: 100,
        width: 380
    },
    telAndEmail: {
        fontSize: 18,
        fontWeight: '600',
        top: -120
    },
    textChat: {
        top: 40,
        fontSize: 24,
        fontWeight: '700',
    },
    imageSup: {
        width: 80,
        height: 80,
        top: -120,
        marginRight: 20
    },
    imageChat: {
        width: 100,
        height: 100,
        top: 290,
        left: 320
    }
})