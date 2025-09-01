// src/pages/dashboard/registers/patrol_report/PatrolReportPage.tsx
import React, { useEffect } from "react";
import "./PatrolReportPage.css";
import patrolFrontImg from "../../../../assets/image/patrulhamento-frente.jpg";
import patrolBackImg from "../../../../assets/image/patrulhamento-verso.jpg";

const PatrolReportPage: React.FC = () => {

    // Função para ajustar a fonte do input dinamicamente
    const ajustarFonte = (input: HTMLInputElement | HTMLTextAreaElement) => {
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
        const inputs = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".input, .observacao");
        inputs.forEach(el => {
            ajustarFonte(el);
            el.addEventListener("input", () => ajustarFonte(el));
        });

        const handleResize = () => {
            inputs.forEach(el => ajustarFonte(el));
        };
        window.addEventListener("resize", handleResize);

        // Limpa campos ao carregar
        inputs.forEach(el => el.value = "");

        return () => {
            window.removeEventListener("resize", handleResize);
            inputs.forEach(el => el.removeEventListener("input", () => ajustarFonte(el)));
        };
    }, []);

    return (
        <div className="formulario">
            {/* Página 1 - Frente */}
            <div className="pagina frente">
                <img src={patrolFrontImg} className="form-background" alt="Frente" />
                <input type="text" className="input vtr" placeholder="" />
                <input type="text" className="input data" placeholder="" />
                <input type="text" className="input turno1" placeholder="" />
                <input type="text" className="input turno2" placeholder="" />
                <input type="text" className="input equipe" placeholder="" />
                <input type="text" className="input ht" placeholder="" />
                <input type="text" className="input talao" placeholder="" />
                <input type="text" className="input km" placeholder="" />
                <select className="input areas">
                    <option value=""></option>
                    <option value="Área 1">1/2 - 3/4 - 1/2 - 3/4</option>
                    <option value="Área 2">3/4 - 1/2 - 3/4 - 1/2</option>
                    <option value="GOC">GOC</option>
                    <option value="ROMU">ROMU</option>
                    <option value="GPAR">GPAR</option>
                    <option value="ROMO">ROMO</option>
                    <option value="LIVRE">LIVRE</option>
                </select>
                {/* Adicione aqui outros campos da frente */}
            </div>

            {/* Página 2 - Verso */}
            <div className="pagina verso">
                <img src={patrolBackImg} className="form-background" alt="Verso" />
            </div>
        </div>
    );
};

export default PatrolReportPage;
