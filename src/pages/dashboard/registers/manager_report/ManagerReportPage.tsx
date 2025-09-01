// src/pages/dashboard/registers/manager_report/ManagerReportPage.tsx
import React, { useEffect } from "react";
import "./ManagerReportPage.css";
import managerFrontImg from "../../../../assets/image/encarregado-frente.jpg";
import managerBackImg from "../../../../assets/image/encarregado-verso.jpg";

const ManagerReportPage: React.FC = () => {
    // Função para ajustar a fonte do input dinamicamente
    const ajustarFonte = (input: HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement) => {
        const maxFontSize = 16;
        const minFontSize = 8;
        const step = 0.5;

        let fontSize = maxFontSize;
        input.style.fontSize = fontSize + "px";

        while (
            (input.scrollWidth > input.clientWidth || input.scrollHeight > input.clientHeight) &&
            fontSize > minFontSize
        ) {
            fontSize -= step;
            input.style.fontSize = fontSize + "px";
        }

        while (
            input.scrollWidth <= input.clientWidth &&
            input.scrollHeight <= input.clientHeight &&
            fontSize + step <= maxFontSize
        ) {
            fontSize += step;
            if (input.scrollWidth > input.clientWidth || input.scrollHeight > input.clientHeight) {
                fontSize -= step;
                break;
            }
        }

        input.style.fontSize = fontSize + "px";
    };

    useEffect(() => {
        const elements = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>(
            ".input, .observacao"
        );

        elements.forEach(el => {
            ajustarFonte(el);
            el.addEventListener("input", () => ajustarFonte(el));
        });

        const handleResize = () => {
            elements.forEach(el => ajustarFonte(el));
        };
        window.addEventListener("resize", handleResize);

        // Limpa campos ao carregar
        elements.forEach(el => (el.value = ""));

        return () => {
            window.removeEventListener("resize", handleResize);
            elements.forEach(el => el.removeEventListener("input", () => ajustarFonte(el)));
        };
    }, []);

    return (
        <div className="formulario">
            {/* Página 1 - Frente */}
            <div className="pagina frente">
                <img src={managerFrontImg} className="form-background" alt="Frente" />

                <input type="text" className="input campo-encarregado" placeholder="" />
                <input type="text" className="input campo-data" placeholder="" />
                <input type="text" className="input campo-hora" placeholder="" />

                <input type="text" className="input vtr1" placeholder="" />
                <input type="text" className="input vtr2" placeholder="" />
                <input type="text" className="input vtr3" placeholder="" />
                <input type="text" className="input vtr4" placeholder="" />
                <input type="text" className="input vtrGoc" placeholder="" />
                <input type="text" className="input vtrGpar" placeholder="" />
                <input type="text" className="input vtrRomu" placeholder="" />
                <input type="text" className="input vtrRomo1" placeholder="" />

                <input type="text" className="input guarnicao1" placeholder="" />
                <input type="text" className="input guarnicao2" placeholder="" />
                <input type="text" className="input guarnicao3" placeholder="" />
                <input type="text" className="input guarnicao4" placeholder="" />
                <input type="text" className="input guarnicao5" placeholder="" />
                <input type="text" className="input guarnicao6" placeholder="" />
                <input type="text" className="input guarnicao7" placeholder="" />
                <input type="text" className="input guarnicao8" placeholder="" />

                <select className="input areas1" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="LIVRE">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas2" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="LIVRE">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas3" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="LIVRE">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>
                <select className="input areas4" style={{ fontFamily: "monospace" }}>
                    <option value=""></option>
                    <option value="Área 1">1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4</option>
                    <option value="Área 2">3/4&nbsp;&nbsp;1/2&nbsp;&nbsp;3/4&nbsp;&nbsp;1/2</option>
                    <option value="LIVRE">L&nbsp;&nbsp;I&nbsp;&nbsp;V&nbsp;&nbsp;R&nbsp;&nbsp;E</option>
                </select>

                <input type="text" className="input cecom" placeholder="" />
                <input type="text" className="input paco" placeholder="" />
                <input type="text" className="input cem" placeholder="" />
                <input type="text" className="input medici" placeholder="" />
                <input type="text" className="input patio" placeholder="" />

                <input type="text" className="input outro0" placeholder="" />
                <input type="text" className="input outro0-campo" placeholder="" />
                <input type="text" className="input outro1" placeholder="" />
                <input type="text" className="input outro1-campo" placeholder="" />
                <input type="text" className="input outro2" placeholder="" />
                <input type="text" className="input outro2-campo" placeholder="" />
                <input type="text" className="input outro3" placeholder="" />
                <input type="text" className="input outro3-campo" placeholder="" />

                <textarea className="textarea observacao" placeholder=""></textarea>
            </div>

            {/* Página 2 - Verso */}
            <div className="pagina verso">
                <img src={managerBackImg} className="form-background" alt="Verso" />
                <textarea className="observacao campo3" placeholder="Observações"></textarea>
            </div>
        </div>
    );
};

export default ManagerReportPage;
