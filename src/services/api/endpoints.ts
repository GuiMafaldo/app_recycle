import React, { useEffect, useState } from 'react'
import { baseUrl } from './conection'

export const handleUserCredentials = async (email: string, password: string) => {
    try {
        const response = await fetch(`${baseUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password })
        })
        if (!response.ok) {
            throw new Error('Erro na autenticação');
        }
        return response.json();

    } catch (err) {
        console.log('Erro ao autenticar:', err);
        throw err;
    }
};

export const registerUser = async (name: string, email: string, password: string) => {
    try {
        const response = await fetch(`${baseUrl}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ name, email, password })
        });

        if (!response.ok) {
            const { message } = await response.json();
            throw new Error(message || 'Erro ao cadastrar o usuario');
        }

        return response.json();

    } catch (err) {
        console.error('Erro inesperado ao cadastrar o usuario, tente novamente!');
        throw err;  // Lança o erro para ser tratado no frontend
    }
};

