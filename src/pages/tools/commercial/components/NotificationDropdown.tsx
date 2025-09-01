import React, { useState, useEffect } from 'react';
import { db } from '../../../firebase-init';

const NotificationDropdown = ({ onOpenEstablishment }) => {
    const [notifications, setNotifications] = useState([]);
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const verificarNotificacoes = async () => {
            // Toda a sua lógica de `verificarNotificacoes` do arquivo .js vai aqui
            const novasNotificacoes = [];
            // ... (implementação da sua lógica de verificação de alvará e guia de tráfego)
            
            setNotifications(novasNotificacoes);
        };

        verificarNotificacoes();
        // Você pode adicionar um `setInterval` aqui para verificar as notificações periodicamente se necessário
    }, []);

    const markAsRead = (index) => {
        const updatedNotifications = notifications.filter((_, i) => i !== index);
        setNotifications(updatedNotifications);
    };

    const handleItemClick = (notif) => {
        onOpenEstablishment(notif.estabelecimentoId);
        setIsOpen(false);
    };

    return (
        <div className="notification-icon" onClick={() => setIsOpen(!isOpen)}>
            <i className='bx bxs-bell'></i>
            {notifications.length > 0 && (
                <span className="notification-count">{notifications.length}</span>
            )}
            
            {isOpen && (
                <div className="notification-dropdown active">
                    <div className="notification-title"><h4>Notificações</h4></div>
                    {notifications.length === 0 ? (
                        <p className="no-notifications">Nenhuma notificação</p>
                    ) : (
                        notifications.map((notif, index) => (
                            <div key={index} className="notification-item" onClick={() => handleItemClick(notif)}>
                                <span>{notif.message}</span>
                                <button className="mark-as-read-btn" onClick={(e) => { e.stopPropagation(); markAsRead(index); }}>Lido</button>
                            </div>
                        ))
                    )}
                </div>
            )}
        </div>
    );
};

export default NotificationDropdown;