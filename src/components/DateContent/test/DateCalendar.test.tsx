import React from 'react';
import { render, fireEvent, waitFor } from '@testing-library/react-native';
import DatePickerComponent from '../DateComponent'; 
import  MockButton from '../../../../__mocks__/mockButton';

jest.mock('react-native-modal-datetime-picker', () => {
    return ({ testID, isVisible, onConfirm, onCancel }) => {
        if (!isVisible) 
            return null;
        
        return (
            <div data-testid={testID}>
                <MockButton title="Confirm" onPress={() => onConfirm(new Date())} />
                <MockButton title="Cancel" onPress={() => onCancel()} />
            </div>
        );
    };
});

describe('DatePickerComponent', () => {
    it('Deve renderizar o componente DatePickerComponent corretamente', () => {
        const { getByText, getByTestId } = render(<DatePickerComponent />);
        expect(getByTestId('calendario')).toBeTruthy();
        expect(getByTestId('button-data')).toBeTruthy();
        expect(getByText('Escolha uma data')).toBeTruthy();
    });

    it('Deve testar o click do botao de abrir o calendario', async () => {
        const { getByTestId, getByText, queryByTestId } = render(<DatePickerComponent />);
       
        expect(getByText('Escolha uma data')).toBeTruthy();
        expect(queryByTestId ('date-picker-modal')).toBeNull();
        
        fireEvent.press(getByTestId('button-data'));
        
        expect(getByText('Confirm')).toBeTruthy()
        
        fireEvent.press(getByText('Confirm'));
        
        await waitFor(() => {
            expect(queryByTestId('date-picker-modal')).toBeNull();
        });
        
        expect(getByTestId('selected-date')).toBeTruthy();
    });
                    
                        //--------//

    it('Deve testar o cancelamento do botao de abrir o calendario', async () => {
        const { getByText, queryByTestId, getByTestId } = render(<DatePickerComponent />);
        
        expect(getByText('Escolha uma data')).toBeTruthy();

        fireEvent.press(getByTestId('button-data'));

        expect(getByText('Cancel')).toBeTruthy();
        
        fireEvent.press(getByText('Cancel'));
        
        await waitFor(() => {
            expect(queryByTestId('date-picker-modal')).toBeNull();
        });
    });
                    //--------//
        
        it('Deve atualizar a data selecionada quando o botão de confirmar for pressionado', async () => {
            const { getByText, getByTestId, queryByTestId } = render(<DatePickerComponent />);
            
            // Simula o clique no botão que abre o calendário
            fireEvent.press(getByText('Escolha uma data'));
            
            // Verifica se o calendário (modal) está visível após o clique
            expect(getByTestId('calendario')).toBeTruthy();
            
            fireEvent.press(getByText('Confirm'));
            
            // Garante que o elemento de data selecionada está presente mas vazio inicialmente
            waitFor(() => {
                const selectedDateElement = queryByTestId('selected-date');
                expect(selectedDateElement).toBeTruthy();
                expect(selectedDateElement.props.children).toBe('');  // Supondo que exiba uma string vazia inicialmente
            })
        });
});