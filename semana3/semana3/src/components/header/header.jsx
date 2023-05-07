import React from "react";
import "./header.css"

function Header(){
    return(
        <header>
            <img className="foto-perfil" src="D:\Users\izabela\desktop\AfroTech\semana3\ReadyPlayerMe-Avatar.png" alt="" />
            <span className="nome-usuario">Izabela Bertozo</span>
            <div className="lidos">
                <span>100</span>
                <span>lidos</span>
            </div>
            <div className="vou-ler">
                <span>30</span>
                <span>vou ler</span>
            </div>
        </header>
    );
}

export default Header;