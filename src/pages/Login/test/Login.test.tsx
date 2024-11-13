import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react-native';
import { useAuth } from '../../../utils/Auth'; // Importando o hook de autenticação
import LoginScreen from '../../Login/LoginScreen';



// Mock do hook de autenticação
jest.mock('../../../utils/Auth', () => ({
  useAuth: jest.fn(),
}));

// Mock do Material Community Icons
jest.mock('react-native-vector-icons/MaterialCommunityIcons', () => {
  return {
    __esModule: true,
    default: () => {
      return null
    },
  };
});



// Mocks das imagens e logos
jest.mock('../../../../assets/logo2.png', () => 'mocked_image.png');
jest.mock('../../../../assets/google.png', () => 'mocked_google_image.png');
jest.mock('../../../../assets/linkedin.png', () => 'mocked_linkedin_image.png');
jest.mock('../../../../assets/git.png', () => 'mocked_git_image.png');

// Mock da handler de gesture
jest.mock('react-native-gesture-handler', () => ({
  GestureHandlerRootView: 'MockedGestureHandlerRootView',
  GestureHandlerButton: 'MockedGestureHandlerButton',
}));

// Mock da fonte Login
jest.mock('expo-font', () => {
  return {
    loadAsync: jest.fn(),
    isLoaded: jest.fn(() => true), // Simula que as fontes estão carregadas
  };
});
jest.mock('expo-constants', () => {
  return {
    manifest: {},
  };
});


// Mock do alert global
global.alert = jest.fn();

// Início do teste
describe('LoginScreen component', () => {
  const loginMock = jest.fn();

  beforeEach(() => {
    (useAuth as jest.Mock).mockReturnValue({ login: loginMock });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  // TEST PARA RENDERIZAR O PLACEHOLDER DOS INPUTS DO FORM
  it('renders correctly', () => {
    const { getByPlaceholderText, getByRole } = render(<LoginScreen navigation={{}} />);
    
    expect(getByPlaceholderText('Usuario')).toBeTruthy();
    expect(getByPlaceholderText('Senha')).toBeTruthy();
    expect(getByRole('button')).toBeTruthy();
  });

  //TEST PRA VERIFICAR SE O ALERT DE USUARIO OU SENHA ESTAO ERRADOS
  it('shows alert when login fails', () => {
    (useAuth as jest.Mock).mockReturnValue({
      login: jest.fn().mockImplementation(() => {
        throw new Error('Usuário ou senha incorretos');
      }),
    });

    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={{}} />);
    
    fireEvent.changeText(getByPlaceholderText('Usuario'), 'wrongUser ');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'wrongPass');
    fireEvent.press(getByText('Entrar'));

    expect(global.alert).toHaveBeenCalledWith('Usuário ou senha incorretos');
  });

  // TEST PARA VERIFICAR SI O USUARIO E SENHA ESTAO CORRETOS, MOCK USER E PASSWORD E O BOTAO
  it('calls login function when credentials are correct', () => {
    const { getByText, getByPlaceholderText } = render(<LoginScreen navigation={{}} />);
    
    fireEvent.changeText(getByPlaceholderText('Usuario'), 'admin');
    fireEvent.changeText(getByPlaceholderText('Senha'), 'admin123');
    fireEvent.press(getByText('Entrar'));

    expect(loginMock).toHaveBeenCalled()
  });

  // TESTE PARA VERIFICAR SI O HIDDEN ESTA FUNCIONANDO CORRETAMENTE
  it('toggles password visibility', () => {
    const { getByTestId, getByPlaceholderText } = render(<LoginScreen navigation={{}} />);
    
    const passwordInput = getByPlaceholderText('Senha');
    const toggleButton = getByTestId('toogle-visible');

    expect(passwordInput.props.secureTextEntry).toBeTruthy();

    fireEvent.press(toggleButton);

    expect(passwordInput.props.secureTextEntry).toBeFalsy();
  })
  // TEST PARA VERIFICAR SI O RODA PE ESTA RENDERIZANDO OS TEXTOS CORRETAMENTE
  it('show render text of copy and developer', () => {
    const { getByText, getByTestId } = render(<LoginScreen navigation={{}} />)

    const text = getByTestId('copy-text')
    const dev = getByText('Desenvolvido por: Guilherme Mafaldo')

    expect(text).toBeTruthy()
    expect(dev).toBeTruthy()
  })
})


