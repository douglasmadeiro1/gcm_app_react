import React, { useEffect, useRef } from "react";
import releaseImg from "../../../assets/image/liberacao.jpg";
import styles from "./ReleaseTermPage.module.css";

const ReleaseTermPage: React.FC = () => {
    const inputsRef = useRef<(HTMLInputElement | HTMLTextAreaElement)[]>([]);

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
        inputsRef.current.forEach(el => {
            el.value = "";
            ajustarFonte(el);

            const handleInput = () => ajustarFonte(el);
            const handleResize = () => ajustarFonte(el);

            el.addEventListener("input", handleInput);
            window.addEventListener("resize", handleResize);

            return () => {
                el.removeEventListener("input", handleInput);
                window.removeEventListener("resize", handleResize);
            };
        });
    }, []);

    const addRef = (el: HTMLInputElement | HTMLTextAreaElement | null) => {
        if (el && !inputsRef.current.includes(el)) inputsRef.current.push(el);
    };

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            <img src={releaseImg} className={styles.formBackground} alt="Termo de Liberação" />

            {/* Campos */}
            <input type="text" className={`${styles.input} ${styles.day}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.month}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.ofice}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.name}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.cpf}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.recolhimento}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.placa}`} ref={addRef} />
            <input type="text" className={`${styles.input} ${styles.chassi}`} ref={addRef} />

            {/* Observação */}
            <textarea className={styles.observacao} ref={addRef}></textarea>
        </div>
    );
};

export default ReleaseTermPage;
