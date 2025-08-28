// src/Logout.tsx
import React, { useEffect } from 'react';
import { useAuth } from './hooks/useAuth';

export const Logout: React.FC = () => {
    const { signOut } = useAuth();

    useEffect(() => {
        signOut();
    }, [signOut]);

    return (
        <div>
            <p>Saindo...</p>
        </div>
    );
};