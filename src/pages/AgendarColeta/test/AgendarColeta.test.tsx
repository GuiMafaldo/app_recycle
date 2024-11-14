import React from 'react'
import {render, fireEvent} from '@testing-library/react-native'
import AgendarColeta from '../AgendarColeta'
import DatePickerComponent from '../../../components/DateContent/DateComponent';

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

    // TEST PRA VERIFICAR SI O PICKER CALENDARIO E O BOTAO DE ENVIAR ESTAO FUNCIONANDO
    it('Deve renderizar uma data picker "um Calendario pra selecionar data da coleta"',() => {
        const {getByText} = render(<AgendarColeta />)
        const {getByRole} = render(<DatePickerComponent />)

        expect(getByRole('button')).toBeTruthy()
       
        expect(getByText('Escolha uma data')).toBeTruthy()

        expect(fireEvent.press('button-data'))

       fireEvent.press('button-send-form')

        expect(getByText('Enviar')).toBeTruthy()

    })
})