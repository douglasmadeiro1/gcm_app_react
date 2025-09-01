import React, { useEffect, useRef } from "react";
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
        const allInputs = document.querySelectorAll<HTMLInputElement>(".input");
        const allTextareas = document.querySelectorAll<HTMLTextAreaElement>(".observacao");

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
        <div className="form-container">
            {/* Página 1 - Frente */}
            <div className="pagina frente">
                <img src={frenteImg} className="form-background" alt="Frente" />
                <input type="text" className="input campo-encarregado" />
                <input type="text" className="input campo-data" />
                <input type="text" className="input campo-hora" />
                <input type="text" className="input vtr1" />
                <input type="text" className="input vtr2" />
                <input type="text" className="input vtr3" />
                <input type="text" className="input vtr4" />
                <input type="text" className="input vtrGoc" />
                <input type="text" className="input vtrGpar" />
                <input type="text" className="input vtrRomu" />
                <input type="text" className="input vtrRomo1" />
                <input type="text" className="input guarnicao1" />
                <input type="text" className="input guarnicao2" />
                <input type="text" className="input guarnicao3" />
                <input type="text" className="input guarnicao4" />
                <input type="text" className="input guarnicao5" />
                <input type="text" className="input guarnicao6" />
                <input type="text" className="input guarnicao7" />
                <input type="text" className="input guarnicao8" />

                <select className="input areas1" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas2" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas3" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas4" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="Livre">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>

                <input type="text" className="input cecom" />
                <input type="text" className="input paco" />
                <input type="text" className="input cem" />
                <input type="text" className="input medici" />
                <input type="text" className="input patio" />
                <input type="text" className="input outro0" />
                <input type="text" className="input outro0-campo" />
                <input type="text" className="input outro1" />
                <input type="text" className="input outro1-campo" />
                <input type="text" className="input outro2" />
                <input type="text" className="input outro2-campo" />
                <input type="text" className="input outro3" />
                <input type="text" className="input outro3-campo" />

                <textarea className="textarea observacao" />
            </div>

            {/* Página 2 - Verso */}
            <div className="pagina">
                <img src={versoImg} className="form-background" alt="Verso" />
                <textarea className="observacao campo3" placeholder="Observações" />
            </div>
        </div>
    );
};

export default ManagerReportPage;
