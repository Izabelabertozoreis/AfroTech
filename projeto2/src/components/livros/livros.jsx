import React from 'react';

const CardAvaliacao = ({ livro }) => {
  return (
    <div className="card-avaliacao">
      <img src={livro.imagem} alt={livro.titulo} />
      <div className="card-avaliacao-info">
        <h3>{livro.titulo}</h3>
        <p>{livro.descricao}</p>
        <div className="card-avaliacao-estrelas">
          {[...Array(livro.avaliacao)].map((e, i) => (
            <i key={i} className="fa fa-star"></i>
          ))}
        </div>
      </div>
    </div>
  );
};

const livros = [
    {
      id: 1,
      titulo: 'O Senhor dos Anéis',
      autor: 'J.R.R. Tolkien',
      imagem: 'https://via.placeholder.com/150x200',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avaliacao: 4,
    },
    {
      id: 2,
      titulo: 'Harry Potter e a Pedra Filosofal',
      autor: 'J.K. Rowling',
      imagem: 'https://via.placeholder.com/150x200',
      descricao: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      avaliacao: 5,
    },
  ];
export default CardAvaliacao;