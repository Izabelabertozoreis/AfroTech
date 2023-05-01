import React from "react";
import './header.css'
const Header = ({ imagemPerfil, nome, livrosLidos, livrosVouLer }) => {
    return (
      <header>
        <img src={imagemPerfil} alt="Imagem de perfil" />
        <h1>{nome}</h1>
        <p>Livros lidos: {10}</p>
        <p>Livros que vou ler: {180}</p>
      </header>
    );
  }
  
  export default Header;