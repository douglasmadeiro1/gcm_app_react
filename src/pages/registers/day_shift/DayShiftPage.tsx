import React, { useEffect, useRef } from 'react';
import styles from './DayShiftPage.module.css';
import plantaoDiurno from '../../../assets/image/plantao-diurno.jpg';

const DayShiftPage: React.FC = () => {
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

        while ((el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight) && fontSize + step <= maxFontSize) {
            fontSize += step;
            if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
                fontSize -= step;
                break;
            }
        }

        el.style.fontSize = fontSize + "px";
    };

    useEffect(() => {
        inputsRef.current.forEach(input => {
            ajustarFonte(input);
            input.addEventListener('input', () => ajustarFonte(input));
            input.value = '';
        });

        selectsRef.current.forEach(select => {
            ajustarFonte(select);
            select.addEventListener('change', () => ajustarFonte(select));
        });

        if (textAreaRef.current) {
            ajustarFonte(textAreaRef.current);
            textAreaRef.current.addEventListener('input', () => ajustarFonte(textAreaRef.current!));
            textAreaRef.current.value = '';
        }

        return () => {
            inputsRef.current.forEach(input => input.removeEventListener('input', () => ajustarFonte(input)));
            selectsRef.current.forEach(select => select.removeEventListener('change', () => ajustarFonte(select)));
            if (textAreaRef.current) textAreaRef.current.removeEventListener('input', () => ajustarFonte(textAreaRef.current!));
        };
    }, []);

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            <img src={plantaoDiurno} className={styles.formBackground} alt="Modelo de Plantão" />

            {/* Campo data + VTRs */}
            {[
                'campoData',
                'vtr1',
                'vtr2',
                'vtr3',
                'vtr4',
                'vtrGoc',
                'vtrGpar',
                'vtrRomu',
                'vtrRomo1',
            ].map((cls, i) => (
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

            {/* Selects Áreas */}
            {['areas1', 'areas2', 'areas3', 'areas4'].map((cls, i) => (
                <select
                    key={i + 17}
                    ref={el => { if (el) selectsRef.current[i] = el; }}
                    className={`${styles.input} ${styles[cls]}`}
                    style={{ fontFamily: 'monospace' }}
                >
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2</option>
                    <option value="Área 3">L&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;&nbsp;E</option>
                </select>
            ))}

            {/* Setores */}
            {[
                'cecom',
                'paco',
                'cem',
                'medici',
                'patio',
                'crecheTreviso',
                'crecheTrevisoCampo',
                'outro1',
                'outro1Campo',
                'outro2',
                'outro2Campo',
                'outro3',
                'outro3Campo',
            ].map((cls, i) => (
                <input
                    key={i + 21}
                    ref={el => { if (el) inputsRef.current[i + 21] = el; }}
                    type="text"
                    className={`${styles.input} ${styles[cls]}`}
                />
            ))}

            {/* Observação */}
            <textarea
                ref={textAreaRef}
                className={`${styles.textarea} ${styles.observacao}`}
            />
        </div>
    );
};

export default DayShiftPage;
