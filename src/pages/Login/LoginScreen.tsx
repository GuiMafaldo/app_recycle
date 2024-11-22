import React, { useState } from 'react';
import { 
  SafeAreaView, 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  Image, 
  Pressable, 
  StyleSheet 
} from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { handleUserCredentials, registerUser } from '../../services/api/endpoints';

export default function LoginRegisterScreen() {
  const [formType, setFormType] = useState<'initial' | 'login' | 'register'>('initial');
  const [hidden, setHidden] = useState(true);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const toggleHidden = () => {
    setHidden(!hidden);
  };

  const handleUserData = async () => {
    if (!email.trim() || !password.trim()) {
      setError('Preencha todos os campos!');
      return;
    }

    try {
      const result = await handleUserCredentials(email, password);
      setMessage(`Autenticado com sucesso! Token: ${result.token}`);
      setError('');
    } catch (err) {
      setError('Usuário ou senha incorretos, tente novamente!');
    }
  };

  const handleRegisterData = async () => {
    if (!name.trim() || !email.trim() || !password.trim() || !confirmPass.trim()) {
      setError('Preencha todos os campos!');
      return;
    }

    if (password !== confirmPass) {
      setError('As senhas não coincidem!');
      return;
    }

    try {
      await registerUser(name, email, password);
      setMessage('Cadastro realizado com sucesso!');
      setError('');
      setFormType('login'); // Opcional: redirecionar para login após cadastro
    } catch (err) {
      console.log('Err!', err);
      setError('Erro ao cadastrar o usuário, tente novamente!');
    }
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

    if (formType === 'login' || formType === 'register') {
      return (
        <>
          {formType === 'register' && (
            <TextInput
              onChangeText={setName}
              value={name}
              placeholder="Nome"
              style={styles.input}
            />
          )}
          <TextInput
            onChangeText={setEmail}
            value={email}
            placeholder="E-mail"
            style={styles.input}
          />
          <View style={styles.passwordContainer}>
            <TextInput
              onChangeText={setPassword}
              value={password}
              placeholder="Senha"
              style={styles.input}
              secureTextEntry={hidden}
            />
            <Pressable style={styles.eyeIcon} onPress={toggleHidden}>
              <MaterialCommunityIcons 
                name={hidden ? 'eye-off' : 'eye'} 
                size={24} 
                color="grey" 
              />
            </Pressable>
          </View>
          {formType === 'register' && (
            <View style={styles.passwordContainer}>
              <TextInput
                onChangeText={setConfirmPass}
                value={confirmPass}
                placeholder="Confirmar Senha"
                style={styles.input}
                secureTextEntry={hidden}
              />
              <Pressable style={styles.eyeIcon} onPress={toggleHidden}>
                <MaterialCommunityIcons 
                  name={hidden ? 'eye-off' : 'eye'} 
                  size={24} 
                  color="grey" 
                />
              </Pressable>
            </View>
          )}
          <TouchableOpacity 
            onPress={formType === 'login' ? handleUserData : handleRegisterData} 
            style={styles.submitButton}
          >
            <Text style={styles.submitButtonText}>
              {formType === 'login' ? 'Entrar' : 'Cadastrar'}
            </Text>
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
        {error && <Text style={styles.error}>{error}</Text>}
        {message && <Text style={styles.message}>{message}</Text>}
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
    marginBottom: 10,
  },
  eyeIcon: {
    position: 'absolute',
    right: 15,
  },
  submitButton: {
    backgroundColor: '#4CAF50',
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
  error: {
    color: 'red',
    marginTop: 10,
  },
  message: {
    color: 'green',
    marginTop: 10,
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
