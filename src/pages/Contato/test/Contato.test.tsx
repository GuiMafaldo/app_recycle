import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import Contact from '../Contact'

describe('Deve testar todo o componente de Contato', () =>{

            // -----//
    it('Deve verificar si o body do componente contem o titulo Fale Conosco', () => {
        const {getByText} = render(<Contact />)
        const title = getByText('Fale Conosco')

        expect(title).toBeTruthy()
    })
                // -----//
    it('Deve verificar se o componente contem uma imagem e os meios de contato disponiveis', () => {
        const { getByText} = render(<Contact />)

        const textEmail = getByText('E-mail: exemplo@email.com')
        const textTel = getByText('Tel: (ddd)xxxxx-xxxx')
        const imageSup = jest.mock('../../../../assets/sup.png', () => 'mocked_image.png')
        
    
        expect(textEmail).toBeTruthy()
        expect(textTel).toBeTruthy()
        expect(imageSup).toBeTruthy()
          
    })
                //-----//
    it('Deve verificar se o componente possui um texto referente ao chat e si possui uma imagem e um botao iniciar chat', () => {
        const {getByText, getByTestId} = render(<Contact />)
        
        const imageChat = jest.mock('../../../../assets/chat.png', () => 'mocked_image.png')
        const textChat = getByText('Nos  envie sua mensagem através do Chat')
        
        
        expect(getByTestId('button-chat')).toBeTruthy()
        fireEvent.press(getByTestId('button-chat'))

        const chatComponent = getByTestId('chat-box')

        expect(chatComponent).toBeTruthy()
        expect(textChat).toBeTruthy()
        expect(imageChat).toBeTruthy() 
    })
})