import React, { useEffect, useRef } from 'react';
import styles from './NightShiftPage.module.css';
import plantaoNoturno from '../../../assets/image/plantao-noturno.jpg';

const NightShiftPage: React.FC = () => {
    const inputsRef = useRef<HTMLInputElement[]>([]);
    const textAreaRef = useRef<HTMLTextAreaElement | null>(null);
    const selectsRef = useRef<HTMLSelectElement[]>([]);

    const ajustarFonte = (el: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
        const maxFontSize = 16;
        const minFontSize = 8;
        const step = 0.5;
        let fontSize = maxFontSize;
        el.style.fontSize = fontSize + "px";

        while ((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && fontSize > minFontSize) {
            fontSize -= step;
            el.style.fontSize = fontSize + "px";
        }
    };

    useEffect(() => {
        inputsRef.current.forEach(input => {
            ajustarFonte(input);
            input.value = '';
        });

        selectsRef.current.forEach(select => ajustarFonte(select));

        if (textAreaRef.current) {
            ajustarFonte(textAreaRef.current);
            textAreaRef.current.value = '';
        }
    }, []);

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            <img src={plantaoNoturno} className={styles.formBackground} alt="Modelo de Plantão" />

            {/* Data + VTRs */}
            {['campoData', 'vtr1', 'vtr2', 'vtr3', 'vtr4', 'vtrGoc', 'vtrGpar', 'vtrRomu', 'vtrRomo1'].map((cls, i) => (
                <input
                    key={i}
                    ref={el => { if (el) inputsRef.current[i] = el; }}
                    type="text"
                    className={`${styles.input} ${styles[cls]}`}
                />
            ))}

            {/* Guarnições */}
            {Array.from({ length: 8 }, (_, i) => (
                <input
                    key={i + 9}
                    ref={el => { if (el) inputsRef.current[i + 9] = el; }}
                    type="text"
                    className={`${styles.input} ${styles[`guarnicao${i + 1}`]}`}
                />
            ))}

            {/* Áreas */}
            {['areas1', 'areas2', 'areas3', 'areas4'].map((cls, i) => (
                <select
                    key={i + 17}
                    ref={el => { if (el) selectsRef.current[i] = el; }}
                    className={`${styles.input} ${styles[cls]}`}
                    style={{ fontFamily: 'monospace' }}
                >
                    <option value=""></option>
                    <option value="Área 1">1/2    3/4    1/2    3/4</option>
                    <option value="Área 2">3/4    1/2    3/4    1/2</option>
                    <option value="Área 3">L    I    V    R    E</option>
                </select>
            ))}

            {/* Setor de Serviço */}
            {['cecom', 'paco', 'cem', 'medici', 'patio', 'crecheDoTreviso', 'crecheDoTrevisoCampo',
                'outro1', 'outro1Campo', 'outro2', 'outro2Campo', 'outro3', 'outro3Campo'].map((cls, i) => (
                    <input
                        key={i + 21}
                        ref={el => { if (el) inputsRef.current[i + 21] = el; }}
                        type="text"
                        className={`${styles.input} ${styles[cls]}`}
                    />
                ))}

            {/* Observação */}
            <textarea ref={textAreaRef} className={`${styles.textarea} ${styles.observacao}`} />
        </div>
    );
};

export default NightShiftPage;
