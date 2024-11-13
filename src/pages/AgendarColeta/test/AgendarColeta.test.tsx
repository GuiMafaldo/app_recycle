import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import AgendarColeta from '../AgendarColeta'


jest.mock('../../../../assets/lupa.png', () => 'mocked_image.png');

describe('testes para a agenda de coletas' , () => {
    // TEST DO FORMULARIO
    it('Deve renderizar um  formulario com 5 inputs', () => {
        const {getByPlaceholderText, getByText} = render(<AgendarColeta />)

        const title = getByText('Preencha o Formulário')
        const inputName = getByPlaceholderText('Nome')
        const inputEmail = getByPlaceholderText('Email')
        const inputCep = getByPlaceholderText('CEP')
        const inputNum = getByPlaceholderText('Número')

        expect(inputName).toBeTruthy()
        expect(inputEmail).toBeTruthy()
        expect(inputCep).toBeTruthy()
        expect(inputNum).toBeTruthy()
        expect(title).toBeTruthy()
    }),
    // TEST DO INPUT DE PESQUISAR MATERIAL
    it('Deve renderizar um input de pesquisar item e uma imagen de lupa', () => {
        const {getByPlaceholderText, getByTestId, getByText} =  render(<AgendarColeta />)

        const inputSearch = getByPlaceholderText('Nome do Material')
        const image = getByTestId('lupa-image')
        const title = getByText('Material')

        expect(inputSearch).toBeTruthy()
        expect(image).toBeTruthy()   
        expect(title).toBeTruthy() 
    }),
    it('Deve renderizar uma data picker "um Calendario pra selecionar data da coleta"',() => {
        const {getByText, getByTestId} = render(<AgendarColeta />)
        const datePicker = getByText('Escolha uma data')
        const text = getByText('Data Selecionada: 13/11/2024')
        const button = getByTestId('button-send-form')
        expect(datePicker).toBeTruthy() 
        expect(text).toBeTruthy()

        fireEvent.press(button)

        expect(getByText('Enviar')).toBeTruthy()

        expect(button).toBeTruthy()

    // fireEvent.press(getByText('Escolha uma data'))

    // expect(fireEvent.press('Escolha uma data')).toHaveBeenCalled()

    })
})