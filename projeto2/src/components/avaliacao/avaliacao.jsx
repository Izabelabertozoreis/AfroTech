import React from 'react';

const LivroAvaliado = ({ imagemLivro, avaliacao }) => {
  return (
    <div>
      <img src={imagemLivro} alt="Imagem do livro" />
      <div>
        <span>{avaliacao}</span>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star"></i>
        <i className="fa fa-star-half-o"></i>
      </div>
    </div>
  );
}

export default LivroAvaliado;