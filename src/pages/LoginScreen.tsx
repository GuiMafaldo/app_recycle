import React, { useState } from 'react';
import { StyleSheet, Text, View, Image, SafeAreaView, TextInput, TouchableOpacity, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useAuth } from '../utils/Auth';
import HomeScreen from './HomeScreen';

export default function LoginScreen({ navigation }: any) {
  const [hidden, setHidden] = useState(false);
  const [data, setData] = useState({
    user: '',
    pass: ''
  });
  const { login } = useAuth();

  const handleUserData = () => {
    
    if (data.user === 'admin' && data.pass === 'admin123') {
      login(); 
      // navigation.navigate('HomeScreen');
      return <HomeScreen />
    } else {
      alert('Usuário ou senha incorretos');
    }
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  return (
    <SafeAreaView style={styles.containerSafeArea}>
      <StatusBar style="auto" />
      <View style={styles.containerViewInitialPage}>
        <View style={styles.contentViewInputs}>
          <Image style={styles.logoInitialPage} source={require('../../assets/logo2.png')} />
          <View style={styles.titleViewText}>
            <Text style={styles.titleEnterYourAccount}>Entre com sua Conta</Text>
          </View>
          <View>
            <TextInput
              onChangeText={(text) => setData({ ...data, user: text })}
              value={data.user}
              placeholder='Usuario'
              style={styles.inputs}
            />
            <View>
              <TextInput
                onChangeText={(text) => setData({ ...data, pass: text })}
                value={data.pass}
                placeholder='Senha'
                style={styles.inputs}
                secureTextEntry={!hidden}
              />
              <Pressable style={styles.clickHidden} onPress={toggleHidden}>
                <MaterialCommunityIcons
                  name={hidden ? 'eye' : 'eye-off'}
                  size={20}
                  color={'grey'}
                />
              </Pressable>
            </View>
          </View>
          <View style={styles.submitView}>
            <TouchableOpacity onPress={handleUserData} style={styles.touchableSubmit}>
              <Text style={styles.textButtonSubmit}>Entrar</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.touchableNotSubmit}>
              <Text style={styles.textButtonNotSubmit}>Não tem conta? 
                <Text style={styles.spanButtonNotSubmit}> Cadastre-se</Text>
              </Text>
            </TouchableOpacity>
            <View style={styles.iconsContentView}>
              <Image source={require('../../assets/google.png')} style={styles.iconsClick} />
              <Image source={require('../../assets/linkedin.png')} style={styles.iconsClick} />
              <Image source={require('../../assets/git.png')} style={styles.iconsClick} />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.viewFooter}>
        <Text style={styles.textFooter}>Recycle.me, Todos os direitos reservados &copy; 2024</Text>
        <Text style={styles.textFooter}>Desenvolvido por: Guilherme Mafaldo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerSafeArea: {
    flex: 1,
    backgroundColor: '#006836',
    alignItems: 'center',
    justifyContent: 'center',
  },
  // title  enter your account
  titleViewText: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    top: 160,
    left: 10,
    height: 10,
    
  },
  titleEnterYourAccount: {
    fontSize: 32,
    fontFamily: 'Roboto',
    fontWeight: 'bold',
    marginBottom: 20,
    marginTop: 0,
    color: '#000',
    position: 'absolute',
    top: 30, 
  },
  // initial page
  containerViewInitialPage: {
    flex: 1,
    width: '100%',
    maxHeight: '100%',
    padding:20,
    backgroundColor: '#006836',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 100,
  },
  logoInitialPage: {
    width: 120,
    height: 120,
    marginBottom: 20,
    top: -110
  },
  // content inputs e buttons
  contentViewInputs: {
    flex: 1,
    flexDirection: 'column',
    width: 400,
    height: 600,
    padding:12,
    backgroundColor: '#f6fdf7',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'absolute',
    top: 0,
    borderWidth: 1,
    borderRadius: 8
  },
  inputs: {
    width: 300,
    height: 50,
    borderColor: 'gray',
    borderWidth: 1,
    marginTop: 10,
    paddingLeft: 10,
    borderRadius: 5,
    top: -40
  },
  clickHidden: {
    top: -75,
    left: 270
  },
  // content buttons
  submitView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: 300,
    maxHeight: 70,
    padding: 0,
    margin: 0,  
    top: -30  
  },
  touchableSubmit: {
    width: 120,
    height: 40,
    borderColor: '#fff',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: 'green',
    padding: 10,
    paddingLeft: 40,
    top: 0,
    left: 90
  },
  textButtonSubmit:{
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff'
  },
  // touchable not submit
  touchableNotSubmit:{
    width: 160,
    top: -45
  },
  textButtonNotSubmit:{
    fontSize: 14,
    fontWeight: 'bold',
    color: '#000'
  },
  spanButtonNotSubmit: {
    color: 'blue'
  },
  // icons login content
  iconsContentView: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    maxHeight: 60,
    gap: 20,
    position: 'absolute',
    top: 100,
    left: 100
  },
  iconsClick: {
    width: 35,
    height: 35,
    borderWidth: 1,
    borderColor: 'gray',
    borderRadius: 5
  },
  viewFooter: {
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    position: 'absolute',
    bottom: 70,
  },
  textFooter: {
    fontSize:14,
    color: '#fff',
    fontWeight: 'bold'
  }
});