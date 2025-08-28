// src/AuthGuard.tsx
import React, { useEffect, useRef } from 'react';
import { useAuth } from './hooks/useAuth';

const INACTIVITY_TIMEOUT_MS = 10 * 60 * 1000;

interface AuthGuardProps {
    children: React.ReactNode;
}

export const AuthGuard: React.FC<AuthGuardProps> = ({ children }) => {
    const { user, signOut } = useAuth();
    const inactivityTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

    const resetTimer = () => {
        if (inactivityTimer.current) {
            clearTimeout(inactivityTimer.current);
        }
        inactivityTimer.current = setTimeout(() => {
            signOut();
            console.log('Sessão expirada por inatividade. Saindo...');
        }, INACTIVITY_TIMEOUT_MS);
    };

    useEffect(() => {
        if (user) {
            resetTimer();
            const activityEvents = ["mousemove", "keydown", "click", "scroll", "input"];
            activityEvents.forEach(event => {
                document.addEventListener(event, resetTimer);
            });

            return () => {
                activityEvents.forEach(event => {
                    document.removeEventListener(event, resetTimer);
                });
                if (inactivityTimer.current) {
                    clearTimeout(inactivityTimer.current);
                }
            };
        } else {
            // Se o usuário não está logado, use o redirecionamento
            window.location.href = '/';
        }
    }, [user, signOut]);

    // Retorna os filhos APENAS se o usuário estiver autenticado
    if (user) {
        return <>{children}</>;
    }

    // Retorne null enquanto o carregamento ou redirecionamento acontece
    return null;
};