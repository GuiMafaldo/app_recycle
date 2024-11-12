import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import DatePickerComponent from '../components/DateComponent';

export default function AgendarColeta() {
    return (
        <SafeAreaView style={styles.containerSafeArea}>
            <View>
                <Text style={styles.titleTopContainer}>Preencha o Formulário</Text>
            </View>
            <View style={styles.viewFormContainer}>
                <View style={styles.viewFormContent}>
                    <TextInput style={styles.inputForm} placeholder='Nome' placeholderTextColor="#555"/>
                    <TextInput style={styles.inputForm} placeholder='Email' placeholderTextColor="#555"/>
                    <TextInput style={styles.inputCep} placeholder='CEP' placeholderTextColor="#555"/>
                    <TextInput style={styles.inputNum} placeholder='Número' placeholderTextColor="#555"/>
                </View>
                <View style={styles.viewColetaItems}>
                    <Text style={styles.titleViewColeta}>Material</Text>
                    <View style={styles.viewContentInputImg}>
                        <TextInput style={styles.inputColeta} placeholder='Nome do Material' placeholderTextColor="#555"/>
                        <Image style={styles.imageSearch} source={require('../../assets/lupa.png')} />
                    </View>
                </View>
                <View style={styles.viewDate}>
                    <DatePickerComponent />
                </View>
                <TouchableOpacity style={styles.buttonSendInfos}> 
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
    titleTopContainer: {
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
        alignSelf: 'flex-end',
        marginBottom: 10,
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
