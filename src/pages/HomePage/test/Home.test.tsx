import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import HomeScreen, { recycleTypes } from '../HomeScreen'; // Ajuste o caminho conforme necessário

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

describe('Deve testar todo o componente de HomeScreen', () => {

          // -----//
  it('Deve renderizar o título "Tipos de Reciclaveis"', () => {
    const { getByText } = render(<HomeScreen />);
    
    expect(getByText('Tipos de Reciclaveis')).toBeTruthy();
  });
             // -----//
  it('Deve verificar se todos os tipos de recicláveis estão sendo renderizados', () => {
    const { getByText } = render(<HomeScreen />);
    
    recycleTypes.forEach(type => {
      expect(getByText(type.type)).toBeTruthy();
    });
  });
                    //-----//
  it('Deve verificar se o numero de cards é igual ao número de tipos de recicláveis', () => {
    const { getAllByTestId } = render(<HomeScreen />);
    
    const cards = getAllByTestId('content-cards');
    expect(cards).toHaveLength(cards.length);
  });
            //-----//
  it('Deve simular um clique em um dos cartões e verificar se o componente RecycleCard é renderizado', () => {
    const { getByText } = render(<HomeScreen />);
    
    const firstCard = getByText(recycleTypes[0].type);
       
    fireEvent.press(firstCard);

    expect(firstCard).toBeTruthy()

  });
});