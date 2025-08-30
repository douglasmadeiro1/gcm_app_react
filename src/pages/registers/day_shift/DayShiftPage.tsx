// src/pages/documents/DayShiftPage.tsx
import React, { useEffect, useRef } from 'react';
import './DayShiftPage.css';
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
        <div className="form-container">
            <img src={plantaoDiurno} className="form-background" alt="Modelo de Plantão" />

            {/* Inputs VTR */}
            {[
                { className: 'campo-data', placeholder: 'Data' },
                { className: 'vtr1', placeholder: 'VTR 1' },
                { className: 'vtr2', placeholder: 'VTR 2' },
                { className: 'vtr3', placeholder: 'VTR 3' },
                { className: 'vtr4', placeholder: 'VTR 4' },
                { className: 'vtrGoc', placeholder: 'VTR Goc' },
                { className: 'vtrGpar', placeholder: 'VTR Gpar' },
                { className: 'vtrRomu', placeholder: 'VTR Romu' },
                { className: 'vtrRomo1', placeholder: 'VTR Romo1' },
            ].map((item, i) => (
                <input
                    key={i}
                    ref={el => { if (el) inputsRef.current[i] = el; }}
                    type="text"
                    className={`input ${item.className}`}
                    placeholder={item.placeholder}
                />
            ))}

            {/* Inputs Guarnições */}
            {Array.from({ length: 8 }, (_, i) => (
                <input
                    key={i + 9}
                    ref={el => { if (el) inputsRef.current[i + 9] = el; }}
                    type="text"
                    className={`input guarnicao${i + 1}`}
                    placeholder={`Guarnição ${i + 1}`}
                />
            ))}

            {/* Selects Áreas */}
            {['areas1', 'areas2', 'areas3', 'areas4'].map((area, i) => (
                <select
                    key={i + 17}
                    ref={el => { if (el) selectsRef.current[i] = el; }}
                    className={`input ${area}`}
                    style={{ fontFamily: 'monospace' }}
                >
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2&nbsp;&nbsp;&nbsp;&nbsp;3/4&nbsp;&nbsp;&nbsp;&nbsp;1/2</option>
                    <option value="Área 3">L&nbsp;&nbsp;&nbsp;&nbsp;I&nbsp;&nbsp;&nbsp;&nbsp;V&nbsp;&nbsp;&nbsp;&nbsp;R&nbsp;&nbsp;&nbsp;&nbsp;E</option>
                </select>
            ))}

            {/* Inputs restantes */}
            {['cecom', 'paco', 'cem', 'medici', 'patio', 'creche-do-treviso', 'creche-do-treviso-campo', 'outro1', 'outro1-campo', 'outro2', 'outro2-campo', 'outro3', 'outro3-campo'].map((cls, i) => (
                <input
                    key={i + 21}
                    ref={el => { if (el) inputsRef.current[i + 21] = el; }}
                    type="text"
                    className={`input ${cls}`}
                    placeholder={cls.replace(/-/g, ' ')}
                />
            ))}

            {/* Textarea */}
            <textarea
                ref={textAreaRef}
                className="textarea observacao"
                placeholder="Observações"
            />
        </div>
    );
};

export default DayShiftPage;
