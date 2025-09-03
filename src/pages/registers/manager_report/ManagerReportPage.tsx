import React, { useEffect, useRef } from "react";
import styles from "./ManagerReportPage.module.css";
import frenteImg from "../../../assets/image/encarregado-frente.jpg";
import versoImg from "../../../assets/image/encarregado-verso.jpg";

const ManagerReportPage: React.FC = () => {
    const inputsRef = useRef<HTMLInputElement[]>([]);
    const textareasRef = useRef<HTMLTextAreaElement[]>([]);

    const ajustarFonte = (el: HTMLInputElement | HTMLTextAreaElement) => {
        const maxFontSize = 16;
        const minFontSize = 8;
        const step = 0.5;
        let fontSize = maxFontSize;
        el.style.fontSize = fontSize + "px";

        while ((el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) && fontSize > minFontSize) {
            fontSize -= step;
            el.style.fontSize = fontSize + "px";
        }

        while (el.scrollWidth <= el.clientWidth && el.scrollHeight <= el.clientHeight && fontSize + step <= maxFontSize) {
            fontSize += step;
            el.style.fontSize = fontSize + "px";
            if (el.scrollWidth > el.clientWidth || el.scrollHeight > el.clientHeight) {
                fontSize -= step;
                el.style.fontSize = fontSize + "px";
                break;
            }
        }
    };

    useEffect(() => {
        const allInputs = document.querySelectorAll<HTMLInputElement>(`.${styles.input}`);
        const allTextareas = document.querySelectorAll<HTMLTextAreaElement>(`.${styles.observacao}`);

        inputsRef.current = Array.from(allInputs);
        textareasRef.current = Array.from(allTextareas);

        [...inputsRef.current, ...textareasRef.current].forEach(el => {
            el.value = "";
            ajustarFonte(el);
            el.addEventListener("input", () => ajustarFonte(el));
            window.addEventListener("resize", () => ajustarFonte(el));
        });

        return () => {
            [...inputsRef.current, ...textareasRef.current].forEach(el => {
                el.removeEventListener("input", () => ajustarFonte(el));
                window.removeEventListener("resize", () => ajustarFonte(el));
            });
        };
    }, []);

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            {/* Página 1 - Frente */}
            <div className={`${styles.pagina} ${styles.frente}`}>
                <img src={frenteImg} className={styles.formBackground} alt="Frente" />
                <input type="text" className={`${styles.input} ${styles.campoEncarregado}`} />
                <input type="text" className={`${styles.input} ${styles.campoData}`} />
                <input type="text" className={`${styles.input} ${styles.campoHora}`} />
                <input type="text" className={`${styles.input} ${styles.vtr1}`} />
                <input type="text" className={`${styles.input} ${styles.vtr2}`} />
                <input type="text" className={`${styles.input} ${styles.vtr3}`} />
                <input type="text" className={`${styles.input} ${styles.vtr4}`} />
                <input type="text" className={`${styles.input} ${styles.vtrGoc}`} />
                <input type="text" className={`${styles.input} ${styles.vtrGpar}`} />
                <input type="text" className={`${styles.input} ${styles.vtrRomu}`} />
                <input type="text" className={`${styles.input} ${styles.vtrRomo1}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao1}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao2}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao3}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao4}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao5}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao6}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao7}`} />
                <input type="text" className={`${styles.input} ${styles.guarnicao8}`} />

                <select className={`${styles.input} ${styles.areas1}`}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className={`${styles.input} ${styles.areas2}`}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className={`${styles.input} ${styles.areas3}`}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className={`${styles.input} ${styles.areas4}`}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>

                <input type="text" className={`${styles.input} ${styles.cecom}`} />
                <input type="text" className={`${styles.input} ${styles.paco}`} />
                <input type="text" className={`${styles.input} ${styles.cem}`} />
                <input type="text" className={`${styles.input} ${styles.medici}`} />
                <input type="text" className={`${styles.input} ${styles.patio}`} />
                <input type="text" className={`${styles.input} ${styles.outro0}`} />
                <input type="text" className={`${styles.input} ${styles.outro0Campo}`} />
                <input type="text" className={`${styles.input} ${styles.outro1}`} />
                <input type="text" className={`${styles.input} ${styles.outro1Campo}`} />
                <input type="text" className={`${styles.input} ${styles.outro2}`} />
                <input type="text" className={`${styles.input} ${styles.outro2Campo}`} />
                <input type="text" className={`${styles.input} ${styles.outro3}`} />
                <input type="text" className={`${styles.input} ${styles.outro3Campo}`} />

                <textarea className={`${styles.textarea} ${styles.observacao}`} />
            </div>

            {/* Página 2 - Verso */}
            <div className={styles.pagina}>
                <img src={versoImg} className={styles.formBackground} alt="Verso" />
                <textarea className={`${styles.observacao} ${styles.campo3}`} placeholder="Observações" />
            </div>
        </div>
    );
};

export default ManagerReportPage;
