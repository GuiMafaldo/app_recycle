import React, { useState } from 'react';

import Config from 'react-native-config';

import { service, template, userId } from '../../variaveis/variaveis'

import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput, Alert } from 'react-native';
import DatePickerComponent from '../../components/DateContent/DateComponent';
import emailjs from 'emailjs-com';
import { StatusBar } from 'expo-status-bar';

export default function AgendarColeta() {
    const [nome, setNome] = useState<string>('')
    const [email, setEmail] = useState<string>('')
    const [cep, setCep] = useState<string>('')
    const [numero, setNumero] = useState<string>('')
    const [material, setMaterial] = useState<string>('')
    const [data, setData] = useState<Date | null>(null)
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const validateForm = () => {
        if (!nome || !email || !cep || !numero || !material || !data) {
            Alert.alert('Erro', 'Por favor, preencha todos os campos');
            return false;
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            Alert.alert('Erro', 'Por favor, insira um email válido');
            return false;
        }
        return true;
    }

    const handleFormSubmit = async () => {
        if (!validateForm()) return;

        setIsLoading(true);
        const templateParams = {
            nome: nome,
            email: email,
            cep: cep,
            numero: numero,
            material: material,
            data: data ? data.toLocaleDateString() : 'Não selecionada',
            to_email: '03.09gui.mafaldo@gmail.com'
        };
    
        try {
            const response = await emailjs.send(
                service,
                template,
                templateParams,
                userId,
            );
            
            console.log('E-mail enviado com sucesso:', response);
            Alert.alert('Sucesso', 'Sua solicitação de coleta foi enviada com sucesso!');
            // Limpar o formulário após o envio bem-sucedido
            setNome('');
            setEmail('');
            setCep('');
            setNumero('');
            setMaterial('');
            setData(null);
        } catch (error) {
            console.error('Erro ao enviar e-mail:', error)
            Alert.alert('Erro', 'Houve um problema ao enviar sua solicitação. Por favor, tente novamente mais tarde.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <StatusBar style="auto" />
            <View style={styles.headerComponent}>
                <Text style={styles.headerTitle}>Formulário de Agendamento de Coleta</Text>
            </View>
            <View style={styles.viewFormContainer}>
                <Text style={styles.titleFormContainer}>Preencha o Formulário</Text>
                <View style={styles.viewFormContent}>
                    <TextInput
                        value={nome}
                        onChangeText={setNome}
                        placeholder='Nome' 
                        placeholderTextColor="#555" 
                        style={styles.inputForm} 
                    />
                    <TextInput 
                        value={email}
                        onChangeText={setEmail}
                        placeholder='Email' 
                        placeholderTextColor="#555"
                        style={styles.inputForm} 
                        keyboardType="email-address"
                    />
                    <View style={styles.rowInputs}>
                        <TextInput 
                            value={cep}
                            onChangeText={setCep}
                            placeholder='CEP' 
                            placeholderTextColor="#555"
                            style={[styles.inputForm, styles.inputCep]} 
                            keyboardType="numeric"
                        />
                        <TextInput 
                            value={numero}
                            onChangeText={setNumero}
                            placeholder='Número' 
                            placeholderTextColor="#555"
                            style={[styles.inputForm, styles.inputNum]} 
                            keyboardType="numeric"
                        />
                    </View>
                </View>
                <View style={styles.viewColetaItems}>
                    <Text style={styles.titleViewColeta}>Material</Text>
                    <View style={styles.viewContentInputImg}>
                        <TextInput 
                            value={material}
                            onChangeText={setMaterial}
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
                <TouchableOpacity 
                    style={[styles.buttonSendInfos, isLoading && styles.buttonDisabled]} 
                    testID='button-send-form' 
                    onPress={handleFormSubmit}
                    disabled={isLoading}
                > 
                    <Text style={styles.textButtonSend}>{isLoading ? 'Enviando...' : 'Enviar'}</Text>
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
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor:'#f5f5f5',
        width: '100%',
        padding: 20,
        marginBottom: 20,
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: '700',
        color: '#333',
        textAlign: 'center',
    },
    viewFormContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 20,
        width: '100%',
        maxWidth: 450,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 5,
    },
    titleFormContainer: {
        fontSize: 20,
        fontWeight: '700',
        color: '#333',
        marginBottom: 20,
        textAlign: 'center',
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
    rowInputs: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    inputCep: {
        width: '60%',
    },
    inputNum: {
        width: '35%',
    },
    viewColetaItems: {
        marginBottom: 20,
    },
    titleViewColeta: {
        fontSize: 18,
        fontWeight: '700',
        color: '#333',
        marginBottom: 8,
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
    },
    imageSearch: {
        width: 20,
        height: 20,
        tintColor: '#888',
        marginLeft: -10,
        right:20
    },
    viewDate: {
        marginBottom: 20,
        padding: 20,
        borderRadius: 10,
        backgroundColor: '#f1f1f1',
        alignItems: 'center',
    },
    buttonSendInfos: {
        backgroundColor: '#3a94ff',
        borderRadius: 10,
        paddingVertical: 12,
        alignItems: 'center',
    },
    buttonDisabled: {
        backgroundColor: '#cccccc',
    },
    textButtonSend: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 18,
    },
});