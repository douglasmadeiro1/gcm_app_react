// src/pages/dashboard/registers/release_term/ReleaseTermPage.tsx
import React, { useEffect } from "react";
import "./ReleaseTermPage.css";
import releaseImg from "../../../../assets/image/liberacao.jpg";

const ReleaseTermPage: React.FC = () => {
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
        const elements = document.querySelectorAll<HTMLInputElement | HTMLTextAreaElement>(".input, .observacao");

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
        <div className="form-container">
            <img src={releaseImg} className="form-background" alt="Termo de Liberação" />

            <input type="text" className="input day" placeholder="" />
            <input type="text" className="input month" placeholder="" />
            <input type="text" className="input ofice" placeholder="" />
            <input type="text" className="input name" placeholder="" />
            <input type="text" className="input cpf" placeholder="" />
            <input type="text" className="input recolhimento" placeholder="" />
            <input type="text" className="input placa" placeholder="" />
            <input type="text" className="input chassi" placeholder="" />
        </div>
    );
};

export default ReleaseTermPage;
