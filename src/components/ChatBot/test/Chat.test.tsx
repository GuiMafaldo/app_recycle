import React from 'react'
import {render, fireEvent, waitFor} from '@testing-library/react-native'
import ChatBox from '../Chatbox'

jest.mock('../../../../assets/wallpapper.webp', () => 'mocked_image.png');

describe('Deve testar todo o componente do chat', () => {

    it('Deve renderizar e testar as funcionalidades do chat', () => {
        const {getByPlaceholderText, getByText, getByTestId} = render(<ChatBox />)

        const image = getByTestId('wallpapper')
        const text = getByText('Bem-vindo ao nosso Chat')
        const close = getByText('X')

        expect(image).toBeTruthy()
        expect(text).toBeTruthy()
        expect(close).toBeTruthy()

        fireEvent.press(close)

        expect(close).toBeTruthy()
    })

            // -----//
    it('Deve testar o fluxo de mensagens do chat', async () => {
        const { getByPlaceholderText, getByRole, getByText, getByTestId } = render(<ChatBox />);
    
        // Verifica se o campo de entrada de texto está presente
        const input = getByPlaceholderText('Digite sua mensagem');
        expect(input).toBeTruthy();
    
        // Simula a digitação de uma mensagem
        fireEvent.changeText(input, 'Ola');
        
        // Simula o envio da mensagem
        const sendButton = getByRole('button'); // Assuming the TouchableOpacity is the first button
        fireEvent.press(sendButton);
    
        // Verifica se a mensagem do usuário foi adicionada
        expect(getByText('Ola')).toBeTruthy();
    
        // Espera pela resposta do bot
        await waitFor(() => {
          expect(getByText('Ola')).toBeTruthy();
        });
      });

                //-----//
      it('Deve testar o envio de mensagens vazias', () => {
        const { getByPlaceholderText, getByText, getByRole } = render(<ChatBox />);
    
        const input = getByPlaceholderText('Digite sua mensagem');
        const sendButton = getByRole('button');


        expect(input).toBeTruthy();
        expect(sendButton).toBeTruthy();
        // Simula o envio de uma mensagem vazia
        fireEvent.press(sendButton);
    
        // Verifica que não há mensagens na tela
        expect(() => getByText('Bot:')).toThrow();
      });
})