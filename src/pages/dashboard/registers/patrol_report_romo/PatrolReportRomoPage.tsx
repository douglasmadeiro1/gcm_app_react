// src/pages/dashboard/registers/patrol_report_romo/PatrolReportRomoPage.tsx
import React, { useEffect } from "react";
import "./PatrolReportRomoPage.css";
import frontImg from "../../../../assets/image/patrulhamento-romo-frente.jpg";
import backImg from "../../../../assets/image/patrulhamento-verso.jpg";

const PatrolReportRomoPage: React.FC = () => {
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
                <img src={frontImg} className="form-background" alt="Frente" />

                <input type="text" className="input vtr1" placeholder="" />
                <input type="text" className="input km1" placeholder="" />
                <input type="text" className="input vtr2" placeholder="" />
                <input type="text" className="input km2" placeholder="" />
                <input type="text" className="input vtr3" placeholder="" />
                <input type="text" className="input km3" placeholder="" />
                <input type="text" className="input data" placeholder="" />
                <input type="text" className="input turno1" placeholder="" />
                <input type="text" className="input turno2" placeholder="" />
                <input type="text" className="input equipe" placeholder="" />
                <input type="text" className="input ht" placeholder="" />
                <input type="text" className="input talao" placeholder="" />
                <input type="text" className="input km" placeholder="" />

                <select className="input areas" style={{ fontFamily: "monospace" }}>
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

            {/* Página 2 - Verso */}
            <div className="pagina verso">
                <img src={backImg} className="form-background" alt="Verso" />
            </div>
        </div>
    );
};

export default PatrolReportRomoPage;
