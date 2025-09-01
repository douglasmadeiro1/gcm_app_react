import React, { useEffect, useRef } from "react";
import frenteImg from "../../../assets/image/patrulhamento-romo-frente.jpg";
import versoImg from "../../../assets/image/patrulhamento-verso.jpg";
import "./PatrolReportRomoPage.css";

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

    return (
        <div className="formulario">
            {/* Página Frente */}
            <div className="pagina frente">
                <img src={frenteImg} className="form-background" alt="Frente" />

                {/* Campos */}
                {["vtr1", "km1", "vtr2", "km2", "vtr3", "km3", "data", "turno1", "turno2", "equipe", "ht", "talao", "km"].map(campo => (
                    <input key={campo} type="text" className={`input ${campo}`} ref={addRef} />
                ))}

                <select className="input areas" ref={addRef}>
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
            <div className="pagina verso">
                <img src={versoImg} className="form-background" alt="Verso" />
            </div>
        </div>
    );
};

export default PatrolReportRomoPage;
