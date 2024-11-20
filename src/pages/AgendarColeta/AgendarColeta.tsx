import React from 'react';
import { useState } from  'react'
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import DatePickerComponent from '../../components/DateContent/DateComponent';
import emailjs from 'emailjs-com';

export default function AgendarColeta() {
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cep, setCep] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [material, setMaterial] = useState<string>('')
    const [data, setData] = useState(null)

      
    // Função para enviar o formulário  
    const handleFormSubmit = () => {
        const templateParams = {
            nome: nome,
            email: email,
            cep: cep,
            numero: numero,
            material: material,
            data: data ? data.toString() : 'Não selecionada',  // Formatação de data
            to_email: 'bicodacorujazl@gmail.com'  // O e-mail para onde será enviado
        };
    
        emailjs.send(
            'service_l526sbg',  // O seu ID de serviço
            'template_7hb4dvr',  // O ID do template
            templateParams,  // Os parâmetros do template
            'Sj03SkwQcG--LG4pT'  // Sua chave pública (public key)
        ).then(response => {
            console.log('E-mail enviado com sucesso:', response);
        }).catch(error => {
            console.error('Erro ao enviar e-mail:', error);
        });
    };

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <View style={styles.headerComponent}>
                <Text style={styles.headerTitle}>Formulario de Agendamento de Coleta</Text>
            </View>
            <View>
                <Text style={styles.titleFormContainer}>Preencha o Formulário</Text>
            </View>
            <View style={styles.viewFormContainer}>
                <View style={styles.viewFormContent}>
                    <TextInput
                        value={nome}
                        onChangeText={(text) => setNome(text)}
                        placeholder='Nome' 
                        placeholderTextColor="#555" 
                        style={styles.inputForm} 
                    />
                    <TextInput 
                        value={email}
                        onChangeText={(text) => setEmail(text)}
                        placeholder='Email' 
                        placeholderTextColor="#555"
                        style={styles.inputForm} 
                    />
                    <TextInput 
                        value={cep}
                        onChangeText={(text) => setCep(text)}
                        placeholder='CEP' 
                        placeholderTextColor="#555"
                        style={styles.inputCep} 
                    />
                    <TextInput 
                        value={numero}
                        onChangeText={(text) => setNumero(text)}
                        placeholder='Número' 
                        placeholderTextColor="#555"
                        style={styles.inputNum} 
                    />
                </View>
                <View style={styles.viewColetaItems}>
                    <Text style={styles.titleViewColeta}>Material</Text>
                    <View style={styles.viewContentInputImg}>
                        <TextInput 
                            value={material}
                            onChangeText={(text) => setMaterial(text)}
                            placeholder='Nome do Material' 
                            placeholderTextColor="#555"
                            style={styles.inputColeta} 
                        />
                        <Image testID='lupa-image' style={styles.imageSearch} source={require('../../assets/lupa.png')} />
                    </View>
                </View>
                <View style={styles.viewDate}>
                    <DatePickerComponent 
                        value={data}
                       onDateSelect={setData}
                    />
                </View>
                <TouchableOpacity style={styles.buttonSendInfos} testID='button-send-form' onPress={handleFormSubmit}> 
                    <Text style={styles.textButtonSend}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    headerComponent: {
        flex: 1,
        top: -82,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f5f5f5',
        maxHeight:100,
        width:485,
        padding:20,
        elevation: 5,
    },

    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    titleFormContainer: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
    },
    viewFormContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        paddingVertical: 20,
        paddingHorizontal: 25,
        width: '100%',
        maxWidth: 450,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    viewFormContent: {
        marginBottom: 15,
    },
    inputForm: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16,
        color: '#333',
    },
    inputCep: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        marginBottom: 10,
        fontSize: 16,
        width: '60%',
    },
    inputNum: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        fontSize: 16,
        width: '30%',
        height: 42,
        alignSelf: 'flex-end',
        marginBottom: 10,
        top: -52
    },
    viewColetaItems: {
        marginBottom: 20,
    },
    titleViewColeta: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
        left: 20
    },
    viewContentInputImg: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    inputColeta: {
        backgroundColor: '#f1f1f1',
        borderRadius: 10,
        paddingVertical: 12,
        paddingHorizontal: 15,
        flex: 1,
        fontSize: 16,
        color: '#333',
        marginRight: 10,
        left: 15
    },
    imageSearch: {
        width: 20,
        height: 20,
        tintColor: '#888',
        right:30
    },
    viewDate: {
        marginBottom: 20,
        padding: 40,
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
        width: '100%',
        height: 200,
        alignItems: 'center',  
    },
    buttonSendInfos: {
        backgroundColor: '#3a94ff',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    textButtonSend: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
});
