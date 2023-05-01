import React from 'react';
import CardAvaliacao from './CardAvaliacao';

const Catalogo = ({ livros }) => {
  return (
    <div className="catalogo">
      <h2>Catálogo</h2>
      <div className="catalogo-estante">
        {livros.map((livro) => (
          <CardAvaliacao key={livro.id} livro={livro} />
        ))}
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

export default Catalogo;