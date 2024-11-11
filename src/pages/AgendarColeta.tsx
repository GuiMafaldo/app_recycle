import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, Image, TouchableOpacity, TextInput } from 'react-native';
import DatePickerComponent from '../components/DateComponent';

export default function AgendarColeta() {
    return(
        <SafeAreaView style={styles.containerSafeArea}>
            <View>
                <Text style={styles.titleTopContainer}>Preencha o Formulario Abaixo</Text>
            </View>
            <View style={styles.viewFormContainer}>
                <View style={styles.viewFormContent}>
                    <TextInput style={styles.inputForm} placeholder='Digite seu Nome'/>
                    <TextInput style={styles.inputForm} placeholder='Digite seu Email'/>
                    <TextInput style={styles.inputCep} placeholder='Digite o CEP'/>
                    <TextInput style={styles.inputNum} placeholder='Numero'/>
                </View>
                <View style={styles.viewColetaItems}>
                    <Text style={styles.titleViewColeta}>Tipo de Material</Text>
                    <View style={styles.viewContentInputImg}>
                        <TextInput style={styles.inputColeta} placeholder='Digite o Nome do Material '/>
                        <Image style={styles.imageSearch} source={require('../../assets/lupa.png')} />
                    </View>
                </View>
                <View style={styles.viewDate}>
                    <DatePickerComponent/>
                </View>
                <TouchableOpacity style={styles.buttonSendInfos}> 
                    <Text style={styles.textButtonSend}>Enviar {'>'}</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )    
}

const styles = StyleSheet.create({
    containerSafeArea: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        top: 0,
    },
    titleTopContainer: {
        fontSize: 28,
        fontWeight: '700',
        top: 40
    },
    // PARTE DE CIMA DO FORMULARIO
    viewFormContainer: {
        flex: 1,
        alignItems:'center',
        justifyContent:'center',
        top:50,
        width: 460,
        maxHeight: 700,
        borderWidth:1,
        borderRadius: 8,
    },
    viewFormContent: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'flex-start',
        maxHeight: 300,
        gap: 16,
        top: -120,
        position:'relative'
    },
    inputForm: {
        width: 400,
        padding: 8,
        borderWidth:1,
        borderRadius: 5
    },
    inputCep: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        width: 250,
        maxHeight: 40,
        padding: 8,
        left: -75,
        borderWidth:1,
        borderRadius: 5
    },
    inputNum: {
        width: 90,
        maxHeight:40,
        padding: 8,
        borderWidth:1,
        borderRadius: 5,
        top: -56,
        left: 150

    },
    // PARTE DE BAIXO ''''

    viewColetaItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        position: 'absolute',
    },
    titleViewColeta: {
        fontSize: 28,
        fontWeight: '700',
        top: -60
    },
    viewContentInputImg:{
        flex: 1,
        alignItems: 'center',
        justifyContent:'center',
        top: -30
    },
    inputColeta: {
        padding: 8,
        width: 300,
        borderWidth:1,
        borderRadius: 5,
        position: 'relative',
    },
    imageSearch: {
        position: 'absolute',
        right:10,
        height: 20,
        width: 20,
        borderWidth:1,
    },

    // AREA DA SELEÇAO DA DATA
    viewDate: {
        top: 30,
        position: 'relative',
        borderWidth: 1,
        padding:10,
        borderRadius: 8
    },
    buttonSendInfos: {
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10,
        width: 80,
        backgroundColor: '#3a94ff',
        position: 'absolute', 
        bottom: 30, 
        borderRadius: 8
    },
    textButtonSend: {
        color: '#fff',
        fontWeight: '700',
        fontSize: 16
    }
})
