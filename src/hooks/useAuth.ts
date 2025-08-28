// src/hooks/useAuth.ts
import { useState, useEffect } from 'react';
import { firebase } from '../firebase-init';

export function useAuth() {
    const [user, setUser] = useState<firebase.User | null>(null);

    useEffect(() => {
        const unsubscribe = firebase.auth().onAuthStateChanged((user: firebase.User | null) => {
            setUser(user);
        });

        return () => unsubscribe();
    }, []);

    const login = async (email: string, password: string) => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password);
        } catch (error: any) {
            console.error('Erro no login:', error);
            throw error;
        }
    };

    const register = async (email: string, password: string) => {
        try {
            await firebase.auth().createUserWithEmailAndPassword(email, password);
        } catch (error: any) {
            console.error('Erro no registro:', error);
            throw error;
        }
    };

    const recoverPassword = async (email: string) => {
        try {
            await firebase.auth().sendPasswordResetEmail(email);
            alert('Email de recuperação enviado com sucesso.');
        } catch (error: any) {
            alert('Erro ao enviar email de recuperação, verifique o email informado.');
            throw error;
        }
    };

    const signOut = async () => {
        try {
            await firebase.auth().signOut();
        } catch (error: any) {
            console.error('Erro ao fazer logout:', error);
            throw error;
        }
    };

    return { user, login, register, recoverPassword, signOut };
}