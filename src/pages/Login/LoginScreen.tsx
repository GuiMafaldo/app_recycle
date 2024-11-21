import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Pressable, 
  Alert, 
  StyleSheet 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import { useAuth } from '../../utils/Auth'; // Ajuste o caminho conforme necessário

export default function LoginRegisterScreen() {
  const navigation = useNavigation();
  const [formType, setFormType] = useState('initial'); // 'initial', 'login', ou 'register'
  const [hidden, setHidden] = useState(true);
  const [data, setData] = useState({
    user: '',
    email: '',
    pass: '',
    confirmPass: ''
  });
  const { login } = useAuth();

  const handleUserData = () => {
    if (formType === 'login') {
      if (data.user === 'admin' && data.pass === 'admin123') {
        login(); 
        navigation.navigate('HomeScreen' as never);
      } else {
        Alert.alert('Usuário ou senha incorretos');
      }
    } else if (formType === 'register') {
      if (data.pass !== data.confirmPass) {
        Alert.alert('As senhas não coincidem');
      } else {
        // Aqui você implementaria a lógica real de cadastro
        Alert.alert('Cadastro realizado com sucesso!');
        setFormType('login');
      }
    }
  };

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  const renderForm = () => {
    if (formType === 'initial') {
      return (
        <View style={styles.buttonContainer}>
          <TouchableOpacity onPress={() => setFormType('login')} style={styles.button}>
            <Text style={styles.buttonText}>Entrar</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setFormType('register')} style={styles.button}>
            <Text style={styles.buttonText}>Cadastre-se</Text>
          </TouchableOpacity>
        </View>
      );
    }

    if (formType === 'login') {
      return (
        <>
          <TextInput
            onChangeText={(text) => setData({ ...data, user: text })}
            value={data.user}
            placeholder='Usuário'
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              onChangeText={(text) => setData({ ...data, pass: text })}
              value={data.pass}
              placeholder='Senha'
              style={styles.input}
              secureTextEntry={hidden}
            />
            <Pressable testID='toggle-visible' style={styles.eyeIcon} onPress={toggleHidden}> 
              <MaterialCommunityIcons 
                name={hidden ? 'eye-off' : 'eye'}
                size={24}
                color='grey'
              />
            </Pressable>
          </View>
          <TouchableOpacity onPress={handleUserData} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Entrar</Text>
          </TouchableOpacity>
        </>
      );
    }

    if (formType === 'register') {
      return (
        <>
          <TextInput
            onChangeText={(text) => setData({ ...data, email: text })}
            value={data.email}
            placeholder='Email'
            style={styles.input}
            keyboardType="email-address"
          />
          <TextInput
            onChangeText={(text) => setData({ ...data, user: text })}
            value={data.user}
            placeholder='Usuário'
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              onChangeText={(text) => setData({ ...data, pass: text })}
              value={data.pass}
              placeholder='Senha'
              style={styles.input}
              secureTextEntry={hidden}
            />
            <Pressable testID='toggle-visible' style={styles.eyeIcon} onPress={toggleHidden}> 
              <MaterialCommunityIcons 
                name={hidden ? 'eye-off' : 'eye'}
                size={24}
                color='grey'
              />
            </Pressable>
          </View>
          <View style={styles.passwordContainer}>
            <TextInput
              onChangeText={(text) => setData({ ...data, confirmPass: text })}
              value={data.confirmPass}
              placeholder='Confirmar Senha'
              style={styles.input}
              secureTextEntry={hidden}
            />
            <Pressable testID='toggle-visible' style={styles.eyeIcon} onPress={toggleHidden}> 
                <MaterialCommunityIcons 
                  name={hidden ? 'eye-off' : 'eye'}
                  size={24}
                  color='grey'
                />
              </Pressable>
          </View>
          <TouchableOpacity onPress={handleUserData} style={styles.submitButton}>
            <Text style={styles.submitButtonText}>Cadastrar</Text>
          </TouchableOpacity>
        </>
      );
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.content}>
        <Image style={styles.logo} source={require('../../assets/logo2.png')} />
        {renderForm()}
        {formType !== 'initial' && (
          <TouchableOpacity onPress={() => setFormType('initial')} style={styles.backButton}>
            <Text style={styles.backButtonText}>Voltar</Text>
          </TouchableOpacity>
        )}
        <View style={styles.socialIcons}>
          <Image source={require('../../assets/google.png')} style={styles.icon} />
          <Image source={require('../../assets/linkedin.png')} style={styles.icon} />
          <Image source={require('../../assets/git.png')} style={styles.icon} />
        </View>
      </View>
      <View style={styles.footer}>
        <Text style={styles.footerText}>Recycle.me, Todos os direitos reservados © 2024</Text>
        <Text style={styles.footerText}>Desenvolvido por: Guilherme Mafaldo</Text>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5fdf6',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 30,
  },
  buttonContainer: {
    width: '60%',
    marginBottom: 20,
  },
  button: {
    backgroundColor: '#4CAF50',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  buttonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  input: {
    width: '100%',
    borderWidth: 1,
    borderColor: '#ddd',
    padding: 15,
    borderRadius: 5,
    marginBottom: 10,
  },
  passwordContainer: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 0,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  submitButton: {
    backgroundColor: '#4caf50',
    padding: 15,
    borderRadius: 5,
    width: '60%',
    marginTop: 10,
  },
  submitButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
  backButton: {
    marginTop: 10,
  },
  backButtonText: {
    color: '#2196F3',
    textAlign: 'center',
  },
  socialIcons: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  icon: {
    width: 40,
    height: 40,
    marginHorizontal: 10,
  },
  footer: {
    padding: 20,
    alignItems: 'center',
  },
  footerText: {
    color: '#666',
    fontSize: 12,
    textAlign: 'center',
  },
});

