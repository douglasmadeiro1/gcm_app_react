import React, { useEffect, useRef } from "react";
import frenteImg from "../../../assets/image/patrulhamento-frente.jpg";
import versoImg from "../../../assets/image/patrulhamento-verso.jpg";
import styles from "./PatrolReportPage.module.css";

const PatrolReportPage: React.FC = () => {
    const inputRefs = useRef<HTMLInputElement[]>([]);
    const selectRefs = useRef<HTMLSelectElement[]>([]);

    const ajustarFonte = (el: HTMLInputElement | HTMLSelectElement) => {
        const maxFontSize = 16;
        const minFontSize = 8;
        const step = 0.5;
        let fontSize = maxFontSize;
        el.style.fontSize = `${fontSize}px`;

        while ((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && fontSize > minFontSize) {
            fontSize -= step;
            el.style.fontSize = `${fontSize}px`;
        }

        while (el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight && fontSize + step <= maxFontSize) {
            fontSize += step;
            el.style.fontSize = `${fontSize}px`;
            if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
                fontSize -= step;
                el.style.fontSize = `${fontSize}px`;
                break;
            }
        }
    };

    useEffect(() => {
        [...inputRefs.current, ...selectRefs.current].forEach(el => {
            ajustarFonte(el);
            if (el instanceof HTMLInputElement) el.value = '';
            if (el instanceof HTMLSelectElement) el.selectedIndex = 0;
            el.addEventListener('input', () => ajustarFonte(el));
            window.addEventListener('resize', () => ajustarFonte(el));
        });
    }, []);

    const addInputRef = (el: HTMLInputElement | null) => {
        if (el && !inputRefs.current.includes(el)) inputRefs.current.push(el);
    };
    const addSelectRef = (el: HTMLSelectElement | null) => {
        if (el && !selectRefs.current.includes(el)) selectRefs.current.push(el);
    };

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            <div className={styles.pagina}>
                <img src={frenteImg} className={styles["form-background"]} alt="Frente" />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.vtr}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.data}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.turno1}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.turno2}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.equipe}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.ht}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.talao}`} />
                <input ref={addInputRef} type="text" className={`${styles.input} ${styles.km}`} />
                <select ref={addSelectRef} className={`${styles.input} ${styles.areas}`}>
                    <option value=""></option>
                    <option value="Área 1">1/2 - 3/4 - 1/2 - 3/4</option>
                    <option value="Área 2">3/4 - 1/2 - 3/4 - 1/2</option>
                    <option value="GOC">GOC</option>
                    <option value="ROMU">ROMU</option>
                    <option value="GPAR">GPAR</option>
                    <option value="ROMO">ROMO</option>
                    <option value="LIVRE">LIVRE</option>
                </select>
            </div>

            <div className={styles.pagina}>
                <img src={versoImg} className={styles["form-background"]} alt="Verso" />
            </div>
        </div>
    );
};

export default PatrolReportPage;
