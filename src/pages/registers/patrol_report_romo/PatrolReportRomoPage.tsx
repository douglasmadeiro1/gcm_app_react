import React, { useEffect, useRef } from "react";
import frenteImg from "../../../assets/image/patrulhamento-romo-frente.jpg";
import versoImg from "../../../assets/image/patrulhamento-verso.jpg";
import styles from "./PatrolReportRomoPage.module.css";

const PatrolReportRomoPage: React.FC = () => {
    const inputsRef = useRef<(HTMLInputElement | HTMLSelectElement)[]>([]);

    const ajustarFonte = (el: HTMLInputElement | HTMLSelectElement) => {
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

            const inputHandler = () => ajustarFonte(el);
            const resizeHandler = () => ajustarFonte(el);

            el.addEventListener("input", inputHandler);
            window.addEventListener("resize", resizeHandler);

            return () => {
                el.removeEventListener("input", inputHandler);
                window.removeEventListener("resize", resizeHandler);
            };
        });
    }, []);

    const addRef = (el: HTMLInputElement | HTMLSelectElement | null) => {
        if (el && !inputsRef.current.includes(el)) inputsRef.current.push(el);
    };

    const campos = ["vtr1", "km1", "vtr2", "km2", "vtr3", "km3", "data", "turno1", "turno2", "equipe", "ht", "talao", "km"];

    return (
        <div className={`${styles.formContainer} ${styles.debug}`}>
            {/* Página Frente */}
            <div className={styles.pagina}>
                <img src={frenteImg} className={styles["form-background"]} alt="Frente" />
                {campos.map(campo => (
                    <input key={campo} type="text" className={`${styles.input} ${styles[campo]}`} ref={addRef} />
                ))}
                <select className={`${styles.input} ${styles.areas}`} ref={addRef}>
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

            {/* Página Verso */}
            <div className={styles.pagina}>
                <img src={versoImg} className={styles["form-background"]} alt="Verso" />
            </div>
        </div>
    );
};

export default PatrolReportRomoPage;
